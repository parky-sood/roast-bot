"use client";

import SoundAnimation from "./soundAnimation";
import ChatBot from "./chatBot";
import { useState } from "react";

export default function Prompt() {
  const [listening, setListening] = useState(true);

   return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 bg-transparent min-h-screen">
      <div className="flex flex-row justify-center gap-3">
       <SoundAnimation />
      </div>
      {listening && (
               <h1 className="text-5xl font-bold text-center text-white">Dare to say something!</h1>
      )}
      <div className="w-full max-w-3xl">
       <ChatBot
         onFirstMessage={() => {
            setListening(false);
          }}
      />
    </div>
   </div>
 );
}
