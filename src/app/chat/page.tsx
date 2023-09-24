"use client"
import { useState } from "react";

import { ChatCard } from "@/components";



const ChatPage = ({params}) => {

  

  console.log('params: ',params);
  const [messages, setMessages] = useState([
    { id: 1, userName: 'John Doe', message: 'Hello! How can I help you?' },
    { id: 2, userName: 'John Doe', message: 'Sure, I can assist you with that.' },
    { id: 3, userName: 'John Doe', message: 'Please let me know your question.' },
    // Add more messages here as needed
  ]);

  return (
    <div className="flex justify-center min-h-screen bg-gray-100 ">
      <div className="w-96 max-w-6xl">
        {/* Chat window */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          {messages.map((message) => (
            <ChatCard
              key={message.id}
              userName={message.userName}
              userIcon={<img src="user-icon.png" alt="User Icon" className="w-full h-full object-cover" />}
              message={message.message}
            />
          ))}
        </div>

        {/* Input field for sending new messages */}
        <div className="flex items-center bg-white rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 focus:outline-none"
          />
          <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none">
            Send
          </button>
        </div>
      </div>
    </div>
  );


    // <div>
    //   <PrimaryHeader name="Jimmy Falon" />
    //   <div className="items-center min-h-screen bg-gray-100">
    //   <ChatCard />
    //   </div>
    // </div>
  // )
}

export default ChatPage;