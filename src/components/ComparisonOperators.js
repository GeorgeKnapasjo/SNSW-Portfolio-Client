import React from 'react'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import Arrays from './Arrays'
import IfAndElseStatements from './IfAndElseStatements'

export default function ComparisonOperators() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/Arrays'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to="/IfAndElseStatements"><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br /><br />
                <h2>Comparison Operators</h2>
                <br />
                <p>
                    Comparison operators compare 2 values and return a boolean value. These are often used in If and Else statements when determining what code to run. Some examples include:
                </p>


                <dl style={{ marginLeft: '15%', marginRight: '15%' }}>
                    <dt >&middot; Equality Operator ( == )</dt>
                    <dd style={{ marginLeft: '5%' }}> Compares 2 values and returns true if both values are equal e.g. 12==(6*2) or “Steve” == “Steve” or false otherwise i.e. 6 == (12/4) or “Steve” == “steve”</dd>
                    <dt >&middot; Strict Equality Operator ( === )</dt>
                    <dd style={{ marginLeft: '5%' }}> Compares 2 values and returns true if they are strictly equal to eachother. The strict equality operator differs from the equality operator as it only returns true if both values are of the same data type. For example, if we take the this expression “3” == 3 where one is a string and one is an integer, this would return true, however “3” === 3 would return false. Some more examples of strict equality operator 1 === true returns false, 3 === 3 returns true. </dd>
                    <dt>&middot; Inequality Operator ( != )</dt>
                    <dd style={{ marginLeft: '5%' }}> Compares 2 values and returns true if the values do not match. i.e. 2 != 4 returns true “2” != 6 returns true “Steve” != </dd>
                    <dt>&middot; Strict Inequality Operator ( !== )</dt>
                    <dd style={{ marginLeft: '5%' }}> Compares 2 values and returns true if they are strictly unequal to eachother. Similar to the strict equality operator, the strict inequality operator always considers values of different data types as inequal. </dd>
                    <dt>&middot; Greater Than ( &gt; )</dt>
                    <dd style={{ marginLeft: '5%' }}> Compares 2 values and returns true if the first value is greater than the second value. i.e. 12&gt;4 is true, whereas 12&gt;36 is false</dd>
                    <dt>&middot; Less Than ( &lt; )</dt>
                    <dd style={{ marginLeft: '5%' }}> Compares 2 values and returns true if the first value is less than the second value. i.e. 8&lt;9 would be true whereas 8&lt;3 is false</dd>
                    <dt>&middot; Greater Than or Equal To ( &gt;= )</dt>
                    <dd style={{ marginLeft: '5%' }}> Compares 2 values and returns true if the first value is greater than or equal to the second value. i.e. 12 &gt;= 12 is true and 12 &gt;= 6 is true, where as 12 &gt;= 14 is false.</dd>
                    <dt>&middot; Less Than or Equal To ( &lt;= )</dt>
                    <dd style={{ marginLeft: '5%' }}> Compares 2 values and returns true if the first value is less  than or equal to the second value. i.e. 7&lt;=7 is true and 7&lt;= 12 is true, where as 7&lt;=2 is false..</dd>
                </dl>


            </div>
            <Switch>
                <Route path="/Arrays">
                    <Arrays />
                </Route>
                <Route path="/IfAndElseStatements">
                    <IfAndElseStatements />
                </Route>
            </Switch>
        </Container>
    )
}

