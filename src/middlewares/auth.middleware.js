// to verify that user is available or nor

import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new apiError(401, "Unauthorized request");
    }
    const decodedToken = jwt.decode(token, process.env.ACCESS_TOKEN_SECRET); // jwt.verify bhi use kr skte hai lekin usme error sachmuch me kya aa rhi hai nhi btata esme maine options define nhi kiya the user.controller.js wali file me to error uski hi aayi

    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      //Discussion : about frontend
      throw new apiError(401, "Invalid Access Token");
    }

    req.user = user;
    next();
  } catch (error) {
    throw new apiError(401, error?.message || "Invalid Access Token");
  }
});
