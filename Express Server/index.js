/*
**Start With Backend
1.Create a file/Folder
2.Create index.js page
3.init npm //Pakage
4.install express pakage// npm i express
5.Make server application
6.start server
*/

import express from "express";//Server Application//Install Express .5
const app=express();//Server Application .5
const port=3000;//Server Application  .5

/*
**Request vocab
1.get //get/send  request to server 
2.post //Receive request
3.get //Update Request
4.patch //Update Request
5.delete
*/

//Get request to server
app.get("/", (req,res)=>{
  res.send("Hello world")
})

app.listen(port, ()=> {//Server Application .5
    console.log(`server Runng on port ${port}.`);//Server Application .5
})