
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={h1Style}>My React Page</h1>
      <h2 className='bio'>Whoop! whoop! My first React app page!!</h2>
    </div>
  );
}
const h1Style = {
  "fontSize": "30px",
  "color": "#cc0000",
  "textTransform": "uppercase"
};

export default App;
