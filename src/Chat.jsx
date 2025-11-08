import React, { useState, useEffect } from "react";

function Chat() {
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);

    useEffect(() => {
        const savedChat = localStorage.getItem("chatMessages");
        if (savedChat) {
            setChat(JSON.parse(savedChat));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("chatMessages", JSON.stringify(chat));
    }, [chat]);


    const botReply = (userMessage) => {
        if (userMessage.toLowerCase().includes("hello")) 
        {
            return "Hi there! How can I help you?";
        } 
        else if (userMessage.toLowerCase().includes("hi")) 
        {
            return "Hi";
        }
        else if (userMessage.toLowerCase().includes("how are you")) 
        {
            return "I'm Good, but I'm doing great!";
        } 
        else if (userMessage.toLowerCase().includes("bye")) 
        {
            return "Goodbye! Have a great day!";
        } 
        else if (userMessage.toLowerCase().includes("what are you doing")) 
        {
            return "i am doing Code";
        }
        else 
        {
            return "Sorry, I don't understand";
        }
    };

    const sendMessage = (e) => {
        e.preventDefault();
        if (message.trim()) {
            const userMsg = { sender: "user", text: message, time: new Date().toLocaleTimeString() };
            const updatedChat = [...chat, userMsg];
            setChat(updatedChat);
            setMessage("");

            setTimeout(() => {
                const reply = botReply(message);
                const botMsg = { sender: "bot", text: reply, time: new Date().toLocaleTimeString() };
                setChat((prevChat) => [...prevChat, botMsg]);
            }, 1000);
        }
    };

    return (
        <section id="chat-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-12">
                        <div className="chat-main">
                            <h3>💬 Live Chat</h3>
                            <div className="chat-inner">
                                {chat.map((msg, i) => (
                                    <p
                                        key={i}
                                        style={{
                                            margin: "5px 0",
                                            textAlign: msg.sender === "user" ? "right" : "left",
                                            color: msg.sender === "user" ? "blue" : "green",
                                        }}
                                    >
                                        <b>{msg.sender === "user" ? "You" : ""}</b> {msg.text}
                                        <br />
                                        <small>{msg.time}</small>
                                    </p>
                                ))}
                            </div>

                            <form onSubmit={sendMessage} style={{ display: "flex" }}>
                                <input
                                    type="text"
                                    value={message}
                                    placeholder="Type a message..."
                                    onChange={(e) => setMessage(e.target.value)}
                                    style={{ flex: 1, padding: "5px" }}
                                />
                                <button type="submit" className="btn btn-primary ">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Chat;
