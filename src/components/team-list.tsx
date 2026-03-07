import { useTeamsContext } from '../teams-context';
import TeamCard from './team-card';
import styles from './team-list.module.css';

export default function TeamList() {
  const { selectedTeams } = useTeamsContext();
  return (
    <div className={styles.list}>
      {selectedTeams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  );
}
