			  				 
#include<reg51.h>
sbit rs = P2^0;
sbit rw = P2^1;
sbit  e = P2^2;
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
	  delay(40000);
	  dat(w+48);
	}
}

void main()
{
  int i,j,k;
  lcd();
  cmd(0x80);
  string("  H : M : S ");
  for(i=0;i<12;i++)
   {
     cmd(0xc2);
	 if(i<10)
	  {
	     dat('0');
	  }


	  num(i);
	  for(j=0;j<59;j++)
	     {
		   cmd(0xc6);
		   if(j<10)
		    {
			   dat('0');
			}
		num(j);

		     for(k=0;k<59;k++)
			  {
			    cmd(0xc9);
				if(k<10)
				 {
				   dat('0');
				}
			    num(k);
			   }
			}
		}
	}
