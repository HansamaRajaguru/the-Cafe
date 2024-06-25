import mongoose, { Document, Schema } from 'mongoose';

export interface IReservation extends Document {
  name: string;
  people: number;
  date: string;
  time: string;
  message?: string;
}

const ReservationSchema: Schema = new Schema({
  name: { type: String, required: true },
  people: { type: Number, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  message: { type: String },
});

export default mongoose.model<IReservation>('Reservation', ReservationSchema);
