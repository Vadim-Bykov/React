export const updateObjectInArray = (
  items: any,
  objPropName: any,
  actionName: any,
  newObjProps: any
) => {
  return items.map((item: any) => {
    if (item[objPropName] === actionName) {
      return { ...item, ...newObjProps };
    }
    return item;
  });
};
