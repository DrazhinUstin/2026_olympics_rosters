import './App.css';
import AddTeamButton from './components/add-team-button';
import TeamList from './components/team-list';
import TeamsProvider from './teams-provider';
import olympicLogo from './assets/Milano-Cortina-2026.svg';

export default function App() {
  return (
    <TeamsProvider>
      <main className='main-container'>
        <img src={olympicLogo} alt='Milano Cortina 2026 Logo' className='main-logo' />
        <TeamList />
        <AddTeamButton />
      </main>
    </TeamsProvider>
  );
}
