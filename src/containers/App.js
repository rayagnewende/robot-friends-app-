import  { Component}  from "react"
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import { connect} from "react-redux"; 
import { change_search_field, request_robots } from "../actions";

class App extends Component {

  componentDidMount(){
    this.props.requestRobots();
  }

  render(){
  
    const robotsFiltered = this.props.robots.filter( robot => {
      return robot.name.toLocaleLowerCase().includes(this.props.searchField.toLocaleLowerCase()); 
    }); 

    if(this.props.robots.length === 0)
    {
      return <h1>Loading</h1>
    }
    else{
    return (
      <div className="tc">
        <h1>ROBO-FRIENDS</h1>
         <SearchBox 
              searchContent={this.props.searchField}
              onChangeField={this.props.setChangeSearchField} /> 
              <Scroll>
                  <ErrorBoundry>
                      <CardList  robots={robotsFiltered} />
                  </ErrorBoundry>
              </Scroll>
      </div>
    )}
  }
  }
 
  const mapStateToProps = state => {
  
    return {
      searchField:state.searchReducer.searchField,
      robots:state.requestRobotsReducer.robots,
      isPending:state.requestRobotsReducer.isPending, 
      error:state.requestRobotsReducer.error
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      setChangeSearchField : (e) => dispatch(change_search_field(e.target.value)), 
      requestRobots: () => request_robots(dispatch)
    }
  } 

export default connect(mapStateToProps, mapDispatchToProps)(App);
