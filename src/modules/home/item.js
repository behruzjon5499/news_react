import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";

class Item extends Component {
    render() {
        return (
            <div>


                <div className="row">


                    <h1 style={{textAlign:"center",marginBottom:30}}>
                        My first application Cards
                    </h1>

                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__480.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/04/09/09/56/avenue-2215317__340.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2014/04/17/23/26/environmental-protection-326923__340.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;