import { useTeamsContext } from '../teams-context';

export default function RemoveTeamButton({ teamId }: { teamId: number }) {
  const { removeTeam } = useTeamsContext();

  const handleClick = () => {
    removeTeam(teamId);
  };

  return (
    <button type='button' onClick={handleClick}>
      Remove team
    </button>
  );
}
