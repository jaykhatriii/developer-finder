import { db } from "@/db";
import { unstable_noStore } from "next/cache";


export const getRooms = async () => {
  unstable_noStore();
  const rooms = await db.query.room.findMany()
  return rooms;
}