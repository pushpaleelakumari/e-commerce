import React from 'react'
import './CardR1.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardR1(prop) {
    return (
        <div className='cards'>
            <div className="card1">
                <Card style={{ width: '18rem' }} className='CARDS' id='CARD1'>
                    <img src={prop.srce1} alt="" className="Images" />
                    <Card.Body className='card-body'>
                        <Card.Title className='title'>{prop.Title1}</Card.Title>
                        <Card.Text className='title-content'>
                            {prop.content1}
                        </Card.Text>
                        <Button variant="primary">Explore More</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="card2">
                <Card style={{ width: '18rem' }} className='CARDS' id='CARD2'>
                    <Card.Img variant="top" src={prop.srce2} className="Images" />
                    <Card.Body>
                        <Card.Title className='title'>{prop.Title2}</Card.Title>
                        <Card.Text className='title-content'>
                            {prop.content2}
                        </Card.Text>
                        <Button variant="primary">Explore More</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="card3">
                <Card style={{ width: '18rem' }} className='CARDS' id='CARD3'>
                    <Card.Img variant="top" src={prop.srce3} className="Images" />
                    <Card.Body>
                        <Card.Title className='title'>{prop.Title3}</Card.Title>
                        <Card.Text className='title-content'>
                            {prop.content3}
                        </Card.Text>
                        <Button variant="primary">Explore More</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="card4">
                <Card style={{ width: '18rem' }} className='CARDS' id='CARD4'>
                    <Card.Img variant="top" src={prop.srce4} className="Images" />
                    <Card.Body>
                        <Card.Title className='title'>{prop.Title4}</Card.Title>
                        <Card.Text className='title-content'>
                            {prop.content4}
                        </Card.Text>
                        <Button variant="primary">Explore More</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default CardR1