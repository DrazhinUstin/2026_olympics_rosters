import { useState } from 'react';
import { teams as teamsData } from '../lib/data';
import { useTeamsContext } from '../teams-context';
import styles from './add-team-button.module.css';
import { PlusIcon } from 'lucide-react';

const teams = Object.keys(teamsData);

export default function AddTeamButton() {
  const [selectedTeam, setSelectedTeam] = useState('');

  const { addTeam } = useTeamsContext();

  const handleClick = () => {
    addTeam(selectedTeam);
  };

  return (
    <div className={styles.container}>
      <select
        className='select'
        value={selectedTeam}
        onChange={(e) => setSelectedTeam(e.target.value)}
      >
        <option value='' disabled hidden>
          Select team
        </option>
        {teams.map((team) => (
          <option key={team} value={team}>
            {team}
          </option>
        ))}
      </select>
      <button type='button' className='btn' onClick={handleClick}>
        <PlusIcon size={16} />
        Add team
      </button>
    </div>
  );
}
