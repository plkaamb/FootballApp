export type PlayerEntity = {
  id: string;
  name: string;
  surname: string;
  relation: number;
};
export type PlayerDto = Omit<PlayerEntity, "id">;

export type PlayerAddEntity = {
  id: string;
  relation: number;
};
export type PlayerAddEntityDto = Omit<PlayerAddEntity, "id">;

export type TeamEntity = {
  id: string;
  nameTeams: string;
  year: number;
  location: string;
  teamPlayers: number;
  playerSelect: string;
};

export type TeamEntityDto = Omit<TeamEntity, "id">;

// Definicja typu dla zespołu (team)
export type Team = {
  id: string;
  nameTeams: string;
  year: number;
  location: string;
  teamPlayers: number;
  players: PlayerInfo[]; // opcjonalna lista graczy
};

// Typ dla gracza przypisanego do zespołu
export type PlayerInfo = {
  name: string;
  surname: string;
};

export type PlayerTest = {
  id: string;
  name: string;
  surname: string;
};

/////typowanie GameList///

export type GameListEntity = {
  id: string;
  gameDate: string;
  titleOfTheGame: string;
  placeOfGame: string;
  timeOfDuration: number;
  resultA: number;
  relationsGamesA: number;
  resultB: number;
  relationsGamesB: number;
};

export type GameListDto = Omit<GameListEntity, "id">;
