//this blog model is to create the schema for the blog

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//schema defines the structure of our document 

const blogSchema = new Schema({
    title:{
        type:String,
        required: trusted
    },
    snipper:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }

},{timestamps:true})

//a model surrounds our schema and provides us with an interface to communicate with a database collection for that document type.

const Blog = mongoose.model(' ')