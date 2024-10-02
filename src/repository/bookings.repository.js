import { getPool } from "../db/index.js";

export const createBooking = async (bookingDetail) => {
  const query = `INSERT INTO Bookings (booking_id, user_id, pickup_date, pickup_time, payment_status, pickup_status)
VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`;

  const values = [
    bookingDetail.bookingId,
    bookingDetail.userId,
    bookingDetail.pickupDate,
    bookingDetail.pickupTime,
    bookingDetail.paymentStatus,
    bookingDetail.pickupStatus,
  ];

  const { rows } = await getPool().query(query, values);
  return rows[0];
};

export const getBookingById = async (bookingId) => {
  const query = "SELECT * FROM Bookings WHERE booking_id = $1";
  const values = [bookingId];

  const { rows } = await getPool().query(query, values);
  if (rows.length) {
    return rows[0];
  } else {
    return null;
  }
};

export const getBookingsByUserId = async (userId) => {
  const query = "SELECT * FROM Bookings WHERE user_id = $1";
  const values = [userId];

  const { rows } = await getPool().query(query, values);
  return rows;
};

export const deleteBookingById = async (bookingId) => {
  const query = "DELETE FROM Bookings WHERE booking_id = $1";
  const values = [bookingId];

  const { rows } = await getPool().query(query, values);
  return rows[0];
};
