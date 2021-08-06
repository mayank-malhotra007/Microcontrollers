#include <LiquidCrystal.h>
LiquidCrystal lcd(9,10,5,6,7,8); //RS,EN,4DATA PINS
void setup() 
{
  Serial.begin(9600);
  lcd.begin(16,2);
  lcd.print("Hello");
  pinMode(13,OUTPUT);

}
char A[3]="ON";
char C[3];
int i=0;
void loop() 
{
  lcd.setCursor(0,1);
  if(Serial.available()>0)
   {
    C[i]=Serial.read();
    i++;
   }

   if(strcmp(A,C)==0)
    {
      lcd.print("LIGHT ON");
      digitalWrite(13,HIGH);
    }

}

