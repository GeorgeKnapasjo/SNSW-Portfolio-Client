import React from 'react'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import CombiningStrings from './CombiningStrings'
import Variables from './Variables'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'


export default function Operators() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/CombiningStrings'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/Variables'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br /><br />
                <h2>Operators</h2>
                <br />
                <p>
                    An operator is a symbol that outlays a specific command to perform a mathematical, relational or logical operation. Through this Javascript course you will come to learn that there are many operators we can use, for now some simple examples include:
                    <br/>
                    <br/>
                <dl style={{marginLeft:'15%', marginRight:'15%'}}>
                        <dt >&middot; Assignment Operator ( = )</dt>
                        <dd style={{marginLeft:'5%'}}> Is used when assigning values to variables i.e. let age=26; or let name=“Steve”;</dd>
                        <dt >&middot; Addition Operator ( + )</dt>
                        <dd style={{marginLeft:'5%', marginRight:'25%'}}> Is used for adding 2 numbers or strings together (concatenating) i.e. let age = 23 + 3; (age=26) or let message = “hello” “world”;.</dd>
                        <dt>&middot; Subtraction Operator ( - )</dt>
                        <dd style={{marginLeft:'5%'}}> Is used for subtracting 2 numbers i.e. let age = 30 – 4; (age=26).</dd>
                        <dt>&middot; Addition Operator ( / )</dt>
                        <dd style={{marginLeft:'5%'}}> Is used to divide 2 numbers i.e. let age = 52 / 2; (age=26).</dd>
                        <dt>&middot; Addition Operator ( * )</dt>
                        <dd style={{marginLeft:'5%'}}> Is used to multiply 2 numbers i.e. let age = 13* 2; (age=26).</dd>
                    </dl>
                </p>

            </div>
            <Switch>
                <Route path="/Variables">
                    <Variables />
                </Route>
                <Route path='/CombiningStrings'>
                    <CombiningStrings />
                </Route>
            </Switch>
        </Container>
    )
}
