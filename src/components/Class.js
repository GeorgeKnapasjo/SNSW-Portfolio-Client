import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import ID from './ID'
import Colours from './Colours'
import StyleClass1 from './photos/styleclass1.PNG'
import StyleClass2 from './photos/styleclass2.PNG'
import Image from 'react-bootstrap/Image'

export default function Class() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/ID'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/Colours'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br /><br />
                <h2>Class</h2>
                <br />
                <p>We can declare style sheets by giving them a style class. By giving a set of style rules a class, we can apply said class to certain components within out html document. When declaring a CSS style class, we put a . infront of the name we wish to give the class, followed by curly braces ({}), and within these curly braces we declare any styling properties we want to be applied. When we wish to apply the style class to an element, we simply declare class=”” within the tag. </p>
                <Image src={StyleClass1} alt='Style Class' fluid/>
                <br/>
                <br/>
                <p>Class names can be used to alter HTML with javascript. E.g.</p>
                <Image src={StyleClass2} alt='Style Class' fluid/>
            </div>
            <Switch>
                <Route path='/ID'>
                    < ID/>
                </Route>
                <Route path='/Colours'>
                    < Colours/>
                </Route>
            </Switch>
        </Container>
    )
}