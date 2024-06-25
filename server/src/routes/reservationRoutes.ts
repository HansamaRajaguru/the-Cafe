const express = require('express');
const router = express.Router();
import { createReservation } from "../controllers/reservationController";

router.post('/reserve', createReservation);

export default router;
