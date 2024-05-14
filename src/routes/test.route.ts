import express from "express";
import { getTestData, testController } from "../controllers/test.controller";
const router = express.Router();

router.get("/new", testController);
router.get("/get/d/test", getTestData);
export default router;
