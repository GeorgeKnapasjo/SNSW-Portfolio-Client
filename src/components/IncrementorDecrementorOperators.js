import React from 'react'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import Arrays from './Arrays'
import Loops from './Loops'

export default function IncrementorDecrementorOperators() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/Loops'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/Arrays'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br /><br />
                <h2>Incrementor and Decrementor Operators</h2>
                <br />
                <h3>Incrementor</h3>
                <p>
                    The incrementor operator is used to increase the value of a variable by 1. We can do this in 1 of 2 ways, either a post or pre incrementor. A post-incrementor will increase the variables value by 1 after it has been used (this looks like: i++), where as a pre-incrementor will increase its value before the variable is used (this looks like: ++i.) As we will see, the incrementor operator is often used in loops to increase the value of an iterator.
                </p>
                <h3>Decrementor:</h3>
                <p>
                    The decrement operator is used to decrease the value of a variable by 1. We can do this either before the variable is used (pre-decrementor: --i) or after the variable has been used (post-decrementor: i--)
                </p>
            </div>
            <Switch>
                <Route path='/Loops'>
                    <Loops />
                </Route>
                <Route path='/Arrays'>
                    <Arrays />
                </Route>
            </Switch>
        </Container>
    )
}
