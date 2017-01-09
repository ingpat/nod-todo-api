//var MongoClient = require('mongodb').MongoClient;
var {MongoClient,ObjectId}=require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('unable to connect to mongo db server')
	}

	console.log('Connected to mongo db server')

	db.collection('Todo').find(
		//on peut ne pas avoit cet oobject
		//{completed:true}
		{_id:new ObjectId('5873b34cbe4c6a0e388ba782')}
		).toArray().then((docs)=>{
		console.log('todos');
		console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
		console.log('unable to fetch todos',err);
	});
 
 db.collection('Todo').find().count().then((count)=>{
		console.log(`todos count ${count}`);
		console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
		console.log('unable to fetch todos',err);
	});
	db.close();
}); 
 