import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

function Movie({id, year, title, summary, poster}){
    return(
        <div>
            <h1>{title}</h1>
            <img src={poster}/>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;