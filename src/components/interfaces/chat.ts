import ChatType from "./index";

interface RoomType {
  roomid: number;
  id: string;
  name: string;
  image: string;
  lastdate: Date | null;
  lastmessage: string | null;
  isread: boolean;
  status: "U" | "C" | "H1" | "H2" | "H3" | "H4";
  index: number;
}

export interface RoomList {
  club_section: string[] | string;
  rooms: RoomType[];
}

export interface Chattings {
  roomid: number;
  Chattings: ChatType[];
}
