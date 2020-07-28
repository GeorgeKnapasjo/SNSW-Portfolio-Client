import React from 'react'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import FunctionsAndObjectMethods from './FunctionsAndObjectMethods'
import BasicDebugging from './BasicDebugging'
import Image from 'react-bootstrap/Image'
import Object1 from './photos/object1.PNG'
import Object2 from './photos/object2.PNG'


export default function Objects() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/FunctionsAndObjectMethods'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/BasicDebugging'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br/><br/>
                <h2>Objects</h2>
                <br />
                <p>
                An object in Javacript is essentially a collection of related variables displayed in name value pair. An object is declared using curly braces ({}) and is assigned properties relating to it, which are declared using a colon (:). Each property of the object must also be separated by a comma(,).
                </p>
                <Image src={Object1} alt="object.png" fluid/>
                <p>In this example, we can see we have declared an object car, and assigned it the properties make, model, year and colour. If we wish to access these properties to change/display or add to them we can do this either by callings its name, followed by a period then the name of the property that we wish to use. Similarly, we can also use square brackets by first calling the name of the object followed by the property we wish to access wrapped in square brackets([]) and quotations(“”).</p>
                <Image src={Object2} alt="object.png" fluid/>
                
            </div>
            <Switch>
                <Route path='/FunctionsAndObjectMethods'>
                    <FunctionsAndObjectMethods/>
                </Route>
                <Route path='/BasicDebugging'>
                    <BasicDebugging/>
                </Route>
            </Switch>
        </Container>
    )
}
