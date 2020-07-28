import React from 'react'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import ComparisonOperators from './ComparisonOperators'
import CombiningStrings from './CombiningStrings'
import Image from 'react-bootstrap/Image'
import IfElse from './photos/Ifelse.PNG'

export default function IfAndElseStatements() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/ComparisonOperators'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/CombiningStrings'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br /><br />
                <h2>If And Else Statements</h2>
                <br />
                <p>
                    An if and else statement is used to tell the computer what code to run based on specific conditions. Essentially we are saying to the computer, if this condition is met run this code, else run this code. E.g.
                </p>
                <Image src={IfElse} alt='ifelsestatements.png' fluid/>
            </div>
            <Switch>
                <Route path="/ComparisonOperators">
                    <ComparisonOperators />
                </Route>
                <Route path='/CombiningStrings'>
                    <CombiningStrings />
                </Route>
            </Switch>
        </Container>
    )
}
