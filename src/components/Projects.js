import React from 'react'
import { Container } from 'react-bootstrap'

export default function Projects() {
    return (
        <div>
            <br />
            <Container className='border'>
                <br />
                <h2>My projects</h2>
                <br />
                <h4>Week 1 Console App Project </h4>
                <p>After the first week of the programming bootcamp, we were given our first project, which was to create a console app. I was so excited to use what I had learnt in the first week of coding I started straight away first thing friday afternoon. I decided to create a basic IQ test, and once finished I was as proud as punch. Some issues I found with this project was heavy repetition of if and else statements, however since this was before we learnt switch statements, I didnt really have a choice but to become best friends with copy and paste.</p>
                <a href='https://github.com/GeorgeKnapasjo/ServiceNSWweek1challenge/blob/master/Week%201%20Challenge.js'>Link to first project github</a>
                <br/>
                <br/>
                <h4>My First Website</h4>
                <p>After our first day of learning HTML, we were tasked with creating a website based on a hobby/interest we have. Owing to my passion for motorcycles, I decided to make a motorcycle blog/forum. In the making of the website, I tried to implement as many of the features we learnt. I think for a first website, the website turned out pretty good looking and I feel I definitely learnt a lot about styling and web developement during this project. </p>
                <a href='https://github.com/GeorgeKnapasjo/FirstWebsite'>Link to the github for this project</a>
                <br/>
                <br/>
                <h4>My First React App/Website</h4>
            </Container>
        </div>
    )
}