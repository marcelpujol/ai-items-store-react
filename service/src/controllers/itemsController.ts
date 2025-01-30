import { Request, Response, NextFunction } from "express";
import itemsService from "../services/itemsService";
import { Item } from "../models/item";
import { v4 as uuidv4 } from "uuid";
import { SearchCriteria } from "../models/searchCriteria";

const getItems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("Hey, I am GETTING the items!");

    const name = (req.query.name as string) || undefined;
    const description = (req.query.description as string) || undefined;
    const maxPrice = Number(req.query.maxPrice as string) || undefined;
    const minPrice = Number(req.query.minPrice as string) || undefined;

    console.log(`
      with the following search criteria:\n NAME ${name}\n DESCRIPTION: ${description}\n MAX PRICE: ${maxPrice} \n MIN PRICE: ${minPrice}`);

    const searchCriteria = {
      name,
      description,
      maxPrice,
      minPrice,
    } as SearchCriteria;

    const items = await itemsService.getItems(searchCriteria);
    res.status(200).json({ success: true, data: items });
  } catch (error) {
    next(error);
  }
};

const createItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("Hey, I am CREATING a new item!");
    const { name, description, price } = req.body;

    console.log(
      `with the following info:\n NAME: ${name}\n DESCRIPTION: ${description}\n PRICE: ${price}`
    );

    const itemToCreate = {
      id: uuidv4(),
      name,
      description,
      price,
    } as Item;

    const createdItem = await itemsService.createItem(itemToCreate);
    res.status(200).json({ success: true, data: createdItem });
  } catch (error) {
    next(error);
  }
};

const editItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("Hey, I am UPDATING an existing item!");
    const { id, name, description, price } = req.body;

    console.log(
      `with the following info:\n NAME: ${name}\n DESCRIPTION: ${description}\n PRICE: ${price}`
    );

    const itemToEdit = {
      id,
      name,
      description,
      price,
    } as Item;

    const editedItem = await itemsService.updateItem(itemToEdit);
    res.status(200).json({ success: true, data: editedItem });
  } catch (error) {
    next(error);
  }
};

const deleteItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.query.id as string;
    await itemsService.deleteItem(id);
    res.status(200).json({ success: true, data: id });
  } catch (error) {
    next(error);
  }
};

export default {
  getItems,
  createItem,
  editItem,
  deleteItem,
};
