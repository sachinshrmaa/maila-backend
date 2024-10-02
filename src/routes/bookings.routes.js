import { Router } from "express";
import { requireAuth } from "../middlewares/auth.middlewares.js";
import {
  createPickUpBooking,
  getPickUpDetails,
  getUserBookings,
} from "../controllers/bookings.controllers.js";

const router = Router();

router.post("/book-pickup", requireAuth, createPickUpBooking);
router.post("/bookings", requireAuth, getUserBookings);
router.post("/pickup-details", requireAuth, getPickUpDetails);

export default router;
