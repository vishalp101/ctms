const mongoose = require("mongoose");
const express = require("express");

const Schema = mongoose.Schema
const userschema = new Schema({
    username:{
        type :String,
        require:true,
    },
    useremail:{
        type: String,
    },
    password:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    updatedAt:{
        type:Date,
        default:Date.now,
    }
})
module.exports = mongoose.model('users',userschema)