import React, { useState, useRef, useEffect } from 'react';
import { Mic, Video, Send, Loader, User, Bot } from 'lucide-react';

const MockInterview = () => {
    const [messages, setMessages] = useState([
        { role: 'model', content: "Hello! I'm your AI Interviewer. I'm here to help you practice for your Full Stack Developer role. When you're ready, please introduce yourself." }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            // Prepare history for backend (excluding the last user message we just added locally for optimistic UI)
            // Actually backend likely needs the full history including the new message? 
            // My backend implementation:
            // const chat = model.startChat({ history: ... })
            // chat.sendMessage(message)
            // So I should send history UP TO now, and the new message "message".

            const history = messages.map(m => ({
                role: m.role,
                content: m.content // backend expects 'parts' inside history mapping, let's see how I implemented backend
            }));

            // Backend `interview.js`:
            // const { message, history } = req.body;
            // history.map(h => ({ role: h.role, parts: [{ text: h.content }] }))
            // So sending [{role, content}] is correct as per my backend logic mapping.

            const response = await fetch('/api/interview/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: input,
                    history: history
                })
            });

            const data = await response.json();

            if (data.success) {
                setMessages(prev => [...prev, { role: 'model', content: data.reply }]);
            } else {
                setMessages(prev => [...prev, { role: 'model', content: "Error: Could not connect to the interviewer." }]);
            }

        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, { role: 'model', content: "Connection Error. Is the backend running?" }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">AI Mock Interview</h1>
                    <p className="mt-2 text-gray-600">Real-time practice with our sophisticated AI interviewer.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
                    {/* Video Feed (Simulated) */}
                    <div className="lg:col-span-1 bg-black rounded-lg relative overflow-hidden shadow-xl flex flex-col">
                        <div className="flex-1 bg-gray-900 flex flex-col items-center justify-center text-gray-500 relative">
                            {/* Simulated User Camera */}
                            <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
                            <Video className="h-16 w-16 mb-4 opacity-50 z-10" />
                            <p className="z-10">You</p>
                        </div>
                        {/* Simulated AI Camera (Small PIP or Split) */}
                        <div className="h-1/3 bg-gray-800 border-t border-gray-700 flex flex-col items-center justify-center text-gray-400">
                            <Bot className="h-8 w-8 mb-2" />
                            <p className="text-xs">AI Interviewer</p>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="lg:col-span-2 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200">
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] rounded-lg p-4 shadow-sm ${msg.role === 'user'
                                            ? 'bg-blue-600 text-white rounded-br-none'
                                            : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none'
                                        }`}>
                                        <p className="text-sm leading-relaxed">{msg.content}</p>
                                    </div>
                                </div>
                            ))}
                            {loading && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 rounded-bl-none shadow-sm flex items-center space-x-2">
                                        <div className="animate-bounce h-2 w-2 bg-gray-400 rounded-full"></div>
                                        <div className="animate-bounce h-2 w-2 bg-gray-400 rounded-full delay-75"></div>
                                        <div className="animate-bounce h-2 w-2 bg-gray-400 rounded-full delay-150"></div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="p-4 bg-white border-t border-gray-200">
                            <form onSubmit={handleSend} className="flex gap-4">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your answer..."
                                    disabled={loading}
                                    className="flex-1 rounded-full border-gray-300 shadow-sm px-6 py-3 border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                />
                                <button
                                    type="submit"
                                    disabled={loading || !input.trim()}
                                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition disabled:bg-blue-300 shadow-md"
                                >
                                    <Send className="h-5 w-5" />
                                </button>
                                {/* Voice Input Placeholder */}
                                <button
                                    type="button"
                                    className="bg-gray-100 text-gray-600 p-3 rounded-full hover:bg-gray-200 transition border border-gray-300"
                                >
                                    <Mic className="h-5 w-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MockInterview;
