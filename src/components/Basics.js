import React from 'react'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import HelloWorld from './HelloWorld'
import Variables from './Variables'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'

export default function Basics() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/Variables'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/HelloWorld'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br /><br />
                <h2>Basic Coding</h2>
                <br />
                <h3>Statements</h3>
                <p>
                    Programs are instructions made up of statements used to tell your computer what to do, step by step. In Javascript, it is best practice to end your statement with a semicolon. Whilst your code will run fine without the semicolons, semi colons can make code easier to break up and read, and in other languages, semi colons necessary for code to run.
                </p>
                <h3>Comments</h3>
                <p>
                Comments are used for when we want to add text to a Javascript application that we don’t want included in the programme itself. For instance, we could write comments explaining how the code we’ve written works so that if we are to return to that code after months of not seeing it or are to send that code to someone else, we have an idea of what’s going on. To create a single line comment, we place a double slash (//) before the comment, or for a multi-line we surround it with (/* comment goes here */).
                </p>
                
            </div>
            <Switch>
                <Route path='/HelloWorld'>
                    <HelloWorld/>
                </Route>
                <Route path='/Variables'>
                    <Variables/>
                </Route>
            </Switch>
        </Container>
    )
}
