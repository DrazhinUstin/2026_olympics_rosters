import { useTeamsContext } from '../teams-context';
import TeamCard from './team-card';
import styles from './team-list.module.css';

export default function TeamList() {
  const { selectedTeams } = useTeamsContext();

  if (!selectedTeams.length) {
    return null;
  }

  return (
    <div className={styles.list}>
      {selectedTeams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  );
}
