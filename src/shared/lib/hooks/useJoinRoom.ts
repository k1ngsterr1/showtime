import axios from "axios";

export async function useJoinRoom(roomId: number, userId: number) {
  try {
    const response = await axios.post(`${roomId}/users/${userId}/add`);
  } catch (error) {}
}
