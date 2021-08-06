
void setup() {
  Serial.begin(9600);
  pinMode(13,OUTPUT);
  pinMode(8,OUTPUT);

}
char A[3]="ON";
char arr[3];
int i=0;
void loop()
{
 
 digitalWrite(8,HIGH);
 if(Serial.available()>0) // runs till buffer is not empty
   {
     arr[i]=Serial.read();
     i++;
   }
 if(strcmp(A,arr)==0)
   {
    digitalWrite(13,HIGH);
   }
}

  
