const mongoose=require('mongoose');

 const  account = new mongoose.Schema({
    email:String,
    username:String,
    password:String

})
 
const Account=mongoose.model('account',account);

const task= new mongoose.Schema({
     task:String,
     accountId:String
})
const Task=mongoose.model('task',task);

module.exports={Account:Account,Task:Task}


