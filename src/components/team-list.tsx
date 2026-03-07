import { useTeamsContext } from '../teams-context';
import TeamCard from './team-card';

export default function TeamList() {
  const { selectedTeams } = useTeamsContext();
  return (
    <div>
      {selectedTeams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  );
}
