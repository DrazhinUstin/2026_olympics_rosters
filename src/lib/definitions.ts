export interface Player {
  number: number;
  name: string;
  league: string;
  team: string;
  born: string;
  height: number;
  weight: number;
  games_played: number;
}

export interface Defenseman extends Player {
  shoots: 'L' | 'R';
  goals: number;
  assists: number;
  points: number;
  plus_minus: string;
  time_on_ice_per_game_played: string;
}

export interface Forward extends Defenseman {
  position: 'LW' | 'RW' | 'C';
}

export interface Goalie extends Player {
  wins: number;
  losses: number;
  overtime_losses: number;
  save_percentage: number;
  goals_against_average: number;
  time_on_ice: string;
}

export interface Team {
  forwards: Forward[];
  defensemen: Defenseman[];
  goalies: Goalie[];
}

export type Abbreviations = Record<keyof Forward | keyof Defenseman | keyof Goalie, string>;

export const abbreviations: Abbreviations = {
  number: '№',
  name: 'Name',
  league: 'League',
  team: 'Team',
  born: 'Born',
  height: 'HT',
  weight: 'WT',
  games_played: 'GP',
  shoots: 'S',
  goals: 'G',
  assists: 'A',
  points: 'P',
  plus_minus: '+/-',
  time_on_ice_per_game_played: 'TOI/GP',
  position: 'Pos',
  wins: 'W',
  losses: 'L',
  overtime_losses: 'OT',
  save_percentage: 'SV%',
  goals_against_average: 'GAA',
  time_on_ice: 'TOI',
};
