//********** Imports **********/
import { sql } from "./dbConfig";

//********** Types **********//
export interface Race {
  id: string;
  name: string;
  description?: string;
  color: string;
}

//********** Model **********//
export const racesModel = {
  getAll: async function getallRaces() {
    const races = await sql`select * from race`;
    return races;
  },

  getById: async function getRaceById(raceId: string) {
    const race = await sql`select * from race where id =${raceId}`;
    return race;
  },

  create: async function addRace(race: Race) {
    const id = race.id;
    const name = race.name;
    const description = race?.description ?? "";
    const color = race.color;
    const newRace =
      await sql`insert into race (id, name, description, color) values (${id}, ${name}, ${description}, ${color}) returning id, name, description, color`;
    return newRace;
  },

  delete: async function deleteRace(raceId: string) {
    const deletedId =
      await sql`delete from race where id = ${raceId} returning id as deletedId`;
    return deletedId[0];
  },

  update: async function updateRace(updatedRace: Race) {
    const updatedRaceResult = await sql`update race set color=${
      updatedRace.color
    }, name=${updatedRace.name}, description=${
      updatedRace.description ?? ""
    } where id=${updatedRace.id} returning id, name, description, color`;
    return { updatedRace: updatedRaceResult };
  },
};
