import React from 'react';
import '../styles/HomeScreen.css';

// function HomeScreen() {
//   return (
//     <div className="container">
//       <div className="left-pane">
//         <h2>Open Messages</h2>
//         {/* Insert code for displaying open messages */}
//       </div>
//       <div className="center-pane">
//         <h2>Currently Open Chat</h2>
//         {/* Insert code for displaying currently open chat */}
//       </div>
//       <div className="right-pane">
//         <h2>Scheduled Meetings</h2>
//         {/* Insert code for displaying scheduled meetings */}
//       </div>
//       <div className="bottom-pane">
//         <h2>Recent</h2>
//         {/* Insert code for displaying recent chats */}
//       </div>
//     </div>
//   );
// }

// export default HomeScreen;

function HomeScreen() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo">Bookr</div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Status</a>
          <a href="#">Meetings</a>
          <a href="#">Messages</a>
          <a href="#">Settings</a>
        </div>
        <div className="logout">
          <a href="#">Logout</a>
        </div>
      </div>
      <div className="main">
        <div className="header">Dashboard</div>
        <div className="status-input">
          <input type="text" placeholder="Update your status..." />
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;

