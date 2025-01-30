import { convertToCoreMessages, streamText, tool } from "ai";
import { openai } from "@ai-sdk/openai";
import { bedrock } from "@ai-sdk/amazon-bedrock";
import { z } from "zod";
import {
  OPEN_AI_MODEL,
  AI_SYSTEM_PROMPT,
  AMAZON_BEDROCK_MODEL,
} from "../constants";
import {
  DeletedItemSchema,
  ItemSchema,
  SearchItemsCriteriaSchema,
} from "../schemas";
import itemsService from "../services/itemsService";
import { v4 as uuidv4 } from "uuid";
import { PermissionError } from "../models/permissionError";

//API functions
const API_SERVICE = {
  getItems: async (
    searchCriteria: z.infer<typeof SearchItemsCriteriaSchema>
  ) => {
    const results = await itemsService.getItems(searchCriteria);
    return results;
  },
  getItemsStatistics: async () => {
    const results = await itemsService.getItemsStatistics();
    return results;
  },
  addItem: async (newItem: z.infer<typeof ItemSchema>) => {
    newItem.id = uuidv4();
    const result = await itemsService.createItem(newItem);
    return result;
  },
  updateItem: async (updatedItem: z.infer<typeof ItemSchema>) => {
    const result = await itemsService.updateItem(updatedItem);
    return result;
  },
  deleteItem: async (deletedItem: z.infer<typeof DeletedItemSchema>) => {
    // throw new PermissionError(
    //   "Permission denied: You don't have access to delete items."
    // );
    const result = await itemsService.deleteItem(deletedItem.id);
    return result;
  },
};

//AI tools
const AI_TOOLS = {
  getItems: tool({
    description:
      "Returns the items that will match the search criteria passed as queryParams, the price of those items will be in euros. It is not needed to list it on the UI.",
    parameters: SearchItemsCriteriaSchema,
    execute: API_SERVICE.getItems,
  }),
  getStoreStatistics: tool({
    description:
      "Returns key store statistics, including the total number of items, the sum of all item prices in euros, the highest and lowest item prices in euros, and the average item price in euros.",
    parameters: z.object({}),
    execute: API_SERVICE.getItemsStatistics,
  }),
  addItem: tool({
    description: "Creates an item that will be stored in the system",
    parameters: ItemSchema,
    execute: API_SERVICE.addItem,
  }),
  updateItem: tool({
    description: "Updates an item that is already stored in the system",
    parameters: ItemSchema,
    execute: API_SERVICE.updateItem,
  }),
  deleteItem: tool({
    description: "Deletes an item that is already stored in the system",
    parameters: DeletedItemSchema,
    execute: API_SERVICE.deleteItem,
  }),
};

export async function askToAI(messages: any) {
  const result = streamText({
    model: bedrock(AMAZON_BEDROCK_MODEL),
    system: AI_SYSTEM_PROMPT,
    messages: convertToCoreMessages(messages),
    maxSteps: 2,
    maxRetries: 1,
    tools: AI_TOOLS,
  });

  return result;
}
