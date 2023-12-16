import  express, { Router }  from "express";
import { getPrac, postPrac } from "../controllers/prac.js";

const router = express.Router();

router.get("/",getPrac);
router.post("/",postPrac);


export default router;