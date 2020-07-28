import React from 'react'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import Exceptions from './Exceptions'
import Classes from './Classes'
import Image from 'react-bootstrap/Image'
import ArrowFunction1 from './photos/arrowfunction1.PNG'
import ArrowFunction2 from './photos/arrowfunction2.PNG'
import ArrowFunction3 from './photos/arrowfunction3.PNG'
import ArrowFunction4 from './photos/arrowfunction4.PNG'

export default function ArrowFunctions() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/Exceptions'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/Classes'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br/><br/>
                <h2>Arrow Functions</h2>
                <br />
                <p>
                Arrow functions are a shortened way of declaring functions. There are a few steps we can follow to turn a normal function into an arrow function, these are:
                </p>
                <Image src={ArrowFunction1} alt='ArrowFunction.png' fluid/>
                <p>1.	Turn the function into an anonymous function and assign it to the variable addNumbers</p>
                <Image src={ArrowFunction2} alt='ArrowFunction.png' fluid/>
                <p>2.	Remove the function key word and replace with an arrow</p>
                <Image src={ArrowFunction3} alt='ArrowFunction.png' fluid/>
                <p>3.	If the  function is only one line, we can remove curly braces and return statement and put it on one line.</p>
                <Image src={ArrowFunction4} alt='ArrowFunction.png' fluid/>
                <p>4.	If the function only takes 1 argument, we can remove the brackets around the argument</p>
            </div>
            <Switch>
                <Route path='/Exceptions'>
                    <Exceptions/>
                </Route>
                <Route path='/Classes'>
                    <Classes/>
                </Route>
            </Switch>
        </Container>
    )
}
