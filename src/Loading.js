import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./css/Loading.css"

class Loading extends React.Component{
    state = {
        isLoading: true,
        movies: []
    }
    componentDidMount() {
        // setTimeout( () =>
        //     {this.setState({isLoading: false})}
        // , 3000)
        this.getMovies()
    }
    getMovies = async () => {
        const {
            data: {
                data: {movies}
            }
        } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json/?sort_by=rating")
        this.setState({movies, isLoading: false})
        console.log(movies);
    }

    render() {
        const {isLoading, movies} = this.state;
        return(
            <div>
                <section className="container">
                {isLoading ? (
                        <div className="loader">
                            <span className="loader_text">Loading...</span>
                        </div>
                    ) : (
                        <div className="movies">
                            {movies.map(movie => (
                            <Movie key={movie.id}
                                   id={movie.id}
                                   year={movie.year}
                                   title={movie.title}
                                   summary={movie.summary}
                                   poster={movie.medium_cover_image}
                                   genres={movie.genres}/>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        )
    }
}

export default Loading;