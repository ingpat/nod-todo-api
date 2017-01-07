var MongoClient = require('mongodb').MongoClient;
var {MongoClient,ObjectId}=require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('unable to connect to mongo db server')
	}

	console.log('Connected to mongo db server')

	db.collection('Todo').findOneAndUpdate({
		_id:new ObjectId('58700ba90d22cf10209700d6')		
	},{
		$set:{
			completed:true
		}
		},{
			returnOriginal:false				
	}).then((result)=>{
		console.log(result);
		//console.log(JSON.stringify(result.ops,undefined,2));
	});
 
	db.close();
});
 