//.............REAL TIME CLOCK.........//



#include<avr/io.h>
#include<util/delay.h>
#include<string.h>
#include<stdio.h>

unsigned char r;
void cmd(unsigned char c)
{
unsigned int l,h;
l=c &0X0F;
h=c>>4;


PORTD=h|0X40;
_delay_ms(20);
PORTD=h|0X00;

PORTD=l|0X40;
_delay_ms(20);
PORTD=l|0X00;
}


void dat (unsigned char c)
{
unsigned int l,h;
l=c &0X0F;
h=c>>4;

PORTD=h|0X50;	
_delay_ms(20);				
PORTD=h|0X10;

PORTD=l|0X50;
_delay_ms(20);
PORTD=l|0X10;
}


void lcd_init()
{
cmd(0x02);      // to return back cursor
_delay_ms(10);
cmd(0x28);       // to convert to 4bit.
_delay_ms(10);
cmd(0x01);
_delay_ms(10);
cmd(0x80);
_delay_ms(10);
cmd(0x0c);
_delay_ms(10);
}

void string(unsigned char *p)
{
while(*p!='\0')
{
dat(*p);
p++;
}
}




void start()
{
TWCR=(1<<TWINT)|(1<<TWSTA)|(1<<TWEN);
while((TWCR&(1<<TWINT))==0);
}

void stop()
{
TWCR=(1<<TWINT)|(1<<TWEN)|(1<<TWSTO);
while((TWCR&(1<<TWSTO)));
}


void address(unsigned char t)
{
TWDR=t;
TWCR=(1<<TWINT)|(1<<TWEN);
while((TWCR&(1<<TWINT))==0);
}

char read()
{
TWCR=(1<<TWINT)|(1<<TWEN);
while((TWCR&(1<<TWINT))==0);
return TWDR;
}



void write(unsigned char p)
{
start();
address(0XD0);   // to start RTC
address(0x02);  // Hours address
TWDR=p;           
TWCR=(1<<TWINT)|(1<<TWEN);
while((TWCR&(1<<TWINT))==0);
stop();
}


void repeated()
{
TWCR=(1<<TWINT)|(1<<TWSTA)|(1<<TWEN);
while((TWCR&(1<<TWINT))==0);
}






void hour()
{
unsigned int hr1,hr2,hr3;
start();
address(0xd0);   //RTC
address(0x02);   // hours address
start();
address(0xd1);
cmd(0xc2);        // lcd position

hr1=read();      //read data


hr2=hr1 &0X0F;          //lsb in hr2 gives time upto 9
hr3=((hr1)&0x10)>>4;    // for 10,11,12 time. (4-bit)
dat(48+hr3);

dat(48+hr2);

cmd(0xcb);         // lcd position
if(hr1&0x20)       // to check for AM and PM (5-bit)
string("PM");
else
string("AM");

stop();
}



void minute()
{
unsigned int i,j,k;
start();
address(0xd0); //RTC 
address(0x01); //minute address

start();
address(0xd1);    //RTC
cmd(0xc5);        //lcd position
i=read();         
j=i &0X0F;          
k=i>>4;
dat(48+k);         //MSB
dat(48+j);        //LSB

cmd(0xc4);    // lcd position
string(":");

stop();
}






void second()
{
unsigned int x,y,z;

start();
address(0xd0);   // RTC start address
address(0x00);   // seconds address
start();
address(0xd1);   // RTC address.
cmd(0xc8);      //address of LCD position to show seconds.      
x=read();
y=x &0X0F;     // 4 bit LCD
z=x>>4;
dat(48+z);      // MSB goes
dat(48+y);      //LSB goes
stop();
}




void day()
{
unsigned int d1,d2,d3;
start();
address(0xd0);   // to start RTC
address(0x03);   // address for day (pre-defined)
start();
address(0xd1);
cmd(0x8e);       // lcd position
d1=read();
d2=d1 &0X0F;     //lsb
string("WeekDay->");
dat(48+d2);     // if passing in num(); pass d2 directly.
stop();
switch(d2)
{
case 1 : string("     SUNDAY");
break;
case 2 : string("     MONDAY");
break;
case 3 : string("     TUESDAY");
break;
case 4 : string("     WEDNESDAY");
break;
case 5 : string("     THURSDAY");
break;
case 6 : string("     FRIDAY");
break;
case 7 : string("     SATURDAY");
break;
default : string("     SUNDAY ");
break;
}
}


void date()
{
unsigned int dt1,dt2,dt3;
start();
address(0xd0);           // RTC
address(0x04);           // address for date.
start();
address(0xd1);          
cmd(0x80);              // lcd position
dt1=read();             // read and pass to 4 bit LCD
dt2=dt1 &0X0F;          //lsb
dt3=dt1>>4;             //msb
dat(48+dt3);
dat(48+dt2);
stop();
}


void month()
{
unsigned int m1,m2,m3;
start();
address(0xd0);           // RTC
address(0x05);          // address for month.
start();
address(0xd1);
cmd(0x83);            // lcd position
m1=read();            // take input from RTC
m2=m1 &0X0F;         //lsb
m3=m1>>4;            //msb

dat(48+m3);
dat(48+m2);

stop();
cmd(0xce);        // lcd position

switch(m2|m3)
{
case 1 : string("     JANUARY");     // print on LCD.
break;

case 2 : string("     FEBRUARY");
break;

case 3 : string("     MARCH");
break;

case 4 : string("    APRIL");
break;

case 5 : string("     MAY");
break;

case 6 : string("     JUNE");
break;

case 7 : string("     JULY");
break;

case 8 : string("     AUGUST");
break;

case 9 : string("     SEPTEMBER");
break;

case 10 : string("     OCTOBER");
break;

case 11: string("     NOVEMBER");
break;

case 12 : string("     DECEMBER");
break;

}


}


void year()
{
unsigned int y1,y2,y3;
start();
address(0xd0);        // RTC
address(0x06);        // year address (pre-defined)
start();
address(0xd1);
cmd(0x86);           // lcd position
y1=read();
y2=y1 &0X0F;         //LSB
y3=y1>>4;            //MSB
dat(48+y3);
dat(48+y2);
stop();
}








void main()
{
DDRD=0XFF;         //port D output
lcd_init();       // initialise LCD
TWBR=255;         // set bit rate

//......to start RTC from a particular time we use write() ............//

write(0x62); ///---60 FOR 12:PM-------------62 for 2:PM-----------68 for 8:PM.

//string("H :M :S DD/MM/YY");
 

while(1)
{
hour();

minute();

second();

date();

month();

year();

day();


}
}
