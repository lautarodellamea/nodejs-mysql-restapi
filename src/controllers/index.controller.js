import { pool } from "../db.js"; //cuando creo mis propios modulos es importanto poner el .js, con modulos de terceros no es necesario.

export const ping = async (req, res) => {
  const [result] = await pool.query('SELECT "Pong" AS result');
  res.json(result[0]);
};
