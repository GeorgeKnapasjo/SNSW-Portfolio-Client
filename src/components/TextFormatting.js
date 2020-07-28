import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import Tables from './Tables'
import Images from './Images'

export default function TextFormatting() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/Images'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/Tables'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br /><br />
                <h2>TextFormatting</h2>
                <br />
                <ul>
                    <li>&lt;b&gt; &lt;/b&gt;: Will make text <b>bold</b> </li>
                    <li>&lt;/strong&gt; &lt;/strong&gt;: Visually similar to bold tags, however strong tags semantically <strong>emphasize</strong> the word.</li>
                    <li>&lt;i&gt; &lt;/i&gt;: Used to put text in <i>italics</i></li>
                    <li>&lt;mark&gt; &lt;/mark&gt;: <mark>Highlights</mark> text</li>
                    <li>&lt;del&gt; &lt;/del&gt;: Puts a <del>line</del> through the text</li>
                </ul>
            </div>
            <Switch>
                <Route path='/Images'>
                    <Images />
                </Route>
                <Route path='/Tables'>
                    < Tables/>
                </Route>
            </Switch>
        </Container>
    )
}