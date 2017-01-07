var mongoose= require('mongoose');


//create a model
var Todo = mongoose.model('Todo',{
	text:{
		type:String,
		required:true,
		minlength:3,
		trim:true
	},
	completd:{
		type:Boolean,
		default:false
	},
	completdAt:{
		type:Number,
		default:null
	}
});

module.exports = {Todo};
