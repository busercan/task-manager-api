import express from 'express';
import './config/db'
import { setupSwagger } from './config/swagger';
import taskRoutes from './routes/task.route';
import userRoutes from './routes/user.route';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Swagger setup
setupSwagger(app);

//routes
app.use(taskRoutes);
app.use(userRoutes);

export default app;
