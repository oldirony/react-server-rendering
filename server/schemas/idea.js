import mongoose from 'mongoose';
const ideasSchema = mongoose.Schema({
	title: String,
	content: String,
	isCompleted: Boolean,
	sections: Array
});


export default mongoose.model('Idea', ideasSchema);