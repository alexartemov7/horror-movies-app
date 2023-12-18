import React, { useState, useEffect } from "react";
import "./Home.css";

function SingleMenuComponent({ title, poster }) {
    return (
        <div className="movie-card">
            <h2>{title}</h2>
            <img src={poster} alt={`Poster of ${title}`} />
        </div>
    );
}

export default function Home() {
    const [horrorMovies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.sampleapis.com/movies/horror')
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(error => {
                console.error('Failed to fetch horror movies:', error);
            });
    }, []);

    return (
        <main>
            <h1>Your favorite horror movies.</h1>
            <p>Here is the list of the movies that will give you chills.</p>
            <section className="movies-container">
                {horrorMovies.map(singleItem => (
                    <SingleMenuComponent
                        title={singleItem.title}
                        poster={singleItem.posterURL}
                    />
                ))}
            </section>
        </main>
    );
}
