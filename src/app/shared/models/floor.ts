import Area from "./area";
import Building from "./building";

export default class Floor {
  id: number;
  name: string;
  no: string;
  areas: Area[];
  building: Building;
}
