import express from "express";
const router = express.Router();
import { getAll, getSingle } from "../controllers/productController.js";

router.route('/').get(getAll);

router.get("/:id", getSingle);

export default router;
