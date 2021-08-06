#include <LiquidCrystal.h>
LiquidCrystal lcd(12,13,8,9,10,11); //RS,EN,4DATA PINS
int PIN = 2;
int i=0;
void setup() 
{ 
 
  pinMode(PIN,INPUT);
  lcd.begin(16,2);
  lcd.print("Button Pressed :-");
 
    
  
}

void loop()
{
       lcd.setCursor(0,1);

       while(digitalRead(PIN))
        {
          i++;
         while(digitalRead(PIN));
        }
      if(i==1)
        {
          lcd.print('1');
        }
      if(i==2)
       {
        
        lcd.print('2');
       }
       if(i==3)
       {
        
        lcd.print('3');
       }

        if(i==4)
       {
        
        lcd.print('4');
       }

        if(i==5)
       {
        
        lcd.print('5');
       }
       

 
}
