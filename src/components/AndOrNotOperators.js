import React from 'react'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import ArrayExtensionMethods from './ArrayExtensionMethods'
import FunctionsAndObjectMethods from './FunctionsAndObjectMethods'
import Image from 'react-bootstrap/Image'
import AndOperator from './photos/And operator.PNG'
import NotOperator from './photos/Notoperator.PNG'


export default function AndOrNotOperators() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/ArrayExtensionMethods'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/FunctionsAndObjectMethods'><Button variant="outline-success" className='float-left'>Prev page</Button> </Link><br /><br />
                <h2>And, Or and Not Operators</h2>
                <br />
                <p>
                    And Or and Not are logical operators. Logical operators are used to compare true and false (Boolean) values.
                    <br/>And (&&) : the and operator is written using double ampersands. It Compares 2 boolean values and returns true of BOTH sides are true
                </p>
                <Image src={AndOperator} alt='Andoperator.png' fluid/>
                <p>Or(||): the or operator is written using two vertical bars (||). It compares 2 boolean values and returns true if either side if the statement return true.</p>
                <Image src={NotOperator} alt='Andoperator.png' fluid/>
                <p>Not operator(!): the not operator will essentially flip a Boolean value i.e. returns true on false values and returns false on true values. </p>
                <Image src={NotOperator} alt='Andoperator.png' fluid/>
            </div>
            <h4>More Mathematical Operators</h4>
            <dl style={{ marginLeft: '15%', marginRight: '15%' }}>
                <dt>• Modulo Operator ( % )</dt>
                    <dd style={{ marginLeft: '5%' }}> Calculates the remainder when one number is divided by another. E.g. 21 % 2 = 1</dd>
                    <dt> •	Exponent  Operator ( ** )</dt>
                    <dd style={{ marginLeft: '5%' }}> This operator is used to raise a number to the power of another number. E.g. 7 to the power of 2 is seven times itself:</dd>
                </dl>
            <Switch>
                <Route path='/ArrayExtensionMethods'>
                    <ArrayExtensionMethods />
                </Route>
                <Route path='/FunctionsAndObjectMethods'>
                    <FunctionsAndObjectMethods />
                </Route>
            </Switch>
        </Container>
    )
}
