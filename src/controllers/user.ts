import { type RequestHandler } from 'express';
import User, { type UserInput, type UserLogin }  from '../models/User.ts';
import bcrypt from "bcrypt";
  


export const getUsers: RequestHandler = async (req, res) => {
  try {
    const users = (await User.find());
    res.json(users);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const createUser: RequestHandler = async (req, res) => {
  try {
    const { name, email, password, usercategory, level, instrument, favband } = req.body as UserInput;
    if (!name || !email || !password || !usercategory)
      return res.status(400).json({ error: 'name, email, and password, usercategory are required' });
    const existing = await User.findOne({ email }).lean();

    if (existing) {
      return res.status(400).json({ error: "Email already in use"});
    }
    //3. hash the password. NEVER EVER store it as plain tex
    const SALT_ROUNDS = 12;
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);


    const user = await User.create({ name, email, password: hashedPassword, usercategory, level, instrument,favband });
    res.json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const getUserById: RequestHandler = async (req, res) => {
  try {
    const {
      params: { id }
    } = req;
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    
    res.json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const updateUser: RequestHandler = async (req, res) => {
  try {
    const {
      body,
      params: { id }
    } = req;
    const { name, email, usercategory, level, instrument, favband } = body as UserInput;
    if (!name || !email)
      return res.status(400).json({ error: 'name and email are required' });
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    user.name = name;
    user.email = email;
    user.level = level;
    user.usercategory=usercategory;
    user.instrument= instrument;
    user.favband =favband;
    const newUser=await user.save();
    res.json(newUser);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const deleteUser: RequestHandler = async (req, res) => {
  try {
    const {
      params: { id }
    } = req;
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};



export const login: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body as UserLogin;

    //1. find the user by email
    const user = await User.findOne({ email });

    // give a generic "incorrect credentials" for either wrong email or wrong pass
    if (!user) {
      return res.status(400).json({ error: "Incorrect credentials"});
    }

    //2. Compare plain text password from the request with the hashed pass in the DB
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
      return res.status(400).json({ error: "Incorrect credentials"});
    }

   return  res.status(200).json({
      message: "Logged in",
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        usercategory: user.usercategory,
        level: user.level,
        instrument: user.instrument,
        favband: user.favband,
      },
    });
  } catch (error) {
    next(error);
  }
};
