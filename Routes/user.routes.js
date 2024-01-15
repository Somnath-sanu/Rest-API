import { Router } from "express";
import { getAllProducts , getAllProductsTesting , postData } from "../Controllers/user.controller.js";

const router = Router();

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);

router.route("/set").post(postData);


export default router;