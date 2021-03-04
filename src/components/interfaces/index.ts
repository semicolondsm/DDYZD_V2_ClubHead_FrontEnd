export interface ChatData {
  created_at: Date;
  date?: Date;
  msg: string;
  title: string | null;
  user_type: "U" | "C" | "H1" | "H2" | "H3" | "H4";
}
