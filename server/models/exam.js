var mongoose = require('mongoose');

var SurveySchema = new mongoose.Schema({
    name : {type: String, required: true, minlength: 2}, 
    question : {type: String, required: true, minlength: 8}, 
    option1 : {type: String, required: true, minlength: 3}, 
    option2 : {type: String, required: true, minlength: 3},
    option3 : {type: String, required: true, minlength: 3},  
    option4 : {type: String, required: true, minlength: 3}
},{
    timestamps : true
});

mongoose.model('Survey', SurveySchema);


