import mongoose,{ Types } from "mongoose";
import z from 'zod';



export const userInputSchema = z.strictObject({
  name: z.string().min(2, 'min length is 2 chars'),
  email: z.email(),
  password: z.string().min(6, 'min length is 6 chars'),
  usercategory: z.string(),
  level: z.string().optional().or(z.literal('')),
  instrument: z.string().optional().or(z.literal('')),
  favband: z.string().optional().or(z.literal(''))
});

export const userLoginSchema = z.strictObject({
  email: z.email(),
  password: z.string().min(6, 'min length is 6 chars')
});

export const userParmSchema = z.strictObject({
  id: z.string().refine((value) => Types.ObjectId.isValid(value), {
    message: 'Invalid id'
  })
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: [true, 'Email already exists'],
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Email is not valid']
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters long']
    },
    level: {
      type: String,
      trim: true
    },
    instrument: {
      type: String,
      trim: true
    },
    favband: {
      type: String,
      trim: true
    },
    usercategory: {
      type: String,
      trim: true,
      required: [true, 'User Category is required'],
    }
  }
);

mongoose.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret: any, options) {
    delete ret.__v;
    delete ret._id;
    delete ret.password;
    return ret;
  }
}); 
export type UserInput = z.infer<typeof userInputSchema>;
export type UserLogin = z.infer<typeof userLoginSchema>;
export default mongoose.model('User', userSchema);