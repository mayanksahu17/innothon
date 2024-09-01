"use client";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

// Define the message interface
interface IMessage {
  message: string;
  username: string;
  avatarUrl: string;
}

// Define the context interface
interface ISocketContext {
  sendMessage: (msg: IMessage) => void;
  messages: IMessage[];
}

// Define the SocketProviderProps interface
interface SocketProviderProps {
  children?: React.ReactNode;
}

// Create the SocketContext
const SocketContext = React.createContext<ISocketContext | null>(null);

// Custom hook to use the SocketContext
export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) throw new Error("useSocket must be used within a SocketProvider");
  return context;
};

// SocketProvider component
export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<IMessage[]>([]);

  // Function to send a message
  const sendMessage = useCallback<ISocketContext["sendMessage"]>(
    (msg) => {
      if (socket) {
        console.log("Sending message:", msg);
        socket.emit("event:message", msg);
      }
    },
    [socket]
  );

  // Function to handle incoming messages
  const onMessageReceived = useCallback((msg: string | IMessage) => {
    console.log("Message received from server:", msg);
    
    let messageData: IMessage;
    
    // Check if msg is already an object
    if (typeof msg === "string") {
        try {
            messageData = JSON.parse(msg) as IMessage;
        } catch (error) {
            console.error("Failed to parse message:", msg);
            return; // Exit early if parsing fails
        }
    } else {
        // If msg is already an object, assign it directly
        messageData = msg;
    }
    
    setMessages((prev) => [...prev, messageData]);
}, []);

  // Initialize the socket connection
  useEffect(() => {
    const _socket = io("https://websocket-server-jc7m.onrender.com");
    _socket.on("message", onMessageReceived);

    setSocket(_socket);

    // Clean up the socket connection on component unmount
    return () => {
      _socket.off("message", onMessageReceived);
      _socket.disconnect();
      setSocket(null);
    };
  }, [onMessageReceived]);

  return (
    <SocketContext.Provider value={{ sendMessage, messages }}>
      {children}
    </SocketContext.Provider>
  );
};
