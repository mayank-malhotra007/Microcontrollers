void setup() 
{
 Serial.begin(9600);
 char arr[3]="ON";
 int i;
 for(i=0;i<=2;i++)
   {
     Serial.write(arr[i]);  //writes one character at a time
   }
 

}

void loop() 
{

}
