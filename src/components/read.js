import React from 'react';
import { Movies } from './movies';
import {a} from


export class Read extends React.Component {

    //Obj array filled with movies details
    state = {
        movies:[]
    };

    componentDidMount(){
        axios.get('localhost:4000/api/movies')
        .then((respomse)=>{
            this.setState({movies: Response.data.Search})
        })
        .catch((error)=> {

        })
    }

    render() {
        return (
           
           <div className="App">
                <h1>Hello from read</h1>
                {/*Calling Movies component */}
                <Movies Mymovies = {this.state.movies}></Movies>
            </div>
        );
    }
}

