//var MongoClient = require('mongodb').MongoClient;
var {MongoClient,ObjectId}=require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('unable to connect to mongo db server')
	}

	console.log('Connected to mongo db server')

	// delete many	
	/*db.collection('Todo').deleteMany({text:'watch my fd'}).then((result)=>{
		console.log(result);		
	});*/


	//delete one
	/*db.collection('Todo').deleteOne({text:'watch my fd'}).then((result)=>{
		console.log(result);		
	});*/

	//find one and delete
	/*db.collection('Todo').findOneAndDelete({completed:true}).then((result)=>{
		console.log(result);		
	});*/

	db.collection('Todo').findOneAndDelete({completed:true}).then((result)=>{
		console.log(JSON.stringify(result,undefined,2));		
	});

	db.close();
}); 
 