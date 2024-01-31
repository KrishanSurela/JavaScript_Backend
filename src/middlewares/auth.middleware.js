// to verify that user is available or nor

import { apiError } from "../utils/apiError";
import { asyncHandler } from "../utils/asyncHandler";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";

export const verifyJWT = asyncHandler(async (req, _, next) => {
try {
      const token =
        req.cookies?.accessToken ||
        req.header("Authorization")?.replace("Bearer ", "");
    
      if (!token) {
        throw new apiError(401, "Unauthorized request");
      }
    
      const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    
      const user = await User.findById(decodedToken?._id).select(
        "-password -refreshToken"
      );
    
      if (!user) {
        //Discussion : about frontend
        throw new apiError(401, "Invaid Access Token");
      }
    
      req.user = user;
      next();
} catch (error) {
    throw new apiError(401,error?.message || "Invalid Access Token")
}
  
});
