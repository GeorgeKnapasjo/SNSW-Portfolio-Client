import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import CSSBasics from './Lists'
import Class from './Class'
import Color1 from './photos/color1.PNG'
import Image from 'react-bootstrap/Image'

export default function Colours() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/Class'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/CSSBasics'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br /><br />
                <h2>Colours</h2>
                <br />
                <p>There are 3 ways we can select colours, these are RGB values (colours wheels will help with this such as https://www.rapidtables.com/web/color/RGB_Color.html), HEX values or HSL (stands for hue, saturation and lightness.)</p>
                <Image src={Color1} alt='Colour.png' fluid/>
                <p>Colours can be applied to:</p>
                <ul>
                    <li>Text (style=”color:rbg(255, 99, 71)”)</li>
                    <li>Background of our html (style=”background-color: rbg(255, 99, 71)”) </li>
                    <li>Borders (style=”border:1px solid blue”.)</li>
                </ul>
            </div>
            <Switch>
                <Route path='/Class'>
                    < Class/>
                </Route>
                <Route path='/CSSBasics'>
                    < CSSBasics/>
                </Route>
            </Switch>
        </Container>
    )
}