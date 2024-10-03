import React, { useState, useEffect } from 'react';

const MessageBar = () => {
  const messages = [
    "<Share your thoughts!>",
    "<You can use emoji now 😊>",
    "<Edit or delete anytime>",
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prevMessage) => (prevMessage + 1) % messages.length);
    }, 5000); // Change message every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [messages.length]);

  return (
    <div className="w-full bg-[#eff3ff] text-center py-2">
      <p className="text-[#888a90]">{messages[currentMessage]}</p>
    </div>
  );
};

export default MessageBar;
