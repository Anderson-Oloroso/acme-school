import 'dotenv/config';
import { createConnection } from 'mysql2/promise';

export async function connection() {
  try {
    const dbConnection = await createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
    });
    console.log('Conexión exitosa con la base de datos');
    return dbConnection;
  } catch (err) {
    console.error('Error en la base de datos al intentar conectarse con la app:',err.message);
  }
}
