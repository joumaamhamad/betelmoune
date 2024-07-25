import mongoose from 'mongoose';

const workshopSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    duration: { type: Number, required: true },
    capacity: { type: Number, required: true },

    registeredUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],

    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    topics: [{ type: String }],
    price: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Workshop = mongoose.model('Workshop', workshopSchema);

export default Workshop;
