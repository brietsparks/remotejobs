import express from 'express';

export function createContainer() {
  const server = express();

  server.get('/health', (req, res) => {
    res.json({ ok: 1 });
  });

  return {
    server
  };
}
