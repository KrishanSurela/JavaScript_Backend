import { Router } from "express";
import { registeruser } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registeruser);

export default router; //AAGE IMPORT KRTE TIME MANCHAHA NAAM DE SKTE HAI default HAI TB
