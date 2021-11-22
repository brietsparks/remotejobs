import { createContainer } from './container';

(async function main() {
  const container = createContainer();
  container.server.listen(3001, () => 'listening')
})();
