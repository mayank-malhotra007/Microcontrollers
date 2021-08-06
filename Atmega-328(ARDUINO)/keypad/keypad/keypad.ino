#include <LiquidCrystal.h>

LiquidCrystal lcd(8,9,10,11,12,13);


int R1 = 4;
int R2 = 5;
int C1 = 3;
int C2 = 2;
int C3 = 1;
int C4 = 0;
int col1;
int col2;
int col3;
int col4;

void setup()
{
  pinMode(R1,OUTPUT);
  pinMode(R2,OUTPUT);
  pinMode(C1,INPUT);
  pinMode(C2,INPUT);
  pinMode(C3,INPUT);
  pinMode(C4,INPUT);
  digitalWrite(C1,HIGH);
  digitalWrite(C2,HIGH);
  digitalWrite(C3,HIGH);
  digitalWrite(C4,HIGH);
    
}

void loop()
{ 
  lcd.setCursor(0,0);
  
  digitalWrite(R1,LOW);     // TO CHECK FOR ROW 1
  digitalWrite(R2,HIGH);
//digitalWrite(R3,HIGH);
  //digitalWrite(R4,HIGH);
  col1=digitalRead(C1);
  col2=digitalRead(C2);
  col3=digitalRead(C3);
  col4=digitalRead(C4);

  if(col1==LOW)
  {
    lcd.print('1');
    delay(200);
  }
  if(col2==LOW)
   {
    lcd.print('2');
    delay(200);
   }
   if(col3==LOW)
   {
    lcd.print('3');
    delay(200);
   }
   if(col4==LOW)
   {
    lcd.print('4');
    delay(200);
   }
  
}

