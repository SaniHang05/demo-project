import { UserDetails } from "../model/UserModel.js";
import { AdminDetails } from "../model/AdminModel.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"


const Authentication = AsyncHandler(async (req, _, next) => {

    try {
        const token = req.cookies?.AccessToken || (authHeader && authHeader.startsWith("Bearer", "") ? authHeader.slice(7) : null)
        console.log(token);

        if (!token) {
            throw new ApiError(401, "Unauthorized Access")
        }

        const Decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await UserDetails.findById(Decode.id)
        const admin = await AdminDetails.findById(Decode.id)

        if (!user && !admin) {
            throw new ApiError(401, "Invalid User")
        }
        req.user = user
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid Token")
    }
})

export { Authentication }