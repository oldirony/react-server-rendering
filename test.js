

mongoose.connect(uri);

const DB = mongoose.connection;

DB.on('open',()=>{
	// create schema



	Idea.find().then((idea) => console.log(idea));

	const idea =  new Idea({title: 'My title', content: '4', isCompleted: false, sections:[]});

	// idea.save().then(function(idea){
	// 	console.log(idea.title);
	//
	// 	DB.close();
	// });


});



