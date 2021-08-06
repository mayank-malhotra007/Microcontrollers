
#include<reg51.h>

void delay(int t)
{
  while(t--);
}

void main()

{
  int i,j,k;
  int arr[]={0x3f,0x06,0x5b,0x4f,0x66,0x6d,0x7d,0x07,0x7f,0x67};
  P0=0x00;
  P2=0x00;
  P3=0x00;

  for(i=9;i>=0;i--)
    {
      P1=arr[i];

	  for(j=9;j>=0;j--)
	    {
		  P2=arr[j];

		  for(k=9;k>=0;k--)
		    {
			  P3=arr[k];
			  delay(9000);
			}
		}
	}
}