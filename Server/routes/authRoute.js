import express from "express"
import { isAuthenticated, loginUser, logoutUser, registerUser, resetPassword, sendResetOtp, sendVerifyOtp, vertifyEmail} from "../controller/authController.js"
import userAuth from "../middleware/userAuth.js"

const authRouter=express.Router()



authRouter.post("/register",registerUser)
authRouter.post("/login",loginUser)
authRouter.post("/logout",logoutUser)
authRouter.post("/send-verify-otp",userAuth,sendVerifyOtp)
authRouter.post("/verify-account",userAuth,vertifyEmail)
authRouter.get("/is-auth",userAuth,isAuthenticated)
authRouter.post("/send-rest-otp",sendResetOtp)
authRouter.post("/reset-password",resetPassword)


export default authRouter