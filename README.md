# departmental-store-backend

Description

An departmental store backend built with NodeJs. This departmental store enable three main different flows or implementations:

    Buyers browse the store categories, products
    Sellers manage their own product component
    Admins manage and control the entire store components

    features:
        Node provides the backend environment for this application
        Express middleware is used to handle requests, routes
        Mongoose schemas to model the application data
        
 Install
 
``` 
git clone https://github.com/jayantc20/departmental-store-backend.git
cd project
npm install

```

Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = uri
JWT_SECRET = 'qwerty'
```

Run

```
npm run server
```
Seed Admin

```
npm run data:import
npm run data:destroy
```
