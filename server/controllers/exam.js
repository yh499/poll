var mongoose = require('mongoose');
var Survey = mongoose.model('Survey');

module.exports = {
    show: function(req, res) {
        Survey.find({}, function(err,notes){
         //res.render('index', {note: result});
         res.json(notes);
         console.log(notes);
        });
    },

    create: function (req, res) {
        console.log('create function on (controllers):');
        var q = new Survey({
            name: req.body.name,
            question: req.body.question,  
            option1: req.body.option1,
            option2: req.body.option2,
            option3: req.body.option3,
            option4: req.body.option4
        });
        q.save(function(err){
            if (err) {
                console.log("something went wrong--from exam.js");
            } else {
                console.log("exam.js:(controller): Added a note");
                res.redirect('/');
            }
        })
    }, 
    
    delete: function(req, res) {
        Survey.remove({_id: req.body.id}, function(err){
            if(err){
                console.log(err);
            }
        });
    },

    addVote: function(req, res) {
        Note.find({}, function(err,notes){
         //res.render('index', {note: result});
         res.json(notes);
         console.log(notes);
        });
    },

    detail: function(req, res) {
      Survey.findOne({_id : req.params.id},function(err,q){
        res.json(q);
      })
    }

}