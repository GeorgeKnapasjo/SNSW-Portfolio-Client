import React from 'react'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import Success from './Success'
import JSON from './JSON'

export default function SpreadSyntax() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/Success'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/JSON'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br/><br/>
                <h2>Spread Syntax</h2>
                <br />
                <p>
                    Content
                </p>

            </div>
            <Switch>
                <Route path='/Success'>
                    <Success/>
                </Route>
                <Route path='/JSON'>
                    <JSON/>
                </Route>
            </Switch>
        </Container>
    )
}
