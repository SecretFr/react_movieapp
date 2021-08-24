import React from "react";
import axios from "axios";
import Movie from "./Movie";
import Loading from "./Loading";
import FoodList from "./FoodList";


// 부모가 자식에게 데이터를 보내는 방법(jsx), props를 사용해서 data를 보낸다.
// {} <--- javascript를 사용할 수 있는 표시

//class component
class App extends React.Component{
    state = {
        count: 0,
    };

    constructor(props) {
        super(props);
        console.log("hello")
    }
    componentDidMount() {
        console.log("component rendered")
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("component update")
    }
    componentWillUnmount() {
        console.log("Goodbye")
    }

    add = () => {
        // this.state.count++;
        // this.setState({count: this.state.count + 1});
        this.setState(current => ({
            count: current.count + 1
        }));
    };
    minus = () => {
        // this.state.count--;
        // this.setState({count: this.state.count - 1});
        this.setState(current => ({
            count: current.count - 1
        }));
    };

    render() {
        console.log("I'm rendering")
        return(
          <div>
              <Loading/>
              {/*<h1>Class component</h1>*/}
              {/*<p>The Number is: {this.state.count}</p>*/}
              {/*<button onClick={this.add}>Add</button>*/}
              {/*<button onClick={this.minus}>Minus</button>*/}
          </div>
        );
    }
}

//function component
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello!!</h1>
//         <FoodList/>
//
//     </div>
//   );
// }

export default App;
