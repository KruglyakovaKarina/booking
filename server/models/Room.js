import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const RoomSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      unique: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    roomNumbers: [
      {
        number: Number,
        unavailableDates: { type: [Date] },
      },
    ],
  },
  { timestamps: true }
);

export default model('Room', RoomSchema);
