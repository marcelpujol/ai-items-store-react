import dbPool from "../database";
import { Item } from "../models/item";
import { SearchCriteria } from "../models/searchCriteria";

const getItems = async (searchCriteria: SearchCriteria) => {
  const client = await dbPool.connect();
  const values: any[] = [];
  try {
    let query = `SELECT * FROM items WHERE 1=1`;
    let paramCount = 1;
    if (searchCriteria.name) {
      query += ` AND name ILIKE $${paramCount}`;
      values.push(`%${searchCriteria.name}%`);
      paramCount++;
    }
    if (searchCriteria.description) {
      query += ` AND description ILIKE $${paramCount}`;
      values.push(`%${searchCriteria.description}%`);
      paramCount++;
    }

    if (searchCriteria.minPrice && searchCriteria.maxPrice) {
      query += ` AND price BETWEEN $${paramCount} AND $${paramCount + 1}`;
      values.push(searchCriteria.minPrice, searchCriteria.maxPrice);
      paramCount += 2;
    } else if (searchCriteria.minPrice) {
      query += ` AND price >= $${paramCount}`;
      values.push(searchCriteria.minPrice);
      paramCount++;
    } else if (searchCriteria.maxPrice) {
      query += ` AND price <= $${paramCount}`;
      values.push(searchCriteria.maxPrice);
      paramCount++;
    }
    query += ` ORDER BY price`;

    const res = await client.query(query, values);
    return res.rows;
  } finally {
    client.release();
  }
};

const createItem = async (item: Item) => {
  const client = await dbPool.connect();
  try {
    const res = await client.query(
      `INSERT INTO items (id, name, description, price) 
       VALUES ($1, $2, $3, $4) 
       RETURNING id, name, description, price, created_at`,
      [item.id, item.name, item.description, item.price]
    );
    return res.rows[0];
  } finally {
    client.release();
  }
};

const updateItem = async (item: Item) => {
  const client = await dbPool.connect();
  try {
    const res = await client.query(
      `UPDATE items 
       SET 
        name = COALESCE($2, name),
        description = COALESCE($3, description),
        price = COALESCE($4, price)
       WHERE id = $1
       RETURNING id, name, description, price, created_at`,
      [item.id, item.name || null, item.description || null, item.price || null]
    );
    return res.rows[0];
  } finally {
    client.release();
  }
};

const deleteItem = async (itemId: string) => {
  const client = await dbPool.connect();
  try {
    const res = await client.query(
      `DELETE FROM items 
        WHERE id = $1
        RETURNING id, name`,
      [itemId]
    );
    return res.rows[0];
  } finally {
    client.release();
  }
};

const getItemsStatistics = async () => {
  const client = await dbPool.connect();
  try {
    const res = await client.query(
      `SELECT 
      COUNT(*) AS total_items,
      SUM(price) AS total_price,
      MAX(price) AS max_price,
      MIN(price) AS min_price,
      AVG(price) AS avg_price
      FROM items;`
    );
    return res.rows[0];
  } finally {
    client.release();
  }
};

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem,
  getItemsStatistics,
};
