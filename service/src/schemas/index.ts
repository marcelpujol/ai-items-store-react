import { z } from "zod";

export const ItemSchema = z.object({
  id: z.string().describe("Unique identifier of the item to be updated"),
  name: z.string().describe("The name of the item"),
  description: z.string().describe("The description of the item"),
  price: z.number().describe("the price of the item"),
});

export const DeletedItemSchema = z.object({
  id: z.string().describe("Unique identifier of the item to be deleted"),
});

export const SearchItemsCriteriaSchema = z.object({
  name: z
    .string()
    .optional()
    .describe(
      "Optional search term for item names. If provided, the query will return items whose names contain this value."
    ),
  description: z
    .string()
    .optional()
    .describe(
      "Optional search term for item descriptions. If provided, the query will return items whose descriptions contain this value."
    ),
  maxPrice: z
    .number()
    .optional()
    .describe(
      "Optional search term for item maximum price. If provided, the query will return items whose the price is less than this value"
    ),
  minPrice: z
    .number()
    .optional()
    .describe(
      "Optional search term for items minimum price. If provided, the query will return items whose the price is greather than this value"
    ),
});
