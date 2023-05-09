import VotingApp from "./components/VotingApp/VotingApp";
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <div className='header'>
        <h1>Online Votes</h1>
      </div>
      <VotingApp />
    </div>
  );
};

export default App;
