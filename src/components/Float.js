import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import Flexbox from './Flexbox'
import PageLayout from './PageLayout'

export default function Float() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/Flexbox'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/PageLayout'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br /><br />
                <h2>CSS Float</h2>
                <br />
                <p>We can use CSS float to define where an element will be placed. Float left or float right will make an element go to a certain side of its container. We can also use float top or bottom to push an element to the top or bottom of its container. Clear can also be used to determine which side an element must not float. Whilst CSS float is easy to learn/pickup, it comes with its disadvantages. The main disadvantage being cross device compatibility, that is, if someone is to view your website on a mobile/tablet device when it was designed for a fullscreen computer, the layout will be compromised. 
                </p>
                
            </div>
            <Switch>
                <Route path='/Flexbox'>
                    < Flexbox/>
                </Route>
                <Route path='/PageLayout'>
                    < PageLayout/>
                </Route>
            </Switch>
        </Container>
    )
}