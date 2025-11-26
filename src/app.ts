import express from 'express';
import './config/db'
import taskRoutes from './routes/task.route';
import { setupSwagger } from './config/swagger';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Swagger setup
setupSwagger(app);

//routes
app.use(taskRoutes);

export default app;
