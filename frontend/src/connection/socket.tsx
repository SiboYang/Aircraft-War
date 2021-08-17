import io from "socket.io-client";

const URL = "http://localhost";
const socket = io(URL);

let mySocketId;

socket.on("createNewGame", (newStatus) => {
  console.log(`A new game has been created!\nGame id: ${newStatus.gameId}\nUser id: ${newStatus.userId}\n
    Socket id: ${newStatus.socketId}`);

    mySocketId = newStatus.socketId
});

export {
    socket, mySocketId
}