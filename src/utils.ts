export function noop() {}

export function* identifierGenerator(): Generator<number> {
  let count = 0;
  while (true) {
    count++;
    yield count;
  }
}

export const componentIdGenerator = identifierGenerator();

const entityIdGenerator = identifierGenerator();

export function generateEntityId(): number {
  return entityIdGenerator.next().value;
}
