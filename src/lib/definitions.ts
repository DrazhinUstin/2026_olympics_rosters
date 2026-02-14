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
  time_on_ice_per_game_played: string;
}

export interface Forward extends Defenseman {
  position: 'L' | 'R' | 'C';
}

export interface Goalie extends Player {
  wins: number;
  losses: number;
  overtime_losses: number;
  save_percentage: number;
  goals_against_average: number;
  time_on_ice: string;
}
