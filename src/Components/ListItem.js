import React from 'react';

function ListItem(props){
    console.log(props)
    const {movie} = props // destructuring props
    return(
        <div className='List-Item'>
            <img alt={movie.title} className='movie-poster' src={movie.posterImg} />
            <div className='movie-info'>
                <p>{movie.title}</p>
                <p>{movie.year}</p>
            </div>
        </div>
    )
}

export default ListItem