import qrCode from './qrcode.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className = "qrContainer">
          <img src = {qrCode} className="qrCode" alt="qrCode" />
          <p className = "main">
            Improve your front-end skills by building projects
          </p>
          <p className = "body">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
