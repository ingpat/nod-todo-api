  var {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
  const {Todo} = require('./../server/models/Todo');

  var id='5873b34cbe4c6a0e388ba782';
	if(!ObjectId.isValid(id)){
   		return console.log('id not valid');
   	}

 /* Todo.find({
  	_id:id
  }).then((todos)=>{
  	console.log('Todos',todos);
  });

   Todo.findOne({
  	_id:id
  }).then((todo)=>{
  	console.log('Todo',todo);
  });*/

   Todo.findById(id).then((todo)=>{
   	if(!todo){
   		return console.log('id not found');
   	}
  	console.log('Todo by id',todo);
  }).catch((e)=>console.log(e));