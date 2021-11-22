import { config as configureEnv } from 'dotenv';

import { createContainer } from './container';

(async function main() {
  configureEnv();
  const pgUrl = requireVar('PG_URL');

  const container = createContainer({
    pgUrl
  });

  const action = process.argv[2];
  if (action === 'serve') {
    container.server.listen(3001, () => 'listening')
  }

  if (action === 'db:up') {
    await container.db.migrate.up();
  }

  if (action === 'db:down') {
    await container.db.migrate.down();
  }

  process.exit();
})();

export function requireVar(name: string, fallback?: string): string {
  const value = process.env[name];
  if (!value) {
    if (!fallback) {
      throw new Error(`env var ${name} missing`);
    }
    return fallback;
  }
  return value;
}
