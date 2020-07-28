import React from 'react'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import BasicDebugging from './BasicDebugging'
import IncrementorDecrementorOperators from './IncrementorDecrementorOperators'
import Image from 'react-bootstrap/Image'
import ForLoop1 from './photos/forloop1.PNG'
import ForLoop2 from './photos/Forloop2.PNG'
import WhileLoop1 from './photos/Whileloop.PNG'
import WhileLoop2 from './photos/whileloop2.PNG'
import Continue from './photos/continue.PNG'
import Continue2 from './photos/ContinueOutput.PNG'
import Break from './photos/break.PNG'

export default function Loops() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/BasicDebugging'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/IncrementorDecrementorOperators'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br /><br />
                <h2>Loops</h2>
                <br />
                <p>
                    Loops are blocks of code that continually execute until a specific condition is met. There are many types of loops, the most basic are:
                </p>
                <h3>For loops</h3>
                <p>A for loop is used to execute code continually with a different value each time it loops. For loops can be used to iterate through an array of data in order to print, sort or modify the data held within the array. The for loop has 3 statements held within, these are:</p>
                <p>The iterator declaration: This essentially declares the starting point of the loop. It is where we initially declare the variable used within the loop.
                <br /><br />The condition: Each time the for loop goes around, the initial variable described above will be checked against the condition set, as long as it returns true, the loop will continue.
                <br /><br />The incrementor: The incrementor is the last statement in the for loop. It is used to update the variables value and sets out how much this will increase or decrease by.
                </p>
                <p>In this example, the iterator is declared and set to the value 0. The condition is that as long as the iterators value is below 10, the loop will continue and the incrementor is set to +1, meaning each time the loop executes, the incrementors value will increase by 1.</p>
                <Image src={ForLoop1} alt='forloop.png' fluid />
                <p>In this example we show how a for loop can be used to iterate over an array. The only difference between this example and the one above, is that we can set the condition to be as long as i is less than fruits.length, which is the length of the array.</p>
                <Image src={ForLoop2} alt='forloop.png' fluid />
                <br />
                <br />
                <h3>While Loops</h3>
                <p>While loops differ from for loops, in that it only includes 1 statement as apposed to 3, and this is the condition. </p>
                <Image src={WhileLoop1} alt='WhileLoop.png' fluid />
                <p>In this example, we can see that we have the condition of the loop is that as long as i’s value is below 10 it will continue to execute. </p>
                <Image src={WhileLoop2} alt='WhileLoop.png' fluid />
                <p>Similar to the for loop, while loops can also be used to iterate over arrays, like we see in the above example.</p>
                <h3>Continue</h3>
                <p>The continue keyword can be used in a loop to skip a value in the loop. E.g.:</p>
                <Image src={Continue} alt='Continue.png' fluid />
                <p>In this example, we are telling the computer that when we hit the value of “Apple” in the array, we want to step over this value and continue from there. We would get this in the console:</p>
                <Image src={Continue2} alt='Continue.png' fluid />
                <h3>Break</h3>
                <p> The break keyword can be used as a way of breaking the loop when we get to a certain value, once the break statement is hit, the loop will no longer continue running, this looks like:</p>
                <Image src={Break} alt='Continue.png' fluid />
            </div>
            <Switch>
                <Route path='/BasicDebugging'>
                    <BasicDebugging />
                </Route>
                <Route path='/IncrementorDecrementorOperators'>
                    <IncrementorDecrementorOperators />
                </Route>
            </Switch>
        </Container>
    )
}
