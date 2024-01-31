import { Router } from "express";
import { loginuser, logoutUser, registeruser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registeruser
);

router.route("/login").post(loginuser)

//secured routes

router.route("/logout").post(verifyJWT,logoutUser)

export default router; //AAGE IMPORT KRTE TIME MANCHAHA NAAM DE SKTE HAI default HAI TB
