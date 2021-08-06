#include<reg51.h>

sbit red    =  P0^0;
sbit yellow =  P0^1;
sbit green  =  P0^2;
sbit one    =  P0^3;
sbit two    =  P0^4;

sbit rs = P2^0;
sbit rw = P2^1;
sbit e =  P2^2;


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
  cmd(0x0e);
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
void main()
{
int i;
int arr[10]={0x3f,0x06,0x5b,0x4f,0x66,0x6d,0x7d,0x07,0x7f,0x67};
lcd();
P1=0x00; P2=0x00; P3=0x00;
string("STOP");
for(i=99;i>=30;i--)
{
  red=1;yellow=0;green=0;
 
  one =1; two=0;
  P1=arr[i%10];
  delay(10000);
  two=1;  one=0;
  P1=arr[i/10];
  delay(10000);
}
cmd(0x01);
cmd(0x80);
string("  READY");
for(i=29;i>=10;i--)
{
  red=0; yellow=1; green=0;
 
  one =1; two=0;
  P1=arr[i%10];
  delay(10000);
  two=1;  one=0;
  P1=arr[i/10];
  delay(10000);
  
}
cmd(0x01);
cmd(0x80);
string("  GO");
for(i=99;i>=0;i--)
{
  red=0; yellow=0; green=1;
 
  one =1; two=0;
  P1=arr[i%10];
  delay(10000);
  two=1;  one=0;
  P1=arr[i/10];
  delay(10000);
}
}