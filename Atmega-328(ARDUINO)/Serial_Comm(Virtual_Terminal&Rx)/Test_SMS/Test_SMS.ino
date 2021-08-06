//#include <GSM.h>
// initialize the library instances
//GSM gsmAccess;
//GSM_SMS sms;

void setup() 
{
Serial.begin(9600);  
//Serial.println("waiting for messages");
pinMode(13,OUTPUT);
pinMode(8,OUTPUT);
}
char A[3]="ON";
 char C[3];
 int i=0;

void loop() 
{
 
 digitalWrite(8,HIGH);
 if(Serial.available()>0)
  {
    C[i]=Serial.read();
    i++;
  }
 if(strcmp(A,C)==0)
  {
    digitalWrite(13,HIGH);
  }

 delay(500);

}
