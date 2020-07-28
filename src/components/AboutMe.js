import React from 'react'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Image1 from './photos/code.jpg'
import Image2 from './photos/bike.jpg'

import './AboutMe.css'

export default function AboutMe() {
    return (
        <Container>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100"
                    src={Image1}
                    alt='Coding Image'/>
                    <Carousel.Caption>
                        <h3>Coding</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                    src={Image2}
                    alt='Motorcycle Image 1'/>
                    <Carousel.Caption>
                        <h3>Motorbikes</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>


            <h2>About Me</h2>
            <p>My name is George Knapasjo, I'm 21 years old and have worked as a CSR for the last 2 years. For the past 3 months I've been learning Javascript, CSS, HTML and React through a great career opportunity provided by my employer, Service NSW. I’ve always been passionate about technology and have always wanted to learn a coding language, however, have found self teaching to be a challenge. I’m grateful for the opportunity I’ve been given, and have thoroughly enjoyed learning how to program. </p>
            <h3>Coding Bootcamp</h3>
            <p>Over the last 3 months have been challenging but equally rewarding. I Feel that I have found a career that I am passionate about and thoroughly enjoy the problem solving aspect of software development. I feel I have been able to develope my problem solving skills and have developed a new way of critical thinking when approaching a new task. I am excited for my future as a software developer and look forward to seeing how my career developes.</p>
            <h3>My Hobbies</h3>


        </Container>

    )
}