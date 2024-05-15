//import json server library
const jsonServer = require('json-server') 

//create server using create function
const mediaServer =jsonServer.create()

//create path for database.json file
const router =jsonServer.router('database.json')

//create middleware to convert json into js
const middleware = jsonServer.defaults()
//connect
mediaServer.use(middleware)
mediaServer.use(router)

//set up port for the server
const port=  4007|| process.env.PORT

//run the server
mediaServer.listen(port,()=>{
    console.log(`dental server running successfully in ${port}`);
})