import express from "express";//Server Application//Install Express .5
const app=express();//Server Application .5
const port=5000;//Server Application  .5

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
  res.send(`<a href="/about">About</a><h1> I am main Page</h1>`)
  //console.log(req.rawHeaders)
})
//End-point start one by one by get request 
app.get("/about", (req,res)=>{
  res.send(`<a href="/contact">Contact</a><h1> I am About Page</h1>`)
  //console.log(req.rawHeaders)
})
app.get("/contact", (req,res)=>{
  res.send(`<a href="/">Home</a><h1> I am Contact Page</h1><p>+971507078334</p>`)
  //console.log(req.rawHeaders)
})


app.listen(port, ()=> {//Server Application .5
    console.log(`server Runng on port ${port}.`);//Server Application .5
})