import  { Component}  from "react"
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import { robots} from "./robots"; 
import Scroll from "./Scroll";

class App extends Component {
  constructor(props){
    super(props) 
    this.state = {
      "robots":robots,
      "searchField":""
    }
  }

  changeField = (event) => {
    this.setState({
      searchField:event.target.value
    })
  }

  render(){
    const robotsFiltered = this.state.robots.filter( robot => {
      return robot.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase()); 
    }); 
    return (
      <div className="tc">
        <h1>ROBO-FRIENDS</h1>
         <SearchBox 
              searchContent={this.state.searchField}
              onChangeField={this.changeField} /> 
              <Scroll>
                  <CardList  robots={robotsFiltered} />
              </Scroll>
      </div>
    );
  }
  }
 

export default App;
