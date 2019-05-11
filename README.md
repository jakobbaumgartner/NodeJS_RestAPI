# REST API

### REpresentational State Transfer

* Mobile Apps
* Single Page Web Apps
* Service APIs (e.g. Google Maps API)
* ...

Frontend is decoupled from Backend. We just send the content. 

We only exchange data not UI.

## Data Formats

* HTML
* Plain Text (Unnecessarily difficult to parse.)
* XML (Kind of like HTML, but we make the tags.)
* JSON (JavaScript Object Notation) (Machine-Readable, easily convertable to JavaScript)

## Routing 

We send request using fetch or AJAX. 

We send normal GET or POST and a http path. We just don't expect html response. 

API Endpoints is a combination of METHOD and PATH. 

## HTTP Methods
* GET
* POST
* PUT (Create resource on server.)
* PATCH (Update data on server.)
* DELETE (Delete data on server.)
* OPTIONS (Automatically sent by browser. Browser sends it in advance or some other client, to check if the used method in the next request send will be allowed.)

Defined only for conventions. It is a good practice. 

## REST Principles

* Uniform Interface (Well document API, clearly defined res/req data.)
* Stateless Interactions (Every request handled seperately.)
* Cacheable
* Client-Server seperation
* Layered System (Server may forward request to other API.)
* Code on Demand

## Body-Parser

> app.use(bodyParser.json()); // application/json

## Postman API tool

Is a API development tool, that helps with sending and seeing responses. 

## CORS
### Cross - Origin Resource Sharing

If client and server run on different domains we have problems. CORS Errors. It doesn't make sense for REST API. So we have to override it. 

To override it we set some headers:

> app.use((req, res, next) => {
>    res.setHeader('Access-Control-Allow-Origin', '*');

 // ' * ' means access from any client

>    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');

 // we tell client which methods are allowed
 
>    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

 // what headers clients need to send

>    next();
> });


axios is a promise based HTTP client for browser and node.js





