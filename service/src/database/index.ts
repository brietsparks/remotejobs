export * from './tables';

export function getMigrationsDirectory() {
  return `${__dirname}/migrations`;
}
