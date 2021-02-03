export const updateObjectInArray = (
  items,
  objPropName,
  actionName,
  newObjProps
) => {
  return items.map((item) => {
    if (item[objPropName] === actionName) {
      return { ...item, ...newObjProps };
    }
    return item;
  });
};
