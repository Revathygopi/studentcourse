import { Request, Response } from 'express';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'revathy'; 

export const register = async (req: Request, res: Response) => {
  const { name, email, password,phoneNumber,address,education } = req.body;

  try {
    const user = await User.create({ name, email, password,phoneNumber,address,education });
    res.status(201).json({  name: user.name, email: user.email, phonenumber:user.phoneNumber,address:user.address,education:user.education });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (user && await user.comparePassword(password)) {
      const token = jwt.sign({ id: user.id, name: user.name }, SECRET_KEY, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
