import { XIcon } from 'lucide-react';
import { useTeamsContext } from '../teams-context';
import styles from './remove-team-button.module.css';

export default function RemoveTeamButton({ teamId }: { teamId: number }) {
  const { removeTeam } = useTeamsContext();

  const handleClick = () => {
    removeTeam(teamId);
  };

  return (
    <button
      type='button'
      title='Remove team'
      className={`btn-destructive ${styles.button}`}
      onClick={handleClick}
    >
      <XIcon size={16} />
    </button>
  );
}
