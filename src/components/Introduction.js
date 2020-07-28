import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import Tables from './Tables'
import Home from './Home'

export default function Introduction() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/Tables'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/Home'><Button variant="outline-success" className='float-left'>Home</Button></Link> <br /><br />
                <h2>Introduction</h2>
                <br />
                <p>HTML (Hypertext Markup Language) is a system of using tags to stylise data. It is the basis that most websites are built with.</p>
                <p>Tags are declared using less than and greater than signs &lt;tag&gt;, and closing tags include a slash (/). Tags can also be self closing, meaning they only have one tag &lt;/tag&gt;</p>
                <h4>Block vs Inline</h4>
                <p>Tags can either be block or inline. Block elements take up the whole width of the page whereas inline only take up as much space as necessary.
                <br />Examples of some basic html tags:
                </p>
                <ul style={{ marginLeft: '15%', marginRight: "15%" }}>
                    <li>&lt;!DOCTYPE&gt; declares the document type i.e. &lt;!DOCTYPE html&gt;</li>
                    <li>&lt;html&gt; &lt;/html&gt; declares the html page</li>
                    <li>&lt;h1&gt;&lt;/h1&gt; declares a heading. Headings go from h1 to h6, with h1 being the largest and h6 the smallest.</li>
                    <li>&lt;p&gt;&lt;/p&gt; this is a paragraph tag, usually used to wrap different paragraphs in</li>
                    <li>&lt;a href="www.website.com"&gt;Link&lt;/a&gt; href= tag is used to declare a link, where the link is entered within brackets after href=. These links can have a target, which is used to declare where the link will open to. i.e.:
                    <br/><div style={{marginLeft:"5%"}}>_self is set as default and will load in the page that the document is in.</div>
                    <div style={{marginLeft:"5%"}}>_blank will open a new blank tab to load the document</div>
                    </li>
                    <li>&lt;img src="img.jpg"&gt;img tags are used to display images, where src is the source of the image.</li>
                    <li>&lt;br&gt;&lt;/br&gt;declares a page break. </li>
                    <li>&lt;div&gt;&lt;/div&gt;is a block level tag used to define a division of html. Div tags are usually used as containers for data which will be styled a certain way with css. </li>
                    <li>&lt;span&gt;&lt;/span&gt;span tags are inline tags used to define a section of html. Like div tags, they are usually used as containers in order to style certain sections of a document using css. </li>
                    <li>&lt;head&gt;&lt;/head&gt; declares the pages head, usually used for banners.</li>
                    <li>&lt;title&gt;&lt;/title&gt;declares the pages title, this will appear in the tab of the page. </li>
                    <li>&lt;body&gt;&lt;/body&gt;declares the body of the page, usually where the bulk of a pages information is written. </li>
                </ul>
            </div>
            <Switch>
                <Route path='/Tables'>
                    <Tables />
                </Route>
                <Route path='/Home'>
                    < Home />
                </Route>
            </Switch>
        </Container>
    )
}