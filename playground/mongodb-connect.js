var MongoClient = require('mongodb').MongoClient;
var {MongoClient,ObjectId}=require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('unable to connect to mongo db server')
	}

	console.log('Connected to mongo db server')

	db.collection('Todo').insertOne({
		text:'watch my fd',
		completed:false
	},(error,result)=>{
		if(error){
			return console.log('unable to save to Todo',error)
		}
		console.log(JSON.stringify(result.ops,undefined,2));
	});
 
	db.close();
});
 