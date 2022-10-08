import { Request, Response } from "express";

const getBootCamps = (req: Request, res: Response) => {
  res.send(`Show all bootcamp`);
};

const getBootCamp = (req: Request, res: Response) => {
  res.send(`Show bootcamp with id: ${req.params.id}`);
};

const createBootCamp = (req: Request, res: Response) => {
  res.send(`Create a bootcamp`);
};

const updateBootCamp = (req: Request, res: Response) => {
  res.send(`Update bootcamp with id: ${req.params.id}`);
};

const deleteBootCamp = (req: Request, res: Response) => {
  res.send(`Delete bootcamp with id: ${req.params.id}`);
};

export {
  getBootCamp,
  getBootCamps,
  createBootCamp,
  updateBootCamp,
  deleteBootCamp,
};
