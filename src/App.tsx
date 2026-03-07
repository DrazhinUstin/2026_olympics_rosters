import './App.css';
import AddTeamButton from './components/add-team-button';
import TeamList from './components/team-list';
import TeamsProvider from './teams-provider';

export default function App() {
  return (
    <TeamsProvider>
      <main className='main-container'>
        <TeamList />
        <AddTeamButton />
      </main>
    </TeamsProvider>
  );
}
