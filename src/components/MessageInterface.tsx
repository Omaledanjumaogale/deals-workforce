import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Send, Paperclip, MoreVertical } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "client";
  content: string;
  timestamp: Date;
}

const MessageInterface = () => {
  const [searchParams] = useSearchParams();
  const bidId = searchParams.get("bidId");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "client",
      content:
        "Hello! I've accepted your bid for the website development task.",
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: "2",
      sender: "client",
      content: "When can you start working on it?",
      timestamp: new Date(Date.now() - 3500000),
    },
    {
      id: "3",
      sender: "user",
      content:
        "Hi! Thank you for accepting my bid. I can start working on it right away.",
      timestamp: new Date(Date.now() - 3000000),
    },
    {
      id: "4",
      sender: "user",
      content:
        "I'll prepare a project timeline and share it with you by tomorrow.",
      timestamp: new Date(Date.now() - 2900000),
    },
    {
      id: "5",
      sender: "client",
      content: "That sounds great! Looking forward to it.",
      timestamp: new Date(Date.now() - 2800000),
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const message: Message = {
      id: Date.now().toString(),
      sender: "user",
      content: newMessage,
      timestamp: new Date(),
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="bg-white min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="h-[80vh] flex flex-col">
          <CardHeader className="border-b">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=john" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>John Adebayo</CardTitle>
                  <CardDescription>Website Development Project</CardDescription>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${message.sender === "user" ? "bg-green-100 text-gray-800" : "bg-gray-100 text-gray-800"}`}
                >
                  <p>{message.content}</p>
                  <p className="text-xs text-gray-500 mt-1 text-right">
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>

          <CardFooter className="border-t p-3">
            <div className="flex w-full items-center gap-2">
              <Button variant="ghost" size="icon">
                <Paperclip className="h-5 w-5" />
              </Button>
              <Input
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
                className="flex-grow"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-green-600 hover:bg-green-700"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default MessageInterface;
