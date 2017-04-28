import mongoose  from 'mongoose';
import {dbName, user, psw} from '../../secret.json';

const uri = `mongodb://${user}:${psw}@test-1-shard-00-00-g1j8y.mongodb.net:27017,test-1-shard-00-01-g1j8y.mongodb.net:27017,test-1-shard-00-02-g1j8y.mongodb.net:27017/${dbName}?ssl=true&replicaSet=test-1-shard-0&authSource=admin`;

mongoose.connect(uri);

export default mongoose.connection;