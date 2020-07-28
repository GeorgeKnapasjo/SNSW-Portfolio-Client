import React from 'react'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import JSON from './JSON'
import ArrowFunctions from './ArrowFunctions'
import Image from 'react-bootstrap/Image'
import Exceptionsimg from './photos/exceptions.PNG'

export default function Exceptions() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/JSON'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/ArrowFunctions'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br/><br/>
                <h2>Exceptions</h2>
                <br />
                <h4>Throwing exceptions</h4>
                <p>
                Errors in code are usually referred to as exceptions. If we wish to throw an error we use the throw keyword. We may want to throw an error where, for example, if we are expecting a number to be entered by the user and they enter a string. Generally, when we want to throw an error, we also use the Error keyword as this will provide us more information on what’s gone wrong and wear.
                </p>
                <Image src={Exceptionsimg} alt='Exception.png' fluid/>
                <h4>Try/Catch/Finally</h4>
                <p>A try/catch/finally statement is used for error/exception handling. Code is written in the try statement, if we hit an error in this code, it will be caught in the catch statement. Regardless of whether the error is resolved or not the finally statement will execute. The try/catch/finally statement is useful as if we are to hit an error, it will not cause the code to stop working</p>

            </div>
            <Switch>
                <Route path='/JSON'>
                    <JSON/>
                </Route>
                <Route path='/ArrowFunctions'>
                    <ArrowFunctions/>
                </Route>
            </Switch>
        </Container>
    )
}
