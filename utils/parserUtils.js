module.exports = {
  parsePaginationAndConditionVariables: (object) => {
    if (Object.keys(object).length === 0) return null;
    let newObject = { where: {} };
    for (const [key, value] of Object.entries(object)) {
      if (key === "limit" || key === "offset") newObject[key] = parseInt(value);
      else newObject.where[key] = value;
    }
    if (Object.keys(newObject.where).length === 0) delete newObject.where;
    return newObject;
  },
};
