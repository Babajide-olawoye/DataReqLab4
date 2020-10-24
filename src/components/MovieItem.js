//imports needed
import React from 'react';
import Card from 'react-bootstrap/Card'


export class MovieItem extends React.Component {

    render() {
        return (
            <div className="App">
                
                <center>
                {/*using card from bootstrap
                displaying img, title, year obj from JSON obj in read*/}
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.Mymovies.Poster} />
                    <Card.Body>
                        <Card.Title>{this.props.Mymovies.Title}</Card.Title>
                        <Card.Text>{this.props.Mymovies.Year}</Card.Text>
                    </Card.Body>
                </Card>
                </center>
            </div>
        );
    }
}

