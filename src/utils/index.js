export const getDataObjectFromArray = (data) => data.reduce((result, item) => {
  result[item.id] = item

  return result
}, {})
