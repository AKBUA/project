const express = require('express')
const app = express()
const cors=require('cors');
const mongoose=require('mongoose')
var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
const port =process.env.PORT || 8000;
const {Account:AccountModel,Task:TaskModel, Task} =require('./model')
app.use(cors());
mongoose.connect('mongodb://localhost:27017/TODO', { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{console.log("Conncted to DB")})

app.post('/accounts',(req,res)=>{
    
   const {email,password,username}= req.body;
    AccountModel.find({email:email},(e,d)=>{
      
       if(d.length>0){
        res.status(500);
        res.send({error:'user exists'})
       }
    })
    const user= new AccountModel({email,password,username});
    user.save().then((response)=>{
        res.status(200);
       
       res.send(response);
    });

});
app.post('/accounts/login',(req,res)=>{
  const {email,password}= req.body;
  
  AccountModel.find({email,password},(e,d)=>{
    if(d.length==0){
      res.status(404);
      res.send('user does not exist')
    }else{
      res.status(200)
      res.send(d[0]);
    }
    
  })

})
app.get('/', (req, res) => {
  res.send('Welcome  to TODO!')
})
//psot taks
app.post('/tasks',(req,res)=>{
   const {task,accountId}=req.body;
   const   tsk=new TaskModel({task,accountId});
    tsk.save();
    res.send('successfully created task')
})
//get task by account 
app.post('/task',(req,res)=>{
  // console.log(req.body)
  const {accountId}= req.body;
   TaskModel.find({accountId},(e,d)=>
   {
  
      res.send(d);
    
  })

})
// edit Task
app.put('/task',(req,res)=>{
  const {accountId,taskId,updatedTask}= req.body;
    TaskModel.findByIdAndUpdate(taskId,{task:updatedTask},(e,d)=>{
      //console.log(d,"UPDATED")
    })
    res.send("updated sucessfully ")

})

app.delete('/task',(req,res)=>{
  const{taskId}=req.body;
  
  TaskModel.findByIdAndDelete(taskId).then(()=>{
    res.send("deleted successfully")
  })
})



app.listen(port, () => {
  console.log(`listening on port ${port}`)
})