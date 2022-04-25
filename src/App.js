
import './App.css';

import { 
  AddMovie 
} from './ui-components';

import { 
  MovieBar 
} from './ui-components';

import { 
  MovieCompCollection 
} from './ui-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MovieBar />
        <p>
        <MovieCompCollection />

        <AddMovie />


        </p>

   
      </header>
    </div>
  );
}

export default App;
