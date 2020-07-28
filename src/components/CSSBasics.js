import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import Lists from './Lists'
import Colours from './Colours'
import CSSBasics1 from './photos/CSSbasics.PNG'
import CSSBasics2 from './photos/CSSbasics2.PNG'
import CSSBasics3 from './photos/CSSbasics3.PNG'
import CSSBasics4 from './photos/CSSbasics4.PNG'
import Image from 'react-bootstrap/Image'

export default function CSSBasics() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/Colours'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/Lists'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br /><br />
                <h2>CSSBasics</h2>
                <br />
                <p>CSS stands for cascading style sheets and is used to add styling to and aid in laying out your website. CSS can be implemented in 3 ways:</p>
                <h4>Inline</h4>
                <p>Written within the tag you are using i.e.</p>
                <Image src={CSSBasics1} alt="Inline-style.png" fluid/>
                <br />
                <br />
                <h4>Internal</h4>
                <p>CSS styles are written within the same page in the head tag. To declare the internal styling we use the &lt;style&gt; tags:</p>
                <Image src={CSSBasics2} alt="Inline-style.png" fluid/>
                <br />
                <br />
                <h4>External</h4>
                <p>An external stylesheet is written in a separate page and imported into the page you wish. This can be helpful if you want to apply the same styling to multiple pages. To import a style sheet we use &lt;link&gt; tags. This looks like:</p>
                <Image src={CSSBasics3} alt="Inline-style.png" fluid/>
                <br />
                <br />
                <h4>Important Note</h4>
                <p>It is important to remember in what order the page will render/apply your CSS. Pages are loaded from the top down, where external and internal stylesheets are loaded first and inline style is loaded second. This means that any styling written inline will override any external and internal stylesheets that apply to the same components. i.e.</p>
                <Image src={CSSBasics4} alt="Inline-style.png" fluid/>
                <p>Because we have put inline styling that applies to the body, it will override the internal stylesheet.</p>
                
                <br />
                <h4>Basic styling</h4>
                <ul>
                    <li>Background Colour (style=bakcground-color:'color'): Sets the background colour</li>
                    <li>Color (style=color:'color): Sets the colour of the text</li>
                    <li>Font family (style=font-family:'times'): Used to change a texts font </li>
                    <li>Font size (style=font-size:'15px'): Sets font size</li>
                    <li>Text-align (style=text-align:'center'): Used to align text</li>
                    <li>Border (style=border:'1px solid black'): Adds a border around an element</li>
                    <li>Padding (style=padding:'5px'): Will add space around an elements text and the outside of the element.</li>
                    <li>Margin (style=margin:'5px'): Will add space on the outside of/around the element.</li>
                    <li>Height/Width (style=height:'720px', style=width: '1080px'): Used to set the dimensions of html elements.</li>
                </ul>

            </div>
            <Switch>
                <Route path='/Colours'>
                    < Colours/>
                </Route>
                <Route path='/Lists'>
                    < Lists/>
                </Route>
            </Switch>
        </Container>
    )
}