import db from '../lib/db';
import Idea from '../schemas/idea';



export default (req, res)=>{
	const idea = new Idea(req.body);

	idea.save().then(()=>res.send('received and saved'));
}