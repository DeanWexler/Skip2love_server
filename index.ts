import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import routes from "./routes";

// Load env variables
dotenv.config();

// Create Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.get('/', (req: Request, res: Response) => {
  res.send('Skip2Love backend is running!');
});

// ✅ Fixed Supabase route
app.get('/users', async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase.from('users').select('*');
    if (error) throw error;
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
