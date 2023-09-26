import  express  from 'express';

const router = express.Router();
import { product } from '../constant/index.js';


   
router.get("/",(req,res)=>{
res.status(200).send({product: product});
})




export default router;