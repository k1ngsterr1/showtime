// useGetRooms.js
import axios from "axios";
import { useState, useEffect } from "react";

export function useGetRooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchRooms = async () => {
      try {
        const response = await axios.get(
          "https://showtime.up.railway.app/api/rooms/get-rooms"
        );
        if (isMounted) {
          setRooms(response.data.rooms); // Adjust according to actual response structure
        }
      } catch (error) {
        console.error("There was an error fetching the rooms:", error);
      }
    };

    fetchRooms();

    const intervalId = setInterval(fetchRooms, 3000);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, []);

  return rooms;
}
