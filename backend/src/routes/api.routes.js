import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { setupDI , container } from '../di-setup'


setupDI();

// Only controllers need to be resolved  ???
 const sessionController = container.resolve('sessionController');
 
const router = express.Router();
router.use(cors());
router.use(bodyParser.json());

/* Login */
router.post('/session', (req,res)=>{    
  sessionController.post(req, res)
})

 /* show all  item  */
router.get('/items' , (req,res)=>{     
  const data = req.body
  res.json(data)
})
 /* add new item  */
router.post('/items' , (req,res)=>{     
  const data = req.body
  res.json(data)
})

 /* update new item  */
router.put('/items/:id' , (req,res)=>{     
  const data = req.body
  itemsRepository.
  console.log(data)
  res.json(data)
})


export default router ; 
