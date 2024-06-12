const mongoose = require("mongoose");
const express = require("express");
const{ Timestamp } = require("mongodb");

const Schema = mongoose.Schema
const projectschema = new Schema({
    name:{
        type :String,
        //require:true,
    },
    Description:{
        type: String,
    },
    owner:{
        type:String,
    },
    members:{
        type:Number,
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
module.exports = mongoose.model('project',projectschema)