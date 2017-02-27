# Lab1-Cal
Calculator to demonstrate stateless web services 

###The server includes the following functionalities: 
1. Addition 
2. Subtraction 
3. Multiplication 
4. Division 

####System Design: 
Simple design comprising of a client which is a single page application, where the most of the input processing take place and where each calculator input is made of 'onclick' events on each number button or operators.
The parameters are distinguished at client end itself and relayed to server for the arithmetic processing.

* *Example: * A user clicks a number and then clicks on an operator, the second number input is taken as the second parameter and on subsequent press of operator the parameters are sent to server making http POST calls for processing that on success sends back the result for the calculator to display.

