import express from "express"
import { isAuthenticated, loginUser, logoutUser, registerUser, sendVerifyOtp, vertifyEmail} from "../controller/authController.js"
import userAuth from "../middleware/userAuth.js"

const authRouter=express.Router()



authRouter.post("/register",registerUser)
authRouter.post("/login",loginUser)
authRouter.post("/logout",logoutUser)
authRouter.post("/send-verify-otp",userAuth,sendVerifyOtp)
authRouter.post("/verify-account",userAuth,vertifyEmail)
authRouter.post("/is-auth",userAuth,isAuthenticated)


export default authRouter