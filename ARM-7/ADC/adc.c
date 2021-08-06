#include <LPC213x.h>

void delay( long unsigned int t)
 {
	while(t--);
 }


void cmd(unsigned char c)
 {
  unsigned int l,h;
  l=c & 0x0f;
  h=c>>4;
	
	
	
	IOPIN0=h|0x00000040;
	delay(10000);
  IOPIN0=h|0x00000000;
	delay(10000);
	
	IOPIN0=l|0x00000040;
	delay(10000);
  IOPIN0=l|0x00000000;
	delay(10000);
	
  IOCLR0=0xFFFFFFFF;
	
 }

void dat(unsigned char c)
{
 unsigned int l,h;
 l=c & 0x0f;
 h=c>>4;
  IOPIN0=h|0x00000050;
	delay(10000);
  IOPIN0=h|0x00000010;
	delay(10000);
	
	IOPIN0=l|0x00000050;
	delay(10000);
  IOPIN0=l|0x00000010;
	delay(10000);


  IOCLR0=0xFFFFFFFF;
}

void lcd()
{
cmd(0x02);
delay(50000);

cmd(0x28);
delay(50000);

 cmd(0x01);
 delay(50000);

cmd(0x0e);
delay(50000);

cmd(0x80);
delay(50000);
}

void string(unsigned char *p)
{
while(*p!='\0')
 {
  dat(*p);
  p++;
 }
}

void lint(int x)
{
	char buffer[10];
	sprintf(buffer, "%d",x);
	string(buffer);
}



int main()

{
 int x;	
 VPBDIV=0x01;              //related to clock//
 PINSEL1=0x00400000;
 IODIR0=0xFFFFFFFF;       //port0 as output//
 lcd();

	while(1)
   {
		cmd(0x80);
    AD0CR=0x01200401;
    while( (AD0DR&0x80000000)==0x00);
    x=(AD0DR&0xFFC0)>>6;
    string("TEMP=");
    lint(x*3/10.24);
    dat(223);               // ASCII of degree symbol
    dat('C');	
    delay(20);		 
                           //cmd(0x01);//
   }

}
