import React from 'react'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import Classes from './Classes'
import ArrayExtensionMethods from './ArrayExtensionMethods'
import Image from 'react-bootstrap/Image'
import StringIncludes from './photos/stringincludes.PNG'
import StringIndexOf from './photos/stringindexof.PNG'
import Substring from './photos/substring.PNG'


export default function StringExtensionMethods() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/Classes'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/ArrayExtensionMethods'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br/><br/>
                <h2>String Extension Methods</h2>
                <br />
                <h4>string.includes</h4>
                <p>
                •	String.includes is used to determine if a string includes a certain value or not e.g:
                </p>
                <Image src={StringIncludes} alt='stringincludes.png' fluid/>
                <br />
                <br />
                <h4>string.indexOf</h4>
                <p>•	String.indexOf will search a string for the first occurrence of a specific value and return the index of said value. If the string does not contain said value, it will return -1, e.g.</p>
                <Image src={StringIndexOf} alt='stringincludes.png' fluid/>
                <br />
                <br />

                <h4>string.substring</h4>
                <p>•	String.substring takes a start and end index position, searches through a string and creates a new string with characters between the start and end indexes. if an endpoint is not provided, the end of the string is set as default. E.g.</p>
                <Image src={Substring} alt='stringincludes.png' fluid/>
                <br />
                <br />


            </div>
            <Switch>
                <Route path='/Classes'>
                    <Classes/>
                </Route>
                <Route path='/ArrayExtensionMethods'>
                    <ArrayExtensionMethods/>
                </Route>
            </Switch>
        </Container>
    )
}
