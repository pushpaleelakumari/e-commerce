import './Minicards.css'
import React from 'react'
import Card from 'react-bootstrap/Card';

function Minicards(prop) {
    return (
        <div>
            <div className="cardss">
                <div className="julecardsh">
                    <Card style={{ width: '18rem' }} className='CARDS' id='CARD1'>
                        <img src={prop.srce11} alt="" className="Imagesm" />
                    </Card>
                    <div className="overlay">
                        <h2>{prop.cont1}</h2>
                    </div>
                </div>
                <div className="julecardsh">
                    <Card style={{ width: '18rem' }} className='CARDS' id='CARD1'>
                        <img src={prop.srce12} alt="" className="Imagesm" />
                    </Card>
                    <div className="overlay">
                        <h2>{prop.cont2}</h2>
                    </div>
                </div>
                <div className="julecardsh">
                    <Card style={{ width: '18rem' }} className='CARDS' id='CARD1'>
                        <img src={prop.srce13} alt="" className="Imagesm" />
                    </Card>
                    <div className="overlay">
                        <h2>{prop.cont3}</h2>
                    </div>
                </div>
                <div className="julecardsh">
                    <Card style={{ width: '18rem' }} className='CARDS' id='CARD1'>
                        <img src={prop.srce14} alt="" className="Imagesm" />
                    </Card>
                    <div className="overlay">
                        <h2>{prop.cont4}</h2>
                    </div>
                </div>
                <div className="julecardsh">
                    <Card style={{ width: '18rem' }} className='CARDS' id='CARD1'>
                        <img src={prop.srce15} alt="" className="Imagesm" />
                    </Card>
                    <div className="overlay">
                        <h2>{prop.cont5}</h2>
                    </div>
                </div>
                <div className="julecardsh">
                    <Card style={{ width: '18rem' }} className='CARDS' id='CARD1'>
                        <img src={prop.srce16} alt="" className="Imagesm" />
                    </Card>
                    <div className="overlay">
                        <h2>{prop.cont6}</h2>
                    </div>
                </div>
                <div className="julecardsh">
                    <Card style={{ width: '18rem' }} className='CARDS' id='CARD1'>
                        <img src={prop.srce17} alt="" className="Imagesm" />
                    </Card>
                    <div className="overlay">
                        <h2>{prop.cont7}</h2>
                    </div>
                </div>
                <div className="julecardsh">
                    <Card style={{ width: '18rem' }} className='CARDS' id='CARD1'>
                        <img src={prop.srce18} alt="" className="Imagesm" />
                    </Card>
                    <div className="overlay">
                        <h2>{prop.cont8}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Minicards
