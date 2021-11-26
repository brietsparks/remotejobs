import { config as configureEnv } from 'dotenv';

import { createContainer } from './container';

configureEnv();
const pgUrl = getVar('PG_URL');
const port = getVar('PORT', '3001');

const container = createContainer({
  pgUrl
});

const action = process.argv[2];
if (action === 'serve') {
  container.server.listen(3001, () => {
    console.log(`listening on port ${port}`)
  })
}

if (action === 'db:up') {
  container.db.migrate.up().then(process.exit);
}

if (action === 'db:down') {
  container.db.migrate.down().then(process.exit);
}

function getVar(name: string, fallback?: string): string {
  const value = process.env[name];
  if (!value) {
    if (!fallback) {
      throw new Error(`env var ${name} missing`);
    }
    return fallback;
  }
  return value;
}
