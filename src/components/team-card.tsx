import { teams as teamsData } from '../lib/data';
import type { TeamsContextType } from '../teams-context';
import RemoveTeamButton from './remove-team-button';
import SortableTable from './sortable-table';
import styles from './team-card.module.css';

export default function TeamCard({ team }: { team: TeamsContextType['selectedTeams'][0] }) {
  const teamData = teamsData[team.name];
  return (
    <article className={styles.card}>
      <header>
        <h3>{team.name}</h3>
        <RemoveTeamButton teamId={team.id} />
      </header>
      <SortableTable data={teamData.forwards} caption='Forwards' />
      <SortableTable data={teamData.defensemen} caption='Defensemen' />
      <SortableTable data={teamData.goalies} caption='Goalies' />
    </article>
  );
}
