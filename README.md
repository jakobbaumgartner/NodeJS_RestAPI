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
* OPTIONS (Automatically sent by browser.)

Defined only for conventions. It is a good practice. 

## REST Principles

* Uniform Interface (Well document API, clearly defined res/req data.)
* Stateless Interactions (Every request handled seperately.)
* Cacheable
* Client-Server seperation
* Layered System (Server may forward request to other API.)
* Code on Demand









