import React from 'react'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import Objects from './Objects'
import Loops from './Loops'


export default function BasicDebugging() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/Objects'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/Loops'><Button variant="outline-success" className='float-left'>Prev page</Button> </Link><br/><br/>
                <h2>Basic Debugging</h2>
                <br />
                <p>
                During this course, you will come to learn that debugging code can often take up as much time as writing the code itself, thus, it is vitally important to learn to use debugging systems efficiently. 
                </p>
                <h3>Breakpoints</h3>
                <p>In Vs code, breakpoints can be set as a point where the code will be paused. This can be used to examine code closer to locate possible points where code is not working. Once the code hits the breakpoint and is paused, we can hover over variables to see if the value they hold is the value we are expecting.</p>
                <h3>Step Over</h3>
                <p>The step over command will step to the next line of code and then pause at that line of code.</p>
                <h3>Continue</h3>
                <p>The continue command will continue running the code until the next break point is met.</p>
            </div>
            <Switch>
                <Route path='/Objects'>
                    <Objects/>
                </Route>
                <Route path='/Loops'>
                    <Loops/>
                </Route>
            </Switch>
        </Container>
    )
}
