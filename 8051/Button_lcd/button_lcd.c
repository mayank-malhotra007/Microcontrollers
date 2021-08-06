
#include<reg51.h>
sbit sw =P1^0;
sbit rs =P2^0;
sbit rw = P2^1;
sbit e = P2^2;

void delay(int t)
{
  while(t--);
}



void cmd(char c)
{
  P3=c;
  rs=0;
  rw=0;
  e=1;
  delay(50);
  e=0;
}


void dat(char c)
{

  P3=c;
  rs=1;
  rw=0;
  e=1;
  delay(50);
  e=0;
}
void lcd()
{
  cmd(0x01);
  delay(200);
  cmd(0x38);
  delay(200);
  cmd(0x0c);
  delay(200);
  cmd(0x80);
  delay(200);
}

 void string(char *p)
 {
   while(*p!='\0')
     {
	    dat(*p);
		p++;
		delay(9000);
	}
}

void main()
{

  int i;
  lcd();
  P1=0x00;
  while(1)
   {
     while(sw==1)
	   {
	     i++;
		 while(sw==1);
		}
     if(i>3)
	   i=0;

	 if(i==1)
 	   {
	     cmd(0x80);
	     string("mayank");
		}

	 if(i==2)
	    {
		   cmd(0x80);
		   string("Gulani  ");
		}
	 if(i==3)
	    {
		  cmd(0x80);
		  string("Rohan  ");
		}

	}
}
