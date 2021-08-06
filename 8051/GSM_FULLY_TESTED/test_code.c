#include<reg51.h>

sbit rs = P1^0;
sbit rw = P1^1;
sbit e = P1^2;

sbit gas=P1^3;
sbit temp=P1^4;

sbit fan=P3^2;
sbit motor_pump=P3^3;



void serial_cmm_init()
{
TMOD=0x20;
TH1=0xfd;
SCON=0x50;
TR1=1;
}


void delay(unsigned int i)
{
while(i--);
}

void cmd(unsigned char c)
{ 
P2=c;
rs=0;
rw=0;
e=1;
delay(50);
e=0;
}

void dat(unsigned char c)
{ 
P2=c;
rs=1;
rw=0;
e=1;
delay(50);
e=0;
}

void string(unsigned char *p)
{
	while(*p != '\0')
	{
		dat(*p);
		p++;
		delay(30);
	}
}

void lcd()
{
	cmd(0x38);
	delay(200);
	cmd(0x01);
	delay(200);
	cmd(0x0e);
	delay(200);
	cmd(0x80);
	delay(200);
}

 

	  void send(unsigned char *p)
	  {
	  while(*p!='\0')
	  {
	  SBUF=*p;
	  p++;
	  while(TI==0);
	  TI=0;
	  }
	  }

	void msg ()
	{
	send("AT\r\n");
delay(50000);
delay(50000);
delay(50000);
delay(50000);
delay(50000);
delay(50000);
delay(50000);

send("AT+CMGF=1\r\n");
delay(50000);
delay(50000);
delay(50000);
delay(50000);
delay(50000);
delay(50000);
delay(50000);


send("AT+CMGS=\"+919765415053\"\r\n");
delay(50000);
delay(50000);
delay(50000);
delay(50000);
delay(50000);
delay(50000);
delay(50000);
delay(50000);

}


	void main()
	{

	serial_cmm_init();
	lcd();
	 gas=0;
	 temp=0;
	fan=0;
	motor_pump=0;

	while(1)
	{
	 
	 if(gas==1)
	 {
	 fan=1;
	 msg();
	 send("GAS IN UR HOUSE");
	
	SBUF=0X1A;
	while(TI==0);
	TI=0;
delay(50000);
delay(50000);
delay(50000);
delay(50000);
delay(50000);
delay(50000);
delay(50000);
delay(50000);

cmd(0x80);
string("GAS SENSOR");
cmd(0xc0);
string("  DETECTED  ");
	 }

	
	 if(temp==1)
	 {
	 motor_pump=1;
	 msg();
	 send("FIRE IN UR HOUSE");
	
	SBUF=0X1A;
	while(TI==0);
	TI=0;
delay(50000);
delay(50000);
delay(50000);
delay(50000);
delay(50000);
delay(50000);
delay(50000);
delay(50000);

cmd(0x80);
string("TEMP SENSOR");
cmd(0xc0);
string("  DETECTED  ");
	 }

	}
	}

