import { NextFunction, Request, Response } from "express";

export const testController = async(req:Request,res:Response,next:NextFunction)=>{
    res.send("Hello tester")
}