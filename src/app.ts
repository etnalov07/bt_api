import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { config } from './config/env';
import { errorHandler } from './middleware/errorHandler';

// Import routes (to be created)
import authRoutes from './routes/auth.routes';
import teamRoutes from './routes/team.routes';
import playerRoutes from './routes/player.routes';
import gameRoutes from './routes/game.routes';
import atBatRoutes from './routes/atBat.routes';
import pitchRoutes from './routes/pitch.routes';
import playRoutes from './routes/play.routes';
import analyticsRoutes from './routes/analytics.routes';

const app: Application = express();

// Middleware
app.use(cors({ origin: config.cors.origin }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: config.nodeEnv,
  });
});

// API Routes
app.use('/auth', authRoutes);
app.use('/teams', teamRoutes);
app.use('/players', playerRoutes);
app.use('/games', gameRoutes);
app.use('/at-bats', atBatRoutes);
app.use('/pitches', pitchRoutes);
app.use('/plays', playRoutes);
app.use('/analytics', analyticsRoutes);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware (must be last)
app.use(errorHandler);

export default app;