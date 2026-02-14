export function sortObjects({
  array,
  propertyName,
  order,
}: {
  array: Array<{ [propertyName: string]: string | number }>;
  propertyName: string;
  order: 'asc' | 'desc';
}) {
  return [...array].sort((a, b) => {
    if (a[propertyName] > b[propertyName]) {
      return order === 'asc' ? 1 : -1;
    }

    if (a[propertyName] < b[propertyName]) {
      return order === 'asc' ? -1 : 1;
    }

    return 0;
  });
}
