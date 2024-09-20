import express from 'express';
import userRoutes from './routes/userroutes';
import courseRoutes from './routes/courseroutes'
import { sequelize } from './config/config'

const app = express();
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api',courseRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connection established.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
