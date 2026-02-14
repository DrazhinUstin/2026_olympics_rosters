import { useState } from 'react';
import type { Defenseman, Forward, Goalie } from '../lib/definitions';
import { sortObjects } from '../lib/utils';

export default function SortableTable({
  data,
  caption,
}: {
  data: Forward[] | Defenseman[] | Goalie[];
  caption: string;
}) {
  const [sort, setSort] = useState<{ propertyName: string; order: 'asc' | 'desc' } | null>(null);

  if (!data.length) {
    return null;
  }

  const sortedData = sort
    ? sortObjects({
        array: data as unknown as Parameters<typeof sortObjects>[0]['array'],
        propertyName: sort.propertyName,
        order: sort.order,
      })
    : data;

  return (
    <table>
      <caption>{caption}</caption>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th
              key={key}
              onClick={() =>
                setSort({
                  propertyName: key,
                  order:
                    sort?.propertyName === key ? (sort.order === 'desc' ? 'asc' : 'desc') : 'desc',
                })
              }
            >
              {key}
              {sort && <span>{sort.order === 'desc' ? '▼' : '▲'}</span>}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item) => (
          <tr key={item.number}>
            {Object.values(item).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
