Both port 1 and port 0 are of 32 bits each.
PORT0=0xFFFFFFFF;(all  high)
PORT1=0xFFFF0000;(MSB high-16 bits,lsb low 16 bits)

Operates on 3.3V instead of 5V.

PINSEL tells us the different ways a pin can be used

eg: //high for output,low for input

pin 12 as output:-
IODIR0=0x00000800;
or 
IODIR0|=(1<<12);



port0 -pin10 as input:-
IODIR0&=~(1<<10);
or
IODIR0=0xFFFFF7FF;


IOPIN0|=(1<<20);  // to set a PIN
IOPIN0=(~(1<<17); // to clear PIN

IOSET0|=(1<<18);  // set PIN
IOCLR0|=(1<<18); // clear PIN


// BAUD RATE//
U0DLL=CLK/16*(bps)
      10Mhz/16*9600=65
      65 hex=41//0x41
U0DLM=0x00