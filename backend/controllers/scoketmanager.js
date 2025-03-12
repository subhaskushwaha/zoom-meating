import { Server } from "socket.io";

 export const connectToSocket = (Server) => {
    const io = new Server(Server);

    return io;
}

