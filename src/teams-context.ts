import { createContext, useContext } from 'react';

export interface TeamsContextType {
  selectedTeams: Array<{ id: number; name: string }>;
  addTeam: (name: string) => void;
  removeTeam: (id: number) => void;
}

export const TeamsContext = createContext<TeamsContextType | null>(null);

export const useTeamsContext = () => {
  const context = useContext(TeamsContext);

  if (!context) {
    throw new Error('useTeamsContext must be used within a TeamsProvider');
  }

  return context;
};
