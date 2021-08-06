#include<lpc21xx.h>
#include"lcd.h"

 int main()                      
  {
   unsigned char I,J,c;
		
		    PINSEL0=0X00000000;
		
        IODIR0 = 0X000000ff;          // set 8 lsb bits as output
		    IOCLR0 = 0XFFFFFFFF;         //clear port0
          init();                       // call lcd
          while(1)			  
             {
	             	IOCLR0 = 0XFFFFFFFF;
	             	IOSET0 = 0X0000000F;
	            	while((IOPIN0&0X0000000F)==0X0000000F);
	             	I=IOPIN0;                                   //column
	            	IOCLR0 = 0XFFFFFFFF;
	            	IOSET0 = 0X000000F0;
							 	while((IOPIN0&0X0000000F)==0X000000f0);
					      J=IOPIN0;                                  //row
							 
	             while((IOPIN0&0X000000F0)!=0X000000F0);     // to hold value
							 c=I|J;                                      //combine row & column values
							 
							 if(c==0xe7)
								 data('A');
				  		

	}				  
  }
