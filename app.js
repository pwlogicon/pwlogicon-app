const express = require("express");
const app = express();

// Use Render's PORT environment variable or fallback to 10000
const port = process.env.PORT || 10000;

// Health check endpoint
app.get("/", (req, res) => {
  res.json({
    message: "🚀 PWLoGiCon Platform - Live on Render!",
    status: "healthy",
    timestamp: new Date().toISOString(),
    platform: "PWLoGiCon Logistics Intelligence",
    version: "1.0.0"
  });
});

// API health endpoint
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "healthy", 
    timestamp: new Date().toISOString(),
    platform: "PWLoGiCon",
    uptime: process.uptime(),
    memory: process.memoryUsage()
  });
});

// Basic platform info endpoint
app.get("/api/info", (req, res) => {
  res.json({
    name: "PWLoGiCon Platform",
    description: "AI-powered logistics intelligence platform",
    features: [
      "Real-time GPS tracking",
      "AI-powered partnership matching", 
      "Interactive geospatial analytics",
      "Predictive ETA intelligence",
      "Multi-carrier integration"
    ]
  });
});

// Start server with proper error handling
const server = app.listen(port, "0.0.0.0", () => {
  console.log(`✅ PWLoGiCon Server running at http://0.0.0.0:${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'production'}`);
  console.log(`Node version: ${process.version}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('PWLoGiCon server closed');
    process.exit(0);
  });
});

// Error handling
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});
