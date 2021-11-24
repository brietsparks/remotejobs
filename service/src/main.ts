import { config as configureEnv } from 'dotenv';

import { createContainer } from './container';

(async function main() {
  configureEnv();
  const pgUrl = getVar('PG_URL');
  const port = getVar('PORT', '3001');

  const container = createContainer({
    pgUrl
  });

  const action = process.argv[2];
  if (action === 'serve') {
    await container.server.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  }

  if (action === 'db:up') {
    await container.db.migrate.up();
  }

  if (action === 'db:down') {
    await container.db.migrate.down();
  }

  process.exit();
})();

export function getVar(name: string, fallback?: string): string {
  const value = process.env[name];
  if (!value) {
    if (!fallback) {
      throw new Error(`env var ${name} missing`);
    }
    return fallback;
  }
  return value;
}
