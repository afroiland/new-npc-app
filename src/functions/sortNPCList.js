export function sortNPCList(list, sortBy) {
  let tempList = list.sort(compare);
  return tempList;

  function compare(b, a) {
    const sortElementA = a[sortBy];
    const sortElementB = b[sortBy];
    let comparison = 0;
    if (sortElementA > sortElementB) {
      comparison = 1;
    } else if (sortElementA < sortElementB) {
      comparison = -1;
    }
    return comparison;
  }
}
