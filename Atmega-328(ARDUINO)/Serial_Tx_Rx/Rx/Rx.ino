char c;
void setup() {
  Serial.begin(9600);
  pinMode(13,OUTPUT);
 

}

void loop() 
{
 
  if(Serial.available()>0)
    {
        c=Serial.read();
         if(c=='1')
           {
            digitalWrite(13,HIGH);
           }
    }
}
