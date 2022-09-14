const { string } = require('joi');
const mongooose = require('mongoose');

const blogSchema = new mongooose.Schema({
    // Your code goes here
    ObjectID : {type : Number },
    topic : { type: String, default: 'hahaha' },
    description :{ type: String, default: 'This is something you should write' },
    posted_at : { type: String  },
    posted_by : {type: String }
})

const Blog = mongooose.model('blogs', blogSchema); //this is my collection name // any my schema name

module.exports = Blog;
