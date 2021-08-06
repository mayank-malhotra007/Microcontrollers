#include<avr/io.h>
#include<util/delay.h>

void cmd(unsigned char c)
{
	PORTD=c;
	PORTC=0x04;
	_delay_ms(5);
	PORTC=0x00;
}

void dat( unsigned char c )
{
	PORTD=c;
	PORTC=0x05;
	_delay_ms(5);
	PORTC=0x01;
}

void lcd()
{
	cmd(0x38);
	_delay_ms(100);
	cmd(0x01);
	_delay_ms(100);
	cmd(0x0e);
	_delay_ms(100);
	cmd(0x80);
	_delay_ms(100);
	
}

void string(char *p)
 {
   while(*p!='\0')
     {
	    dat(*p);
		p++;
		_delay_ms(10);
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
	  _delay_ms(100);
	  dat(w+48);
	}
}



int main()

{
  //lsb is column
  //msb is row

 int a,b,c,j,k,l;
 int ent[4], pas[4];
 //DDRB=0x00;
 DDRC=0xff;
 DDRD=0xff;
 //lcd();
 z:lcd();
 
 string("enter username");
 _delay_ms(2000);
 cmd(0x01);
 cmd(0x80);
 while(1)
  {
      cmd(0x80);
	  _delay_ms(200);
      for(j=0;j<4;j++)       
     {
      //to check column
       DDRB=0XF0;    //msb output,lsb is input
       PORTB=0x0F;   // to check for column.         
	   while(PINB==0x0F); //poll
	  	  a=PINB;
     // to check for row.
	   DDRB=0X0F;   //lsb output,msb input
	   PORTB=0xF0;  // to check for row.
       while(PINB==0xF0); //poll 
		b=PINB;


       while(PINB!=0xF0);       //to hold the value


			// while(PORTB!=0xf0);
	   c=a|b;
			 
       ent[j]=c;
	   
       
	          
        
             if(c==0xe7)
			   {
			    // cmd(0x80);
			     dat('0');
				}
		   	 if(c==0xeb)
			    {
				 // cmd(0x80);
				  dat('1');
				 }
			if(c==0xed)
			   {
			    //cmd(0x80);
				dat('2');
			   }
			   
			 if(c==0xee)
			   {
			     //cmd(0x80);
				 dat('3');
				}
				
			if(c==0xd7)
			  {
			    //cmd(0x80);
				dat('4');
			  }	
			if(c==0xdb)
			  {
			    //cmd(0x80);
				dat('5');
			  }
			 if(c==0xdd)
			 {
	    	   //cmd(0x80);
			   dat('6');
			  }
			 if(c==0xde)
			   {
			    //  cmd(0x80);
				  dat('7');
				}
				
		      if(c==0xb7)
			   {
			      //cmd(0x80);
				  dat('8');
				}
			  if(c==0xbb)
			    {
				 // cmd(0x80);
				  num(9);
				 }
			  if(c==0xbd)
			    {
				  //cmd(0x80);
				  num(10);
				 }
			  if(c==0xbe)
			    {
				  //cmd(0x80);
				  num(11);
				 }  
			  if(c==0x77)
			    {
				   //cmd(0x80);
				  // num(12);
				   string("n");
				 }
			 if(c==0x7b)
			  {
			   // cmd(0x80);
				//num(13);
				string("a");
			   }
			   
			 if(c==0x7d)
			 {
			   //cmd(0x80);
			   //num(14);
			   string("m");
			  }
			  
			  if(c==0x7e)
			  {
			   // cmd(0x80);
				//num(15);
				string("e");
			  } 

       }
      
      
     _delay_ms(600);
 	   
    if( (ent[0]==0x77) && (ent[1]==0x7b) && (ent[2]==0x7d) && (ent[3]==0x7e))
      {
        cmd(0x01);
        cmd(0x80);
        string("ok");
        _delay_ms(2000);
      }

   else
    {
    cmd(0x01);
    cmd(0x80);
    string("wrong username");
	_delay_ms(700);
	cmd(0x01); cmd(0x80);
	string("Try Again :) ");
	_delay_ms(600); 
	goto z;
     }

    cmd(0x01);
	cmd(0x80);
	string("enter pass");    
    _delay_ms(800);
    cmd(0x01);
	cmd(0x80);

    for(k=0;k<4;k++)       
     {
      //to check column
       DDRB=0XF0;    //msb output,lsb is input
       PORTB=0x0F;   // to check for column.         
	   while(PINB==0x0F); //poll
	  	  a=PINB;
     // to check for row.
	   DDRB=0X0F;   //lsb output,msb input
	   PORTB=0xF0;  // to check for row.
       while(PINB==0xF0); //poll 
		b=PINB;


       while(PINB!=0xF0);       //to hold the value


	   while(PORTB!=0xf0);
	   l=a|b;
			 
       pas[k]=l;
	   
       
	          
        
             if(l==0xe7)
			   {
			    // cmd(0x80);
			     dat('0');
				}
		   	 if(l==0xeb)
			    {
				 // cmd(0x80);
				  dat('1');
				 }
			if(l==0xed)
			   {
			    //cmd(0x80);
				dat('2');
			   }
			   
			 if(l==0xee)
			   {
			     //cmd(0x80);
				 dat('3');
				}
				
			if(l==0xd7)
			  {
			    //cmd(0x80);
				dat('4');
			  }	
			if(l==0xdb)
			  {
			    //cmd(0x80);
				dat('5');
			  }
			 if(l==0xdd)
			 {
	    	   //cmd(0x80);
			   dat('6');
			  }
			 if(l==0xde)
			   {
			    //  cmd(0x80);
				  dat('7');
				}
				
		      if(l==0xb7)
			   {
			      //cmd(0x80);
				  dat('8');
				}
			  if(l==0xbb)
			    {
				 // cmd(0x80);
				  num(9);
				 }
			  if(l==0xbd)
			    {
				  //cmd(0x80);
				  num(10);
				 }
			  if(l==0xbe)
			    {
				  //cmd(0x80);
				  num(11);
				 }  
			  if(l==0x77)
			    {
				   //cmd(0x80);
				  // num(12);
				   string("n");
				 }
			 if(c==0x7b)
			  {
			   // cmd(0x80);
				//num(13);
				string("a");
			   }
			   
			 if(l==0x7d)
			 {
			   //cmd(0x80);
			   //num(14);
			   string("m");
			  }
			  
			  if(l==0x7e)
			  {
			   // cmd(0x80);
				//num(15);
				string("e");
			  } 

       }
      
   _delay_ms(300);
   if(  (pas[0]==0xe7) && (pas[1]==0xeb) && (pas[2]==0xed) && (pas[3]==0xee)  )
   {
     cmd(0x01);
	 cmd(0x80);
	 string("password Ok");
	 cmd(0xc0);
	 _delay_ms(500);
	 string("UNLOCKED!!");
    

  }

     else
  {
    cmd(0x01);
    cmd(0x80);
    string("wrong username");
	_delay_ms(700);
	cmd(0x01); cmd(0x80);
	string("Try Again :) ");
	_delay_ms(600); 
	goto z;
   }

 
 
 
 }
 
}      
	   	
	  	
	    
	
                         
                           		  
			

  




	  
		

