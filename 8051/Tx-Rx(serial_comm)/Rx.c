   #include<reg51.h>
sbit rs=P1^0;
sbit rw=P1^1;
sbit e=P1^2;

void delay(int t)
{
 while(t--);
 }


 void cmd(char c)
 {
   P2=c;
   rs=0;
   rw=0;
   e=1;
   delay(50);
   e=0;
}

 void dat(char c)
 {
   P2=c;
   rs=1;
   rw=0;
   e=1;
   delay(50);
   e=0;
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


void main()
{

  TMOD=0x20;
  TR1=1;
  TH1=0xfd;
  while(1)
     {
	   while (RI==0);
	      {
		     dat(SBUF);

	     	}

      RI=0;
	}

 }