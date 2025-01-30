import { Router } from "express";
import itemsController from "../controllers/itemsController";
import chatController from "../controllers/chatController";

const router = Router();

router.post("/chat", chatController.handleChat);

router.get("/items", itemsController.getItems);
router.post("/item", itemsController.createItem);
router.put("/item", itemsController.editItem);
router.delete("/item", itemsController.deleteItem);

export default router;
