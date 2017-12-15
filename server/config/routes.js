var mongoose = require('mongoose');
var Note = mongoose.model('Survey');
var path = require('path');

//connect to controllers 
var notes = require('./../controllers/exam.js');

//var noteDash = require('../controllers/note.js');

module.exports = function(app){

    
//main dashboard 
    app.get('/dashboard', function (req, res){
        console.log("(route.js)-- exam.show");
        notes.show(req,res);
    });
//creating q
    app.post('/create', function (req, res){
        notes.create(req,res);
    });
//deleting q 
    app.post('/delete', function (req, res){
        notes.delete(req,res);
    });
//voting page 
    app.get('/poll/vote/:id', function (req, res){
        console.log("(route.js)-- exam.show");
        notes.addVote(req,res);
    }); 
//each single poll page 
    app.get('/poll/:id', function (req, res){
        console.log("(route.js)-- exam.show");
        notes.detail(req,res);
    }); 


    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });

};