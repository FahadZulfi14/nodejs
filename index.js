console.log('hello world---- this is main index file')
import express from 'express';
import cors from 'cors';
import router from './routes/index.js'

const app = express();
const port = process.env.Port || 8000;



    app.use(express.json());
    app.use(cors());

app.use('/',(req, res, next)=>{
console.log("Request Succesfully completed", req.query);
if(req.query.apikey=== '123'){
    
    next()
}else{
    res.status(401).send({message: "Not Allow"})
}
})



 



    app.use('/api', router)

 

app.listen(port, () => {
    console.log(`server is running on port = ${port}`)
}); 