import React from 'react'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import IncrementorDecrementorOperators from './IncrementorDecrementorOperators'
import ComparisonOperators from './ComparisonOperators'
import Image from 'react-bootstrap/Image'
import Array1 from './photos/Array1.PNG'
import Array2 from './photos/Array2.PNG'
import ArrayPush from './photos/arraypush.PNG'
import ArrayPop from './photos/arraypop.PNG'

export default function Arrays() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/IncrementorDecrementorOperators'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/ComparisonOperators'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br/><br/>
                <h2>Arrays</h2>
                <br />
                <p>
                An array is a variable that holds a list of items, generally used as an easy way to group similar variables. It is usually easier to create an array over declaring individual variables. Items in an array can be accessed by their index, which represents their position in an array starting from zero and increasing each position from left to write. We can add or remove items from the end of an array by using array.push(item) to add or array.pop() to remove. e.g. 
                </p> <br/>
               <Image src={Array1} alt="array.png" fluid/>
                    <p><b>As an Array:</b></p>
                    <Image src={Array2} alt="array.png" fluid/>
                    <p><b>Where</b></p>
                    <p>Fruits[0] = “Banana”; </p>
                    <p>Fruits[1] = “Apple”; </p>
                    <p>Fruits[3] = “Orange”;</p> <br/>
                <p><b>Adding to and array:</b></p>
                <Image src={ArrayPush} alt="array.png" fluid/>

                    <p><b>Removing items from an array:</b></p>
                    <Image src={ArrayPop} alt="array.png" fluid/>

             
                
            </div>
            <Switch>
                <Route path='/IncrementorDecrementorOperators'>
                    <IncrementorDecrementorOperators/>
                </Route>
                <Route path='/ComparisonOperators'>
                    <ComparisonOperators/>
                </Route>
            </Switch>
        </Container>
    )
}
