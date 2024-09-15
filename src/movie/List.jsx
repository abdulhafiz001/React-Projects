import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function List() {

    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);

    let config = {
        header: { 'content-type': 'multipart/form-data' }
    };

    const FetchData = async (genre) => {
        let url = `https://www.omdbapi.com/?apikey=a26e3c23&s=${genre}`;

        axios.get(url, config).then(result => {
            if (result.data.Search && result.data.Search.length !== 0) {
                genre === "comedy"
                    ? setPopular(result.data.Search)
                    : setTopRated(result.data.Search);
            }
        })
        .catch((error) => {
            console.log(error.message);
        });
    };

    useEffect(() => {
        FetchData("action");
        FetchData("comedy");
    }, []);

    return (
        <div>
            <div className="topbar">
                <div className="search-area">
                    <input type="text" className='search-input' placeholder="Search movies..." />
                    <span className='white'>x</span>
                </div>
            </div>

            <div className="main-content">
                <h1 className='white'>Popular</h1>

                <div className="movie-container">
                    {popular && popular.map((ls, index) =>
                        <div className="card-wrapper" key={index}>
                            <Link to={`/movie/${ls.imdbID}`}>
                                <img src={ls.Poster} alt={ls.Title} />
                                <div className="rating">
                                    <span>50</span>
                                </div>
                                <h5 className='white'>{ls.Title}</h5>
                            </Link>
                            <span>Year: {ls.Year}</span>
                        </div>
                    )}
                </div> 

                <h1 className='white'>Top Rated</h1>

                <div className="movie-container">
                    {topRated && topRated.map((ls, index) =>
                        <div className="card-wrapper" key={index}>
                            <Link to={`/movie/${ls.imdbID}`}>
                                <img src={ls.Poster} alt={ls.Title} />
                                <div className="rating">
                                    <span>50</span>
                                </div>
                                <h5 className='white'>{ls.Title}</h5>
                            </Link>
                            <span>Year: {ls.Year}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default List;
