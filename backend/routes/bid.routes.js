import express from "express";
import { createBid, hireBid, getBidsByGig } from "../controllers/bid.controller.js";
import { auth } from "../middleware/auth.js";

const r = express.Router();

r.post("/", auth, createBid);   // auth 
r.get("/:gigId", auth, getBidsByGig);
r.patch("/:bidId/hire", auth, hireBid);

export default r;