import { useState } from 'react';
import { flags, teams as teamsData } from '../lib/data';
import type { Team } from '../lib/definitions';
import type { TeamsContextType } from '../teams-context';
import RemoveTeamButton from './remove-team-button';
import SortableTable from './sortable-table';
import styles from './team-card.module.css';

const positions: Record<keyof Team, string> = {
  forwards: 'Forwards',
  defensemen: 'Defensemen',
  goalies: 'Goalies',
};

export default function TeamCard({ team }: { team: TeamsContextType['selectedTeams'][0] }) {
  const teamData = teamsData[team.name];

  const [selectedPositions, setSelectedPositions] = useState<Array<keyof Team>>(
    Object.keys(positions) as Array<keyof Team>,
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPositions(
      (e.target.value === 'all' ? Object.keys(positions) : [e.target.value]) as Array<keyof Team>,
    );
  };

  return (
    <article className={styles.card}>
      <header>
        <img src={flags[team.name]} alt='team flag' />
        <h3>{team.name}</h3>
        <RemoveTeamButton teamId={team.id} />
      </header>
      <div>
        <select className='select' onChange={handleChange}>
          {['all', ...Object.keys(positions)].map((pos) => (
            <option key={pos} value={pos}>
              {positions[pos as keyof Team] ?? 'All positions'}
            </option>
          ))}
        </select>
      </div>
      {selectedPositions.map((position) => (
        <SortableTable key={position} data={teamData[position]} caption={positions[position]} />
      ))}
    </article>
  );
}
