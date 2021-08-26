import React from "react";
import axios from "axios";
import "./css/App.css"
import { HashRouter, Route } from "react-router-dom"
import About from "./routes/About"
import Home from "./routes/Home"
import Navigation from "./component/Navigation"
import Detail from "./routes/Detail"


// 부모가 자식에게 데이터를 보내는 방법(jsx), props를 사용해서 data를 보낸다.
// {} <--- javascript를 사용할 수 있는 표시

class App extends React.Component{
    state = {
        movies: []
    }
    componentDidMount() {
        this.getMovies()
    }
    getMovies = async () => {
        const {
            data: {
                data: {movies}
            }
        } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json/?sort_by=rating")
        this.setState({movies})
    }
    render() {
        const {movies} = this.state;
        return(
            <HashRouter>
                <Navigation/>
                <Route path="/" exact={true} component={Home} />
                <Route path="/movie/:id" component={Detail}/>
                <Route path="/about">
                    {
                        movies.map(movie => (
                            <About key={movie.id}
                                   summary={movie.summary}/>
                        ))
                    }
                </Route>

            </HashRouter>
        );
    }
}

//class component
// class App extends React.Component{
//     state = {
//         count: 0,
//     };
//
//     constructor(props) {
//         super(props);
//         console.log("hello")
//     }
//     componentDidMount() {
//         console.log("component rendered")
//     }
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log("component update")
//     }
//     componentWillUnmount() {
//         console.log("Goodbye")
//     }
//
//     add = () => {
//         // this.state.count++;
//         // this.setState({count: this.state.count + 1});
//         this.setState(current => ({
//             count: current.count + 1
//         }));
//     };
//     minus = () => {
//         // this.state.count--;
//         // this.setState({count: this.state.count - 1});
//         this.setState(current => ({
//             count: current.count - 1
//         }));
//     };
//
//     render() {
//         console.log("I'm rendering")
//         return(
//             <HashRouter>
//                 <Route path="/about" component={About}>
//             </HashRouter>
//         );
//     }
// }

// function component
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
