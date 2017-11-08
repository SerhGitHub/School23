export function cloneObject(object) {
  if (object) {
    return JSON.parse(JSON.stringify(object));
  } else {
    return null;
  }
}

export function buildEntityById(entity, id) {
  return `${entity}${id}`;
}
