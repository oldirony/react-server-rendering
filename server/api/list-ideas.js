import Idea from '../schemas/idea';

export default (req, res)=>{
	Idea.find().then((ideas)=>res.send(JSON.stringify(ideas)));
}