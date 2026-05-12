// import React, { useState, useRef, useEffect } from "react";
// import { MessageCircle, X, Send, Bot } from "lucide-react";
// const ChatBox = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([
//     {
//       sender: "bot",
//       text: "👋 Hi! Welcome to Mobile Accessories Store. How can I help you?",
//     },
//   ]);

//   const chatEndRef = useRef(null);

//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const botReplies = {
//     order: "You can track your order from My Orders section 📦",
//     refund: "Refunds are processed within 5-7 business days 💰",
//     delivery: "Delivery usually takes 3-5 working days 🚚",
//     products: "We offer chargers, earphones, covers, powerbanks and more 🔥",
//     contact: "You can contact us at support@mobileaccessories.com 📞",
//   };

//   const getBotReply = (userMsg) => {
//     const lowerMsg = userMsg.toLowerCase();

//     if (lowerMsg.includes("order")) return botReplies.order;
//     if (lowerMsg.includes("refund")) return botReplies.refund;
//     if (lowerMsg.includes("delivery")) return botReplies.delivery;
//     if (lowerMsg.includes("product")) return botReplies.products;
//     if (lowerMsg.includes("contact")) return botReplies.contact;

//     return "Sorry, I didn't understand. Please ask about order, refund, delivery, products or contact 😊";
//   };

//   const handleSend = () => {
//     if (!message.trim()) return;

//     const userMessage = {
//       sender: "user",
//       text: message,
//     };

//     setMessages((prev) => [...prev, userMessage]);

//     const userText = message;
//     setMessage("");

//     setTimeout(() => {
//       const botMessage = {
//         sender: "bot",
//         text: getBotReply(userText),
//       };

//       setMessages((prev) => [...prev, botMessage]);
//     }, 700);
//   };

//   return (
//     <div className="absolute bottom-16 right-5 md:bottom-5 z-20">
//       {/* Floating Button */}
//       {/* Floating Button */}
// {/* Floating Button */}
// {/* Floating Button */}
// {!isOpen && (
//   <button
//     onClick={() => setIsOpen(true)}
//     className="
//       bg-gradient-to-r
//       from-orange-500
//       via-pink-500
//       to-red-500
//       text-white
//       p-4
//       rounded-full
//       shadow-lg
//       transition-all duration-300
//       flex items-center justify-center
//       relative
//       animate-pulse
//       hover:shadow-[0_0_25px_rgba(255,99,71,0.8)]
//     "
//   >
//     {/* Bot Icon */}
//     <Bot size={24} />

//     {/* Notification Badge */}
//     <div
//       className="
//         absolute
//         -top-1
//         -right-1
//         bg-yellow-300
//         text-black
//         rounded-full
//         p-1
//         shadow-md
//       "
//     >
//       <MessageCircle size={12} />
//     </div>
//   </button>
// )}

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="w-80 h-[450px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border">
//           {/* Header */}
//           <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
//             <h2 className="font-semibold">Customer Support</h2>
//             <button onClick={() => setIsOpen(false)}>
//               <X size={20} />
//             </button>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto p-3 bg-gray-100 space-y-3">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex ${
//                   msg.sender === "user"
//                     ? "justify-end"
//                     : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`px-4 py-2 rounded-xl max-w-[75%] ${
//                     msg.sender === "user"
//                       ? "bg-blue-600 text-white"
//                       : "bg-white text-gray-800"
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
//             <div ref={chatEndRef}></div>
//           </div>

//           {/* Input */}
//           <div className="p-3 border-t flex items-center gap-2">
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSend()}
//               placeholder="Type your message..."
//               className="flex-1 border rounded-lg px-3 py-2 outline-none"
//             />

//             <button
//               onClick={handleSend}
//               className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
//             >
//               <Send size={18} />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatBox;




import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, Mic } from "lucide-react";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi! Welcome to Mobile Accessories Store. How can I help you?",
    },
  ]);

  const [typing, setTyping] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // 🎤 Voice Input
  const startVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice input not supported in your browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      setMessage(event.results[0][0].transcript);
    };

    recognition.start();
  };

  // 📌 FAQ
  const faqs = [
    "How to track my order?",
    "How to cancel order?",
    "Refund time?",
    "Return policy?",
  ];

  const quickActions = [
    { label: "Refund 💰", value: "refund" },
    { label: "Return 🔄", value: "return" },
    { label: "Order 📦", value: "order" },
    { label: "Issues ⚠️", value: "issue" },
  ];

  const botReplies = {
    order: "📦 Track your order from My Orders section.",
    refund: "💰 Refund takes 5–7 business days after approval.",
    return: "🔄 Return available within 24 hours of delivery.",
    issue: "⚠️ Please describe your issue in detail.",
  };

  // 🧠 Smart AI-like response
  const getBotReply = (msg) => {
    const text = msg.toLowerCase();

    if (text.includes("order")) return botReplies.order;
    if (text.includes("refund")) return botReplies.refund;
    if (text.includes("return")) return botReplies.return;
    if (text.includes("issue")) return botReplies.issue;

    return "🤖 I’m still learning. Please select FAQ or contact support.";
  };

  const handleSend = (text = message) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text }]);
    setMessage("");

    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: getBotReply(text) },
      ]);
    }, 900);
  };

  return (
    <div className="absolute bottom-16 right-5 z-20">

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white p-4 rounded-full shadow-lg animate-pulse"
        >
          <Bot size={24} />
        </button>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div className="w-80 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border">

          {/* Header */}
          <div className="bg-blue-600 text-white p-4 flex justify-between">
            <h2 className="font-semibold">Customer Support</h2>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white p-2 border-b flex flex-wrap gap-2">
            {quickActions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSend(q.value)}
                className="text-xs px-2 py-1 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white"
              >
                {q.label}
              </button>
            ))}

            <button
              onClick={() => setShowFAQ(!showFAQ)}
              className="text-xs px-2 py-1 bg-yellow-100 rounded-full"
            >
              FAQ 📌
            </button>
          </div>

          {/* FAQ DROPDOWN */}
          {showFAQ && (
            <div className="bg-gray-50 p-2 border-b">
              {faqs.map((f, i) => (
                <p
                  key={i}
                  onClick={() => handleSend(f)}
                  className="text-xs p-1 cursor-pointer hover:text-blue-600"
                >
                  • {f}
                </p>
              ))}
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 bg-gray-100 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-xl max-w-[75%] text-sm ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* 🤖 Typing animation */}
            {typing && (
              <div className="text-xs text-gray-500 animate-pulse">
                Bot is typing...
              </div>
            )}

            <div ref={chatEndRef}></div>
          </div>

          {/* INPUT */}
          <div className="p-2 border-t flex items-center gap-2">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 border rounded-lg px-2 py-1 text-sm"
              placeholder="Type message..."
            />

            {/* 🎤 Mic */}
            <button onClick={startVoiceInput}>
              <Mic size={18} />
            </button>

            {/* Send */}
            <button
              onClick={() => handleSend()}
              className="bg-blue-600 text-white p-2 rounded-lg"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;