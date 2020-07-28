import React from 'react'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import AndOrNotOperators from './AndOrNotOperators'
import Objects from './Objects'
import Image from 'react-bootstrap/Image'
import Function1 from './photos/Function1.PNG'
import Function2 from './photos/function2.PNG'
import Function3 from './photos/function3.PNG'

export default function FunctionsAndObjectMethods() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/AndOrNotOperators'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/Objects'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br/><br/>
                <h2>Functions And Object Methods</h2>
                <br />
                <p>
                An object can also have methods assigned as a property. Methods are actions that can be performed on objects. They are properties of the object that contain a function definition, we will get to functions in a second, essentially a function is a piece of code that accomplishes a certain task. 
                </p>
                <Image src={Function1} alt='Function1' fluid/>
                <p>In this example, when we use the this keyword we are referring to the person object or owner of the property. When the method is called, it will print the full name to the console.</p>
                <h3>Functions</h3>
                <p>As touched on in methods, functions are blocks of code designed to perform a certain task. Once written, a function can be invoked at any time and can be incorporated with later code. </p>
                <Image src={Function2} alt='Function2' fluid/>
                <p>To declare a function we use the function keyword followed by the name we wish to give our function followed by parenthesis (). A function can have any name, but it is best to name it something that can be easily understood. A function may have parameters/arguments, these are declared within the parenthesis of the function. The body of the function is listed between curly braces ({}), here is where we will write what the function will do once executed. In the above example the function we have written will takes the parameters a and b and returns the sum of those numbers when it is called. When the function hits the return value, it will stop executing the code and return the value back to the caller.</p>
                <Image src={Function3} alt='Function3' fluid/>
                <p>To call the function, we write the function name, followed by parenthesis. If required, we write the arguments we wish to give to the function within the parenthesis.</p>
            </div>
            <Switch>
                <Route path='/AndOrNotOperators'>
                    <AndOrNotOperators/>
                </Route>
                <Route path='/Objects'>
                    <Objects/>
                </Route>
            </Switch>
        </Container>
    )
}
