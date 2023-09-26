import  express  from 'express';

const router = express.Router();


const user =
    [

        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",

        },

        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",

        }
    ]

router.get("/",(req,res)=>{
res.status(200).send({users: user});
})




export default router;