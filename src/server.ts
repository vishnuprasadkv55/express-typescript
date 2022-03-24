import { config as envConfig } from "dotenv";
import app from "./app";

// setting env variables
envConfig();

// initiating server
const { PORT = 80 } = process.env;
const listener = () => console.log(`Listening on Port ${PORT}`);

// firing server up
app.listen(PORT, listener);
