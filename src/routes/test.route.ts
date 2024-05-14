import express from "express";
import { testController } from "../controllers/test.controller";
const router = express.Router();

router.get("/new", testController);
export default router;
