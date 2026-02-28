import { useState } from 'react';
import { TeamsContext, type TeamsContextType } from './teams-context';

export default function TeamsProvider({ children }: { children: React.ReactNode }) {
  const [selectedTeams, setSelectedTeams] = useState<TeamsContextType['selectedTeams']>([]);

  const addTeam: TeamsContextType['addTeam'] = (name: string) => {
    setSelectedTeams((prev) => [...prev, { id: Date.now(), name }]);
  };

  const removeTeam: TeamsContextType['removeTeam'] = (id: number) => {
    setSelectedTeams((prev) => prev.filter((team) => team.id !== id));
  };

  return <TeamsContext value={{ selectedTeams, addTeam, removeTeam }}>{children}</TeamsContext>;
}
