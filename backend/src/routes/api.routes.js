import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { setupDI, container } from "../di-setup";

setupDI();

// Only controllers need to be resolved  ???
const sessionController = container.resolve("sessionController");
const itemsController = container.resolve("itemsController");
const authenticateMiddleware = container.resolve("authenticateMiddleware");

const router = express.Router();
router.use(cors());
router.use(bodyParser.json());

/* Login */
router.post("/session", (req, res) => {
  sessionController.post(req, res);
});

/* show all  item  barki lekerhet de hozzadni  csak tokkennel */
router.get("/items", (req, res) => {
  itemsController.getItemsForSale(req,res)
});
                                        /*   router.use((req, res, next) =>
                                        authenticateMiddleware.authenticate(req, res, next)
                                        ); */ 

/* add new item  */
router.post("/items", (req, res) => {
  itemsController.createNewItems(req,res)
});

/* update new item  */
router.get("/items/:id", (req, res) => {
  itemsController.getItemsById(req,res)
});

router.put("/items", (req, res) => {
  itemsController.makeItemSold(req,res)

});

export default router;
