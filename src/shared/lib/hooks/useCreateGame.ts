import axios from "axios";

interface ICreateGameProps {
  gameType: "urban" | "bunker" | "classic";
  roomName: string;
  playersQuantity: number;
}

export async function createRoom(roomData: ICreateGameProps) {
  try {
    const response = await axios.post(
      "https://showtime.up.railway.app/api/rooms/create-room"
    );
  } catch (error: any) {
    console.error(
      "Failde to create room:",
      error.response ? error.response.data : error
    );
    return error.response.data.meessage;
  }
}
