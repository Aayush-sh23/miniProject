const mongoose = require('mongoose');

const calculatorSchema = new mongoose.Schema({ 
    number1:{
        type : Number,
        required : true
    },
    number2:{
        type : Number,
        required : true
    } 
    ,
    operation:{
        type:String,
        required : true
    }
}    
);
mongoose.exports=mongoose.model("calculatorSchema" ,calculatorSchema );