import { useState } from 'react';
import './Chatbot.css'; 

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    setMessages((prevMessages) => [...prevMessages, { text: input, from: 'user' }]);
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: `Bot response to: ${input}`, from: 'bot' },
      ]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="chatbot-fullcontainer">
    <div className="chatbot-container">
      <div className="chatbot-header">Chatbot</div>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.from}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        placeholder="Type a message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
    </div>
    </div>
  );
};

export default Chatbot;