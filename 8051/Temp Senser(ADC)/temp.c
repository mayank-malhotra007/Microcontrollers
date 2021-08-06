#include<reg51.h>

sbit cs=P3^0;
sbit rd=P3^1;
sbit wr=P3^2;
sbit intr=P3^3;

sbit rs =P3^4;
sbit rw = P3^5;
sbit e = P3^6;

void delay(int t)
{
	 while(t--);
}

void cmd(unsigned char c)
{
	P1=c;
	rs=0;
	rw=0;
	e=1;
	delay(50);
	e=0;
}
	
void lcd()
{
	cmd(0x38);
	delay(200);
	cmd(0x0e);
	delay(200);
	cmd(0x01);
	delay(200);
	cmd(0x80);
	delay(200);
}
void dat(unsigned char c)
{
	
	P1=c;
	rs=1;
	rw=0;
	e=1;
	delay(50);
	e=0;
}

void num(unsigned int p)
{
	unsigned int k,w,b=1;
	k=p;
	while(k>=10)
	{
		b=b*10;
		k=k/10;
	}
	while(b>=1)
	{
		w=p/b;
		p=p%b;
		b=b/10;
		dat(w+48);
	}
}

int adc()

{
	
	cs=0;
	wr=0;
	delay(1);
	wr=1;
	rd=1;
	
	while(intr==1);
	
	rd=0;
	
	return P2;
}


void main()
{
	int x;
	lcd();
	while(1)
	{
		cmd(0x80);
		x=adc();
		num(x);
	}
}