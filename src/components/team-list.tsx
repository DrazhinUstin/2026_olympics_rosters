import { useSettingsContext } from '../settings-context';
import { useTeamsContext } from '../teams-context';
import TeamCard from './team-card';
import styles from './team-list.module.css';

export default function TeamList() {
  const { options } = useSettingsContext();

  const { selectedTeams } = useTeamsContext();

  if (!selectedTeams.length) {
    return null;
  }

  return (
    <div className={options.displayTables === 'list' ? styles.list : styles.grid}>
      {selectedTeams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  );
}
