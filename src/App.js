import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import { robots} from "./robots"; 
function App() {
  return (
    <div className="App">
       <SearchBox /> 
       <CardList  robots={robots} />
    </div>
  );
}

export default App;
