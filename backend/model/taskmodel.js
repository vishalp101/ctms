const mongoose = require("mongoose");
const express = require("express");
const{ Timestamp } = require("mongodb");

const Schema = mongoose.Schema
const taskschema = new Schema({
    Taskname:{
        type :String,
        //require:true,
    },
    TaskDescription:{
        type: String,
    },
    assigneedTomember:{
        type:String,
    },
    taskduedate:{
        type: Date,
        require:true,
    },
    status:{
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
module.exports = mongoose.model('task',taskschema)