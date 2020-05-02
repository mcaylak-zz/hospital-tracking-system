import Floor from "./floor";
import User from "./user";

export default class Area{
  xcoordinate: number;
  ycoordinate: number;
  weight: number;
  height: number;
  capacity: number;
  type: string;
  no: string;
  floor: Floor;
  users: User;
}
