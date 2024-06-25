import { Request, Response } from 'express';
import Reservation, { IReservation } from '../models/Reservation';

export const createReservation = async (req: Request, res: Response): Promise<void> => {
    console.log('Request body:', req.body);
    const { name, people, date, time, message } = req.body;

    // Log each field to verify types
    console.log('name:', name);
    console.log('people:', people);
    console.log('date:', date);
    console.log('time:', time);
    console.log('message:', message);

    try {
        const newReservation = new Reservation({
            name,
            people: parseInt(people, 10), // Convert people to number
            date,
            time,
            message
        });
        await newReservation.save();
        res.status(201).json({ message: 'Reservation received successfully!' });
    } catch (error) {
        console.error('Error saving Reservation:', error);
        res.status(500).json({ error: 'Server Error' });
    }
};
