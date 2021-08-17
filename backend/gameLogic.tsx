
//global vars
let io
let gameSocket
// gamesInSession stores an array of all active socket connections
let gamesInSession = []

// when I was learning sokcet.io, I think the difference between io and gameSocket here is confusing enough
// this link has very clear explainations https://stackoverflow.com/questions/32674391/io-emit-vs-socket-emit

const initializeGame = (sio, socket) => {
    /**
     * initializeGame sets up all the event listeners
     */

    io = sio
    gameSocket = socket

     // pushes this socket to an array which stores all the active sockets.
     gamesInSession.push(gameSocket)

     // Run code when the client disconnects from their socket session. 
     //gameSocket.on("disconnect", onDisconnect)
 
     // Sends new move to the other socket session in the same room. 
     //gameSocket.on("new move", newMove)
 
     // User creates new game room after clicking 'submit' on the frontend
     gameSocket.on("createNewGame", createNewGame)
 
     // User joins gameRoom after going to a URL with '/game/:gameId' 
    // gameSocket.on("playerJoinGame", playerJoinsGame)
 
     //gameSocket.on('request username', requestUserName)
 
     //gameSocket.on('recieved userName', recievedUserName)
    
}

const createNewGame = (gameId) => {
    // Return the Room ID (gameId) and the socket ID (mySocketId) to the browser client
    gameSocket.emit('createNewGame', {gameId: gameId, mySocketId: gameSocket});
    // Join the Room and wait for the other player
    gameSocket.join(gameId)
}


export default initializeGame