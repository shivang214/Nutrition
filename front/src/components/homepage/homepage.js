import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./homepage.css";
import axios from "axios";

const Chat = () => {
    const [message, setMessage] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [chatHistory, setChatHistory] = useState([]);
    const [questions, setQuestions] = useState([]);
    const history = useHistory();


    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const sendMessage = () => {
        // Send message to the server, save it to the chat history in the database.
    };

    const clearConversation = () => {
        // Clear the chat history.
    };

    const handleQuestionSelect = (selectedQuestion) => {
        // Send selectedQuestion to the server and display the answer.
    };

    const viewChatHistory = () => {
        // Redirect to the chat history page or open a popup.
        history.push("/chat-history");
    };
    const handleLogout = () => {
        history.push("/login"); 
    };

    useEffect(() => {
        // Fetch chat history from the server and populate chatHistory state.
    }, []);

    useEffect(() => {
        // Fetch questions from the server and populate questions state.
    }, []);

    return (
        
        <div className={`homepage ${isDarkMode ? "dark-theme" : "light-theme"}`}>
            <div className="chat-history">
                {/* Display chat history here */}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
                <button onClick={clearConversation}>Clear Conversation</button>
                <button onClick={viewChatHistory}>View Chat History</button>
            </div>
            <div className="logout-container">
                <button className="logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <div className="questions-dropdown">
    <select onChange={(e) => handleQuestionSelect(e.target.value)}>
        <option value="">Select a Question</option>
        {questions.map((q) => (
            <option key={q.id} value={q.text}>
                {q.text}
            </option>
        ))}
    </select>
</div>
<button className="theme-toggle-button" onClick={toggleTheme}>
                Dark Mode
            </button>
        </div>
    );
};

export default Chat;
