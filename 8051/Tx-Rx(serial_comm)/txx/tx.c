#include<reg51.h>
void delay(int t)
{
  while(t--);
}
void string(char *p)
 {
   while(*p!='\0')
     {
	    //dat(*p);
		SBUF = *p;
		while(TI==0);
		TI=0;
			delay(9000);
		p++;

	 }
 }

void main()
{

 TMOD=0x20;
 TR1=1;
 TH1=0xfd;
 SCON=0x40;

   while(1)
      {
	    string("Hi");
	  }
}

