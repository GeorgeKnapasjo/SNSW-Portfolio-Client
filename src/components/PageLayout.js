import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import Javascript from './Javascript'
import Float from './Float'
import Image from 'react-bootstrap/Image'
import PageLayout1 from './photos/pagelayout.png'


export default function PageLayout() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/Float'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/Javascript'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br /><br />
                <h2>PageLayout</h2>
                <br />
                <ul>
                    <li>&lt;header&gt; &lt;header&gt;</li>
                    <li>&lt;nav&gt; &lt;nav&gt;</li>
                    <li>&lt;section&gt; &lt;section&gt;</li>
                    <li>&lt;article&gt; &lt;article&gt;</li>
                    <li>&lt;aside&gt; &lt;aside&gt;</li>
                    <li>&lt;footer&gt; &lt;footer&gt;</li>
                </ul>
                <Image src={PageLayout1} alt='pagelayout.png' fluid/>
                <p>In order to achieve this layout, we will need to use CSS. The following are CSS techniques we can use to order our pages layout.</p>
            </div>
            <Switch>
                <Route path='/Float'>
                    < Float/>
                </Route>
                <Route path='/Javascript'>
                    < Javascript/>
                </Route>
            </Switch>
        </Container>
    )
}