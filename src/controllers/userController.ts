import User from "../models/userModel";
import { Request, Response } from "express";

const get = async (req: Request, res: Response) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if(!id) {
      const response = await User.findAll({
        attributes: ['id', 'nome', 'email'],
        order: [['id', 'ASC']],  
      }); 
      return res.status(200).send({
        message: 'All users found',
        data: response,
      });
    }

    const response = await User.findOne({ where: { id } });

    if(!response){
      return res.status(404).send({
        message: `UserId: ${id} not found`,
        data: [],
      });
    }

      return res.status(200).send({
        message: `UserId: ${id} found`,
        data: response,
      });
 
  } catch (error) {

    const errorMessage = (error as Error).message;

    return res.status(500).send({
      message: 'Oops! An error occurred.',
      error: errorMessage,
    })

  }
}

export default {
  get,
}

