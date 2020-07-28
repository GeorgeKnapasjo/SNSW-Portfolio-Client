import React from 'react'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import StringExtensionMethods from './StringExtensionMethods'
import AndOrNotOperators from './AndOrNotOperators'
import Image from 'react-bootstrap/Image'
import ArrayFilter from './photos/arrayfilter.PNG'
import ArrayMap from './photos/arraymap.PNG'
import ArrayFind from './photos/arrayfind.PNG'


export default function ArrayExtensionMethods() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/StringExtensionMethods'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/AndOrNotOperators'><Button variant="outline-success" className='float-left'>Prev page</Button> </Link><br /><br />
                <h2>Array Extension Methods</h2>
                <br />
                <p>
                    Callback functions are used as parameters or arguments for other functions. Essentially we are passing in functions in other functions in order to be called within the function. Some examples include:
                </p>
                <h4>array.filter</h4>
                <p>
                    Array.filter is used to filter an array according to set parameters and create a new array of items that meet the parameters. it is a method(function) that takes a function as an argument. The function that is used as an argument is referred to as a callback function, and is where we set the parameters for the filter. For example, if we have an array of people with properties name and age, we could use the array.filter to create an array of people over the age of 30.
                </p>
                <Image src={ArrayFilter} alt='array.filter.png' fluid />
                <h4>array.map</h4>
                <p>Array.map is used to create an array of elements from an array. For example, if we have an array of people with properties name and age, we can use the array.map to create an array of names of people from that array. </p>
                <Image src={ArrayMap} alt='array.filter.png' fluid />
                <h4>array.filter</h4>
                <p>array.find: array.find is used to loop through an array and finds the first element that meets certain parameters. array.find is similar to array.filter, however instead of returning an array of items, it only returns the first element that meets the parameters. For example, we can use array.find to find the first person whos name starts with a J:</p>
                <Image src={ArrayFind} alt='array.filter.png' fluid />

            </div>
            <Switch>
                <Route path='/StringExtensionMethods'>
                    <StringExtensionMethods />
                </Route>
                <Route path='/AndOrNotOperators'>
                    <AndOrNotOperators />
                </Route>
            </Switch>
        </Container>
    )
}
