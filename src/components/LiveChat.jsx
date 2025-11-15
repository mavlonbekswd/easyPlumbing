import { useState, useEffect, useRef } from 'react';
import { FaPaperclip, FaMicrophone, FaSmile, FaPaperPlane, FaTimes, FaUser, FaRobot } from 'react-icons/fa';

const initialMessages = [
  {
    id: 1,
    sender: 'bot',
    message: 'Hello! How can I help you today?',
    timestamp: new Date(Date.now() - 60000),
  },
];

export default function LiveChat() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      message: newMessage,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        sender: 'bot',
        message: 'Thank you for your message. Our support team will get back to you shortly.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
  onClick={() => setIsOpen(true)}
  className="fixed bottom-6 left-6 bg-accent z-[99999] text-white p-4 rounded-full shadow-lg hover:bg-dark transition-colors flex items-center gap-2"
  aria-label="Open live chat"
>
  <FaUser className="text-xl " />
  <span className="hidden sm:inline">Chat Support</span>
</button>


      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 w-80 h-[500px] bg-white rounded-xl shadow-xl z-52 overflow-hidden flex flex-col">
          {/* Chat Header */}
          <div className="bg-accent text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FaUser className="text-xl" />
              <div>
                <h3 className="font-bold">Live Chat Support</h3>
                <p className="text-xs opacity-80">We're here to help!</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <FaTimes />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.sender === 'user'
                      ? 'bg-accent text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {msg.sender === 'bot' ? (
                      <FaRobot className="text-accent" />
                    ) : (
                      <FaUser className="text-white/80" />
                    )}
                    <span className="text-xs opacity-80">
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                  <p>{msg.message}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <FaRobot className="text-accent" />
                    <span className="text-xs opacity-80">Typing...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="text-gray-500 hover:text-accent"
                aria-label="Attach file"
              >
                <FaPaperclip />
              </button>
              <button
                type="button"
                className="text-gray-500 hover:text-accent"
                aria-label="Voice message"
              >
                <FaMicrophone />
              </button>
              <button
                type="button"
                className="text-gray-500 hover:text-accent"
                aria-label="Emoji picker"
              >
                <FaSmile />
              </button>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="text-accent hover:text-dark"
                aria-label="Send message"
              >
                <FaPaperPlane />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}