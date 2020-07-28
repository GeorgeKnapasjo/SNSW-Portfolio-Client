import React from 'react'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import ArrowFunctions from './ArrowFunctions'
import StringExtensionMethods from './StringExtensionMethods'
import Class1 from './photos/Class1.PNG'
import Class2 from './photos/class2.PNG'
import Class3 from './photos/class3.PNG'
import Class4 from './photos/class4.PNG'
import Image from 'react-bootstrap/Image'

export default function Classes() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/ArrowFunctions'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/StringExtensionMethods'><Button variant="outline-success" className='float-left'>Prev page</Button> </Link><br/><br/>
                <h2>Classes</h2>
                <br />
                <p>
                Classes are a set of instructions used to create multiple objects with the same properties. Classes are created by using the class keyword followed by the class name. 
                </p>
                <Image src={Class1} alt='class.png' fluid/>
                <p>To create an object from this class, we:</p>
                <Image src={Class2} alt='class.png' fluid/>
                <p>Properties can be assigned to classes. Any properties given to a class will be given to each instance of said class. To assign properties to a class, we declare the name of the property in the body of the class.</p>
                <Image src={Class3} alt='class.png' fluid/>
                <p>A constructor can be used to make assigning properties to instances of classes more simple. </p>
                <Image src={Class4} alt='class.png' fluid/>
            </div>
            <Switch>
                <Route path='/ArrowFunctions'>
                    <ArrowFunctions/>
                </Route>    
                <Route path='/StringExtensionMethods'>
                    <StringExtensionMethods/>
                </Route>
            </Switch>
        </Container>
    )
}
