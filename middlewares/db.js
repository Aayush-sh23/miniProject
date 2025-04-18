const mongoose=require('mongoose')

const connectionDB =mongoose.connect("mongodb+srv://BhanuJi:9729248257p@bhanu21.rioz4ut.mongodb.net/mini?retryWrites=true&w=majority&appName=bhanu21").
then(()=>console.log("Connected Successful"));

mongoose.export=connectionDB;

