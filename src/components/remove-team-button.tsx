import { useTeamsContext } from '../teams-context';
import styles from './remove-team-button.module.css';

export default function RemoveTeamButton({ teamId }: { teamId: number }) {
  const { removeTeam } = useTeamsContext();

  const handleClick = () => {
    removeTeam(teamId);
  };

  return (
    <button type='button' title='Remove team' className={styles.button} onClick={handleClick}>
      X
    </button>
  );
}
