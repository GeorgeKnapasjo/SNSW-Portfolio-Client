import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import Images from './Images'
import CSSBasics from './CSSBasics'
import Lists1 from './photos/lists.PNG'
import Lists2 from './photos/lists2.PNG'
import Lists3 from './photos/lists3.PNG'
import Image from 'react-bootstrap/Image'

export default function Lists() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/CSSBasics'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/Images'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br /><br />
                <h2>Lists</h2>
                <br />
                <p>We can create lists in HTML to group similar items. There are a few types of lists we can create in html, these include</p>
                <br />
                <br />
                
                <h4>Unordered lists</h4>
                <p>An unordered list is used to list items without numbering said items. We declare an unordered list with &lt;ul&gt;&lt;/ul&gt; tags (stands for unordered list.) For each item we wish to add to the list we give them &lt;li&gt;&lt;/li&gt; tags (stands for list item.) The syntax will look like:</p>
                <Image src={Lists1} alt="Unordered-list.png" fluid/>
                <br />
                <br />
                <h4>Ordered lists</h4>
                <p>Ordered lists are numbered lists containing like items. We declare and ordered list with &lt;ol&gt;&lt;/ol&gt; tags (stands for ordered list.) Similar to unordered lists, list items are declared with &lt;li&gt;&lt;/li&gt; tags.</p>
                <Image src={Lists2} alt="Unordered-list.png" fluid/>
                <br />
                <br />
                <h4>Descriptive List</h4>
                <p>Descriptive lists are a way of creating a list with like items and a description of the item. A descriptive list is declared with &lt;dl&gt;&lt;/dl&gt; tags, items within the list are declared with &lt;dt&gt;&lt;/dt&gt; tags and their descriptions are declared with &lt;dd&gt;&lt;/dd&gt; tags. </p>
                <Image src={Lists3} alt="Unordered-list.png" fluid/>
            </div>
            <Switch>
                <Route path='/CSSBasics'>
                    < CSSBasics/>
                </Route>
                <Route path='/Images'>
                    < Images/>
                </Route>
            </Switch>
        </Container>
    )
}