import React from 'react'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import SpreadSyntax from './SpreadSyntax'
import Exceptions from './Exceptions'

export default function JSON() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/SpreadSyntax'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/Exceptions'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br/><br/>
                <h2>JSON</h2>
                <br />
                <p>
                    Content
                </p>

            </div>
            <Switch>
                <Route path='/SpreadSyntax'>
                    <SpreadSyntax/>
                </Route>
                <Route path='/Exceptions'>
                    <Exceptions/>
                </Route>
            </Switch>
        </Container>
    )
}
