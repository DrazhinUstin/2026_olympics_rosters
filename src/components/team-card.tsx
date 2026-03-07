import { teams as teamsData } from '../lib/data';
import type { TeamsContextType } from '../teams-context';
import RemoveTeamButton from './remove-team-button';
import SortableTable from './sortable-table';

export default function TeamCard({ team }: { team: TeamsContextType['selectedTeams'][0] }) {
  const teamData = teamsData[team.name];
  return (
    <div>
      <div>
        <h2>{team.name}</h2>
        <RemoveTeamButton teamId={team.id} />
      </div>
      <SortableTable data={teamData.forwards} caption='Forwards' />
      <SortableTable data={teamData.defensemen} caption='Defensemen' />
      <SortableTable data={teamData.goalies} caption='Goalies' />
    </div>
  );
}
