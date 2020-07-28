import React from 'react'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Basics from './Basics'
import Operators from './Operators'
import VariablesImg from './photos/js1.PNG'
import Image from 'react-bootstrap/Image'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'

export default function Variables() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/Operators'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/Basics'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br/><br/>
                <h2>Variables</h2>
                <br />
                <h3>Declaring variables</h3>
                <p>
                To declare a variable, we use the key words var, const and let. If we know we are not going to want to re-assign our variable we use const, if not, we use var or let. You can find out more about this in other pages in this site, but for now, we will just use let. To declare a variable we use:
                <Image src={VariablesImg} alt="variables.png"fluid/>
                <br />
                <br />
                <p style={{textAlign:"center"}} >Let name = “Steve”; </p>
                <p style={{textAlign:"center"}} >Let age = 26;</p>
                Here we declare the variable called name and assign the string Steve as its value. We have also declared the variable age and assigned the number 26 as its value.
                </p>
                <h3>Data Types</h3> 
                <br />
                <p>
                Variables can be assigned with different data types. The most basic forms of data are referred to as primitive data, these are numbers, strings and Booleans. As the name suggests a number is an integer either whole number or decimal, i.e. let age=21;,let price=12.99;. Strings are a list of characters, which we wrap in either single or double quotations i.e. name=’Steve’. A Boolean returns either a true or false value, and are usually used in conjunction with if/else statements to determine if a specific conditions is met. We’ll go more into detail in later pages.
                </p>

            </div>
            <Switch>
                <Route path='/Operators'>
                    <Operators/>
                </Route>
                <Route path='/Basics'>
                    <Variables/>
                </Route>
            </Switch>
        </Container>
    )
}
