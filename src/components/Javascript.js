import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import ID from './ID'
import PageLayout from './PageLayout'
import Javascript1 from './photos/javascript.PNG'
import Javascript2 from './photos/javascript2.PNG'
import Javascript3 from './photos/javascript3.PNG'
import Javascript4 from './photos/javascript4.PNG'
import Javascript5 from './photos/javascript5.PNG'
import Image from 'react-bootstrap/Image'

export default function Javascript() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/PageLayout'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/ID'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br /><br />
                <h2>Javascript</h2>
                <br />
                <p>As we’ve seen previously, Javascript can be used to modify HTML elements to make pages more dynamic. Similar to CSS, we can write Javascript either internally or externally. If internal, we simply write out Javascript code within &lt;script&gt;&lt;/script&gt; tags. i.e.:
                </p>
                <Image src={Javascript1} alt="javascript.png" fluid />
                <p>External Javascript pages can be imported using the same &lt;script&gt; &lt;script&gt; tags, however we need to reference the page it comes from in the src=”” section, i.e.:</p>
                <Image src={Javascript2} alt="javascript.png" fluid />
                <p>We can use document.getElementById or document.getElementByClassName to allow Javascript access to HTML elements in order to modify them and innerHTML can be used to rewrite the text that appears within a HTML element.</p>
                <h4>Referencing</h4>
                <p>When referencing external pages, it is important to remember to use the correct syntax based on where the page is placed in the document. E.g.:</p>
                <p> Referencing pages in the same folder:</p>
                <Image src={Javascript3} alt="javascript.png" fluid />
                <p>Referencing pages in the root folder:</p>
                <Image src={Javascript4} alt="javascript.png" fluid />
                <p>Referencing pages in a folder above the current folder:</p>
                <Image src={Javascript4} alt="javascript.png" fluid />
            </div>
            <Switch>
                <Route path='/PageLayout'>
                    < PageLayout />
                </Route>
                <Route path='/ID'>
                    <ID />
                </Route>
            </Switch>
        </Container>
    )
}