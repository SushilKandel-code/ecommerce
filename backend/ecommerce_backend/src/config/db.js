import pg from "pg";
import env from "dotenv"
env.config();


const db = new pg.Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: String(process.env.DB_PASSWORD),
    database: process.env.DB_DATABASE,
});

const connectDB = async () => {
    try {
        await db.connect();
        console.log("Database connected Successfully..");
    } catch (error) {
        console.error("Something went wrong", error);
        process.exit(1);
    }
}

export { connectDB }