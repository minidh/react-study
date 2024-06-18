import logo from './logo.svg';
import './App.css';
import ValidationSample from './ValidationSample';
import ScrollBox from './scrollBox';

function App() {
  return (
    // <ValidationSample/>
    <div>
      <ScrollBox ref={(ref) => this.scrollBox=ref}/>
        <button onClick={() => this.scrollBox.ScrollBottom()}>
          맨 밑으로
        </button>
    </div>
  );
}

export default App;