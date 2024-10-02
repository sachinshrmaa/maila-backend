import { nanoid } from "nanoid";
import {
  createBooking,
  getBookingById,
  getBookingsByUserId,
} from "../repository/bookings.repository.js";

const createPickUpBooking = async (req, res) => {
  const userId = req.user.user_id;
  if (!userId) {
    return res.status(401).json({ message: "Unauthorized! Please login." });
  }
  const { pickupDate, pickupTime } = req.body;
  if (!pickupDate || !pickupTime) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const bookingDetail = {
    bookingId: nanoid(),
    userId,
    pickupDate,
    pickupTime,
    paymentStatus: "Completed",
    pickupStatus: "Scheduled",
  };

  try {
    const booking = await createBooking(bookingDetail);

    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserBookings = async (req, res) => {
  const userId = req.user.user_id;
  if (!userId) {
    return res.status(401).json({ message: "Unauthorized! Please login." });
  }

  try {
    const bookings = await getBookingsByUserId(userId);

    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPickUpDetails = async (req, res) => {
  const userId = req.user.user_id;
  if (!userId) {
    return res.status(401).json({ message: "Unauthorized! Please login." });
  }

  const { bookingId } = req.body;
  if (!bookingId) {
    return res.status(400).json({ message: "Booking Id is required" });
  }

  try {
    const bookings = await getBookingById(bookingId);

    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createPickUpBooking, getUserBookings, getPickUpDetails };
