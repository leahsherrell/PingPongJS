# _Ping Pong!_

#### _Intro Solo Project 3 @Epicodus, 05.03.2017_

#### By _** Leah Sherrell**_

## Description

Displays positive whole numbers up through user-inputted number with three exceptions:  
- when number divisible by 3 & not 5, displays "Ping"
- when number divisible by 5 & not 3, displays "Pong"
- when number divisible by both 3 & 5, displays "Ping Pong"

## Setup/Installation Requirements

* _Clone this repository_
* _Open in a simple HTTP server, "index.html"_

## Technologies Used

_JavaScript_
_jQuery_

## Specifications for BDD
| Behavior: this program should| Inputs Example: when it receives | Output: it should return|
|------------------|:-------------:|------:|
|return 1 if given 1|1|1|
|not process non-numerical characters|"a"|"Please enter a whole number"|
|not process negative numbers or 0|-1|"Please enter a positive whole number"|
|return a list of every whole number up through the given number|2|1, 2|
|return "Ping" in said list if divisible by 3 and not 5 |3|"Ping"|
|return "Pong" in said list if divisible by 5 and not 3|5|"Pong"|
|return "Ping Pong" in said list if divisible by both 3 and 5|15|"Ping Pong"|



### License

*This software is licensed under the MIT license*

Copyright (c) 2017 **_Leah Sherrell_**
