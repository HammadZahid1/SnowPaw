import Scene from "../components/Scene/Scene"; 
import Cat from "../components/Cat/Cat";
import Effects from "../components/Effects/Effects";
import "./page.css";

export default function Home() {
  return (
    <Scene>
      <Cat />
      <Effects />
<div className="text-overlay">
  <div className="chat-box">
    <div className="chat-header">
      <span className="chat-title">Hi, I'm Snowpaw</span>
      <span className="chat-status"></span>
    </div>
    
    <div className="chat-messages">
      <div className="message bot-message">
        <div className="message-content">
          
        </div>
        <div className="message-time"></div>
      </div>
    </div>
    
    <div className="chat-input-container">
      <input 
        type="text"
        placeholder="How's it going?"
        className="chat-input"
        id="user-input"
      />
      <button className="send-button">
        Send
      </button>
    </div>
  </div>
</div>
    </Scene>
  );
}
