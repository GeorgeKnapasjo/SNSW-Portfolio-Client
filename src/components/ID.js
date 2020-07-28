import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import Class from './Class'
import Javascript from './Javascript'
import ID1 from './photos/id1.PNG'
import ID3 from './photos/id3.PNG'
import ID2 from './photos/id2.PNG'
import Image from 'react-bootstrap/Image'

export default function ID() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/Javascript'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/Class'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br /><br />
                <h2>ID</h2>
                <br />
                <p>Similar to classes, stylesheets can be given IDs which can be used to style certain HTML tags. The difference between classes and IDs, however, is that IDs can only be assigned to one specific element, whereas classes can be assigned to any amount of elements, so if you plan on applying a certain styling multiple tags, it would make more sense to use a class. IDs are declared by putting a hash (#) before the name of the stylesheet we wish to give it. Like classes, we use id=”” to apply this styling to an element. E.g.
                </p>
                <Image src={ID1} alt='ID' fluid/>
                <br/>
                <br/>
                <p>IDs may also be used to navigate the reader to certain parts of a page. E.g.:</p>
                <Image src={ID2} alt='ID' fluid/>
                <br/>
                <br/>
                <p>We can also use IDs in Javascript to manipulate HTML with Javascript. E.g.</p>
                <Image src={ID3} alt='ID' fluid/>
            </div>
            <Switch>
                <Route path='/Javascript'>
                    < Javascript/>
                </Route>
                <Route path='/Class'>
                    < Class/>
                </Route>
            </Switch>
        </Container>
    )
}