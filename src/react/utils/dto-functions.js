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

export function getCurrentObjects(data, id, DATA_SYSTEM_ID_FIELD){
  let objects = [];
  if (data && data.length > 0) {
    data.forEach((item) => {
      if(item[DATA_SYSTEM_ID_FIELD] == id) {
        objects.push(item);
      }
    });
  }
  return objects;
}
