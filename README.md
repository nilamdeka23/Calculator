# Calculator
Calculator to demonstrate stateless web services.

### The server includes the following functionalities: 
1. Addition 
2. Subtraction 
3. Multiplication 
4. Division 

### System Design: 
Simple design, comprising of a client which is a single page application and where the most of the input processing take place .Each calculator input is made of 'onclick' events for each number button or operators.

The parameters are distinguished at client itself and sent to server for arithmetic processing.

* **Example:** A user clicks a number and then clicks on an operator, the second number input is taken as the second parameter and on subsequent press of an operator the parameters are sent to server making HTTP POST request for processing, which on success sends back the result for the calculator to display.

### Sample App
![Alt Text](https://github.com/nilamdeka23/Lab1-Cal/blob/master/cal.gif)
