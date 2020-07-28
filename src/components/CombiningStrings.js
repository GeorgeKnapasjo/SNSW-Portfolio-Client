import React from 'react'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import IfAndElseStatements from './IfAndElseStatements'
import Operators from './Operators'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import StringConcat from './photos/stringconcat.PNG'
import StringInterpolation from './photos/stringinterpolation.PNG'

export default function CombiningStrings() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to="/IfAndElseStatements"><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/Operators'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br/><br/>
                <h2>Combining Strings</h2>
                <br />
                <h3>String concatenation</h3>
                <p>
                String concatenation is used when we want to join 2 or more strings or variables together. We use the additional operator to concatenate 2 strings, which looks like:
                </p>    
                <Image src={StringConcat} fluid alt='stringconcat.png'/>
                <h3>String Interpolation</h3>
                <p>
                String interpolation is another way we can add strings or variables together. Often also referred to as template literals, string interpolation involves wrapping the string we want to add in backticks (`code goes here`), and when we are adding in a variable we wrap it in (${}). String interpolation is preferred when dealing with many different types of data, as concatenating strings can get quite arduous after time. E.g:	
                </p>
                <Image src={StringInterpolation} fluid alt='stringconcat.png'/>

            </div>
            <Switch>
                <Route path="/IfAndElseStatements">
                    <IfAndElseStatements/>
                </Route>
                <Route path="/Operators">
                    <Operators/>
                </Route>
            </Switch>
        </Container>
    )
}
