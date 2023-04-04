# Request Header Parser Microservice

This is the code for the Request Header Parser Microservice project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/request-header-parser-microservice

## Code Explanation
The code includes one API route:
* `/api/whoami`
    * Returns a JSON object that includes the ip address, preferred language, and software parsed from the request header
    ```
    {
        ip address: <ip address>,
        language: <preferred language string>,
        software: <software string>
    }
    ```