import { useState } from 'react';
import { abbreviations, type Defenseman, type Forward, type Goalie } from '../lib/definitions';
import { sortObjects } from '../lib/utils';
import styles from './sortable-table.module.css';

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
    <table className={styles.table}>
      <caption>{caption}</caption>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th
              key={key}
              title={key}
              className={key === sort?.propertyName ? styles.active : undefined}
              onClick={() =>
                setSort({
                  propertyName: key,
                  order:
                    sort?.propertyName === key ? (sort.order === 'desc' ? 'asc' : 'desc') : 'desc',
                })
              }
            >
              {abbreviations[key as keyof typeof abbreviations]}
              {sort?.propertyName === key && <span>{sort.order === 'desc' ? '▼' : '▲'}</span>}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item) => (
          <tr key={item.number}>
            {Object.entries(item).map(([key, value]) => (
              <td key={key} className={key === sort?.propertyName ? styles.active : undefined}>
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
