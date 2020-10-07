import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { setupDI, container } from "../di-setup";

setupDI();

// Only controllers need to be resolved  ???
const sessionController = container.resolve("sessionController");
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
  res.json({ data: "LELELELEL" });
});
                                        /*   router.use((req, res, next) =>
                                        authenticateMiddleware.authenticate(req, res, next)
                                        ); */ 

/* add new item  */
router.post("/items", (req, res) => {
  const data = req.body;
  console.log("this is the post req body ",data)
  res.json(data);
});

/* update new item  */
router.put("/items/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  console.log("This is the param and teh body :" ,{ id, body })

  res.json({ id, body });
});

export default router;
