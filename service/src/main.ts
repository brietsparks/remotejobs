import { config as configureEnv } from 'dotenv';

import { createContainer } from './container';

configureEnv();
const pgUrl = requireVar('PG_URL');
const port = getVar('PORT', '3001');
const nodeEnv = getVar('NODE_ENV')
const development = nodeEnv === 'development';

const container = createContainer({
  pgUrl,
  development
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
