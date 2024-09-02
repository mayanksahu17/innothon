"use client";
import React, { useState, useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useSocket } from "@/context/SocketProvider";

// Mock function to simulate fetching user data (replace this with your actual logic)
const getUserData = () => ({
  username: "John Doe", // Replace with logic to fetch actual user's name
  avatarUrl: "", // Replace with logic to fetch actual user's avatar URL
});

export default function ChatComponent() {
  const { sendMessage, messages } = useSocket();
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState({ username : "John", avatarUrl: "" });

  useEffect(() => {
    // Fetch user data once when the component mounts
    // localStorage.setItem("name","mayank")

    // const data = getUserData();
    // setUserData(data);
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      sendMessage({
        message,
        username: userData.username,
        avatarUrl: userData.avatarUrl,
      });
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-[#87ceeb] text-primary-foreground py-4 px-6 shadow">
        <h1 className="text-2xl font-bold">Onboarding</h1>
      </header>
      <div className="flex-1 overflow-auto p-6">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 ${
                msg.username === userData.username ? "justify-end" : "justify-start"
              }`}
            >
              {msg.username !== userData.username && (
                <Avatar className="w-8 h-8 border">
                  <AvatarImage
                    src={msg.avatarUrl || "/placeholder-user.jpg"}
                    alt={msg.username}
                  />
                  <AvatarFallback>{msg.username.charAt(0)}</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`rounded-lg p-4 max-w-[75%] ${
                  msg.username === userData.username
                    ? "bg-[#87ceeb] text-primary-foreground"
                    : "bg-[#f0f8ff]"
                }`}
              >
                <p>{msg.message}</p>
                <div
                  className={`text-xs mt-1 ${
                    msg.username === userData.username
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {/* {msg.username} */}
                </div>
              </div>
              {msg.username === userData.username && (
                <Avatar className="w-8 h-8 border">
                  <AvatarImage
                    src={msg.avatarUrl || "/placeholder-user.jpg"}
                    alt={msg.username}
                  />
                  <AvatarFallback>{msg.username.charAt(0)}</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#f0f8ff] border-t px-6 py-4 flex items-center gap-2">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 rounded-lg border border-input p-2"
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </div>
    </div>
  );
}
