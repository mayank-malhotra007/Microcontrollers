#include<reg51.h>
void delay(int t)
{
  while(t--);
}
void main()
{
 int i,j;
 P2=0x00;
 while(1)
   {
     for(i=0;i<50;i++)
	 { 
      P2=0x08>>j;
	  delay(50000);
	  j++;

	  if(j==4)
	   {
	     j=0;
	   }
	 
	 }

	 for(i=0;i<50;i++)
	 { 
      P2=0x01<<j;
	  delay(50000);
	  j++;

	  if(j==4)
	   {
	     j=0;
	   }
		
}
}
}
