																		 #include<reg51.h>
#include<string.h>
 sbit rs = P3^0;
 sbit rw = P3^1;
 sbit e =  P3^2;
 sbit led=P3^7;
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
 cmd(0x01);
 delay(50);
 cmd(0x38);
 delay(50);
 cmd(0x0e);
 delay(50);
 cmd(0x80);
 delay(50);
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
 
 int a,b,c;
 int i,j;
// char arr[]="1234";
 int ent[4]; int pas[4];
 P3=0x00;

 z:lcd();
 
 string("enter username");
// string("enter pass");
 delay(9000);
 cmd(0x01);
 cmd(0x80);
 while(1)
   {

	 for(j=0;j<4;j++)
	 {
       P1=0x0f;            //4 rows and columns ,firts 4 on then next 4 on!.
       while(P1==0x0f);
	 
	     a=P1;
		 P1=0xf0;
		  while(P1==0xf0);
		  
		     b=P1;
			 while(P1!=0xf0);
			 c=a|b;
			 
			 
		   ent[j]=c;



			if(c==0xe7)
			   {
			     cmd(0x80);
			     num(0);
				}
		   	 if(c==0xeb)
			    {
				  cmd(0x80);
				  dat('1');
				 }
			if(c==0xed)
			   {
			    cmd(0x80);
				dat('2');
			   }
			   
			 if(c==0xee)
			   {
			     cmd(0x80);
				 dat('3');
				}
				
			if(c==0xd7)
			  {
			    cmd(0x80);
				dat('4');
			  }	
			if(c==0xdb)
			  {
			    cmd(0x80);
				dat('5');
			  }
			 if(c==0xdd)
			 {
	    	   cmd(0x80);
			   dat('6');
			  }
			 if(c==0xde)
			   {
			      cmd(0x80);
				  dat('7');
				}
				
		      if(c==0xb7)
			   {
			      cmd(0x80);
				  dat('8');
				}
			  if(c==0xbb)
			    {
				  cmd(0x80);
				  num(9);
				 }
			  if(c==0xbd)
			    {
				  cmd(0x80);
				  num(10);
				 }
			  if(c==0xbe)
			    {
				  cmd(0x80);
				  num(11);
				 }  
			  if(c==0x77)
			    {
				   cmd(0x80);
				  // num(12);
				   string("n");
				 }
			 if(c==0x7b)
			  {
			    cmd(0x80);
				//num(13);
				string("a");
			   }
			   
			 if(c==0x7d)
			 {
			   cmd(0x80);
			   //num(14);
			   string("m");
			  }
			  
			  if(c==0x7e)
			  {
			    cmd(0x80);
				//num(15);
				string("e");
			  } 
		   	
	  	  
		}

	    delay(9000);
		cmd(0x01);

		if(ent[0]==0x77 && ent[1]==0x7b && ent[2]==0x7d && ent[3]==0x7e)
			  {
			     
			     
			     string(" enter pass ");
				 delay(9000);
				 cmd(0x01);
				 cmd(0x80);
				 for(i=0;i<4;i++)
				   {
				     P1=0x0f;
                        while(P1==0x0f);
	 
	                             a=P1;
		                         P1=0xf0;
		                           while(P1==0xf0);
		  
		                              b=P1;
			                            while(P1!=0xf0);
			                                  c=a|b;
			 
			 
		                                  pas[i]=c;

			//delay(9000);
			//cmd(0x01);
			//cmd(0x80);		  	 
			if(c==0xe7)
			   {
			     cmd(0x80);
			     num(0);
				}
		   	 if(c==0xeb)
			    {
				  cmd(0x80);
				  dat('1');
				 }
			if(c==0xed)
			   {
			    cmd(0x80);
				dat('2');
			   }
			   
			 if(c==0xee)
			   {
			     cmd(0x80);
				 dat('3');
				}
				
			if(c==0xd7)
			  {
			    cmd(0x80);
				dat('4');
			  }	
			if(c==0xdb)
			  {
			    cmd(0x80);
				dat('5');
			  }
			 if(c==0xdd)
			 {
	    	   cmd(0x80);
			   dat('6');
			  }
			 if(c==0xde)
			   {
			      cmd(0x80);
				  dat('7');
				}
				
		      if(c==0xb7)
			   {
			      cmd(0x80);
				  dat('8');
				}
			  if(c==0xbb)
			    {
				  cmd(0x80);
				  num(9);
				 }
			  if(c==0xbd)
			    {
				  cmd(0x80);
				  num(10);
				 }
			  if(c==0xbe)
			    {
				  cmd(0x80);
				  num(11);
				 }  
			  if(c==0x77)
			    {
				   cmd(0x80);
				  // num(12);
				   string("n");
				 }
			 if(c==0x7b)
			  {
			    cmd(0x80);
				//num(13);
				string("a");
			   }
			   
			 if(c==0x7d)
			 {
			   cmd(0x80);
			   //num(14);
			   string("m");
			  }
			  
			  if(c==0x7e)
			  {
			    cmd(0x80);
				//num(15);
				string("e");
			  } 
		   	

					 

	  }
	 

	  delay(9000);
	  cmd(0x01); 
	  cmd(0x80);
	  if(pas[0]==0xe7 && pas[1]==0xeb && pas[2]==0xed && pas[3]==0xee)
					     {
						   string("    OK     ");
						   delay(9000);    
						   cmd(0x01);  cmd(0x80);
						   string("  unlocked  ");
						   led=1;
						}

	   else
	         {
			    string("  wrong passcode ");
				delay(9000);
				cmd(0x80);
				string("   try again      ");
				goto z;
			 }


                         
                           		  
			}
   else
       {
	       delay(9000);
		   cmd(0x01);
		   delay(9000);  
		   cmd(0x80);
		   string("  try again  ");
		   goto z;
		}
			
		}

}	