import React from 'react';
import { MovieItem } from './MovieItem';


export class Movies extends React.Component {

    render() {
        //setting up map func
        //used to distribute data into right section
        return this.props.Mymovies.map((movie) => {
            return <MovieItem Mymovies={movie}></MovieItem>
        })
    }
}

