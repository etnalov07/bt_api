import app from './app';
import { config } from './config/env';
import pool from './config/database';

const PORT = config.port;

// Test database connection before starting server
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ Failed to connect to database:', err);
    process.exit(1);
  }
  console.log('✅ Database connection successful');
  console.log('📅 Current time from DB:', res.rows[0].now);
});

// Start server
const server = app.listen(PORT, () => {
  console.log('🚀 Baseball Tracker API Server');
  console.log(`📡 Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${config.nodeEnv}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    pool.end(() => {
      console.log('Database pool closed');
      process.exit(0);
    });
  });
});