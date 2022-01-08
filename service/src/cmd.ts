import { config as configureEnv } from 'dotenv';

import { createApp } from './app';

configureEnv();
const dbUser = requireVar('DB_USER');
const dbPassword = requireVar('DB_PASSWORD');
const dbHost = requireVar('DB_HOST');
const dbDatabase = requireVar('DB_DATABASE');
const port = getVar('PORT', '3001');
const nodeEnv = getVar('NODE_ENV')
const development = nodeEnv === 'development';

const app = createApp({
  dbConn: {
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: dbDatabase
  },
  development
});

const action = process.argv[2];
if (!action) {
  app.server.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
}

if (action === 'db:up') {
  app.db.migrate.up().then(process.exit);
}

if (action === 'db:down') {
  app.db.migrate.down().then(process.exit);
}


function requireVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`env var ${name} missing`);
  }
  return value;
}

function getVar(name: string, fallback = '') {
  const value = process.env[name];
  return value || fallback;
}
