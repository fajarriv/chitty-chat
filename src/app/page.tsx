"use client";

import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");

  console.log(username, roomId);


  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-20">
      <h3 className="text-4xl font-bold">Welcome to Chitty Chat</h3>

      <div className="flex flex-col w-fit  p-3 space-y-2 mt-20">
        <h2 className="text-start">Enter your username</h2>

        <input
          type="text"
          className="bg-black border border-white border-1 rounded-md text-white p-1.5"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="flex flex-col w-fit p-3 space-y-2">
        <h2 className="text-start">Enter your room id</h2>

        <input
          type="text"
          className="bg-black border border-white border-1 rounded-md text-white p-1.5"
          placeholder="room id"
          onChange={(e) => setRoomId(e.target.value)}
        />
      </div>
      <button className="hover:bg-gray-900 border border-white border-1 rounded-md text-white p-1.5 mt-5">
        Join Room
      </button>
    </main>
  );
}
