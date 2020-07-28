import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import HelloWorld from './HelloWorld'
import Carousel from 'react-bootstrap/Carousel'
import Image1 from './photos/code.jpg'
import Image2 from './photos/CSS.jpg'
import Image4 from './photos/react.png'
import Image3 from './photos/HTML 2.jpeg'
import Introduction from './Introduction'
import './App.css'


export default function Home() {
    return (
        // <Router>
        <Container>
            {/* <div style={{ height: '350px' }}> */}
                <Carousel >
                    <Carousel.Item>
                        <img className="d-block w-100"
                            src={Image1}
                            alt='Coding Image' />
                        <Carousel.Caption>
                            <h3>Javascript</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Image2}
                            alt='Motorcycle Image 1' />
                        <Carousel.Caption>
                            <h3>CSS</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Image3}
                            alt='Motorcycle Image 1' />
                        <Carousel.Caption>
                            <h3>HTML</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Image4}
                            alt='Motorcycle Image 1' />
                        <Carousel.Caption>
                            <h3>React</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            {/* </div> */}
            <br />
            <h3>About Us</h3>
            <p>W6 schools is the most comprehensive online full stack Javascript training sites. It doesn't take a genius to know that 6 is twice as good as 3, meaning we are atleast twice as good as any competitors.</p>
            <h4>Courses:</h4>
            <Card className='text-center'>
                <Card.Header>Javascript</Card.Header>
                <Card.Body>
                    <Card.Text>In this course you will learn the basics of Javascript, a language that is the basis that most webpages are built off.</Card.Text>
                    <Button href='/HelloWorld' variant="outline-success" className='btn-block'>Start Course</Button>
                </Card.Body>
            </Card>
            <br />
            <Card className='text-center'>
                <Card.Header>CSS/HTML</Card.Header>
                <Card.Body>
                    <Card.Text>In this course we will take you through how websites are setup with HTML and how they are styled using CSS. You will learn how to create your own simple website, and how we can use Javascript to make websites more dynamic.</Card.Text>
                    <Button href='/Introduction' variant="outline-success" className='btn-block'>Start Course</Button>
                </Card.Body>
            </Card>
            <br />
            <Card className='text-center'>
                <Card.Header>React</Card.Header>
                <Card.Body>
                    <Card.Text>In this course we will go over the basics of React, a language designed by Facebook which is used to make websites more dynamic. This course will take your web-building skills to the next level.</Card.Text>
                    <Button href='/HelloWorld' variant="outline-success" className='btn-block'>Start Course</Button>
                </Card.Body>
            </Card>
            <Switch>
                <Route path='/HelloWorld'>
                    <HelloWorld />
                </Route>
                <Route path='/Introduction'>
                    <Introduction/>
                </Route>
                <Route>

                </Route>
            </Switch>
        </Container>

        /* </Router> */

    )
}