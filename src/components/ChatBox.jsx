import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi! Welcome to Mobile Accessories Store. How can I help you?",
    },
  ]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const botReplies = {
    order: "You can track your order from My Orders section 📦",
    refund: "Refunds are processed within 5-7 business days 💰",
    delivery: "Delivery usually takes 3-5 working days 🚚",
    products: "We offer chargers, earphones, covers, powerbanks and more 🔥",
    contact: "You can contact us at support@mobileaccessories.com 📞",
  };

  const getBotReply = (userMsg) => {
    const lowerMsg = userMsg.toLowerCase();

    if (lowerMsg.includes("order")) return botReplies.order;
    if (lowerMsg.includes("refund")) return botReplies.refund;
    if (lowerMsg.includes("delivery")) return botReplies.delivery;
    if (lowerMsg.includes("product")) return botReplies.products;
    if (lowerMsg.includes("contact")) return botReplies.contact;

    return "Sorry, I didn't understand. Please ask about order, refund, delivery, products or contact 😊";
  };

  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    const userText = message;
    setMessage("");

    setTimeout(() => {
      const botMessage = {
        sender: "bot",
        text: getBotReply(userText),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 700);
  };

  return (
    <div className="absolute bottom-16 right-5 md:bottom-5 z-20">
      {/* Floating Button */}
      {/* Floating Button */}
{/* Floating Button */}
{/* Floating Button */}
{!isOpen && (
  <button
    onClick={() => setIsOpen(true)}
    className="
      bg-gradient-to-r
      from-orange-500
      via-pink-500
      to-red-500
      text-white
      p-4
      rounded-full
      shadow-lg
      transition-all duration-300
      flex items-center justify-center
      relative
      animate-pulse
      hover:shadow-[0_0_25px_rgba(255,99,71,0.8)]
    "
  >
    {/* Bot Icon */}
    <Bot size={24} />

    {/* Notification Badge */}
    <div
      className="
        absolute
        -top-1
        -right-1
        bg-yellow-300
        text-black
        rounded-full
        p-1
        shadow-md
      "
    >
      <MessageCircle size={12} />
    </div>
  </button>
)}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-[450px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h2 className="font-semibold">Customer Support</h2>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 bg-gray-100 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-xl max-w-[75%] ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef}></div>
          </div>

          {/* Input */}
          <div className="p-3 border-t flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1 border rounded-lg px-3 py-2 outline-none"
            />

            <button
              onClick={handleSend}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
