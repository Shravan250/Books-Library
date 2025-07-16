import express, { Application } from "express";
import cors from 'cors';
import bookRoutes from "./routes/book.routes";
import { connectDB } from "./config/database";

class App{
    public app: Application;
    public port: number;

    constructor(port: number){
        this.app = express();
        this.port = port;

        this.initializeMiddleware();
        this.initializeRoutes();
        this.initializeDatabase();

    }

    private initializeMiddleware():void {
        this.app.use(cors());
        this.app.use(express.json());
    }

    private initializeRoutes(): void{
        this.app.use('/api/books', bookRoutes);
    }

    private async initializeDatabase(): Promise<void>{
        await connectDB();
    }

    public listen(): void{
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}

export default App;