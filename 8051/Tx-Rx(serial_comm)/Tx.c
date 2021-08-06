#include<reg51.h>
void string(char *p)
 {
   while(*p!='\0')
     {
	    //dat(*p);
		SBUF = *p;
		while(TI==0);
		TI=0;
		p++;
	//	delay(9000);
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

