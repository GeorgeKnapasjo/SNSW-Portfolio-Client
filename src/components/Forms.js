import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import Flexbox from './Flexbox'
import PageLayout from './PageLayout'
import Routes from './Routes'
import Image from 'react-bootstrap/Image'
import Forms1 from './photos/forms.PNG'

export default function Forms() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/Routes'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/Flexbox'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br /><br />
                <h2>Forms</h2>
                <br />
                <p>Forms are used to gather information from the user, much like a form you would fill out at your motor-registry or at the doctors would. We declare a form by surround it in &lt;form&gt;&lt;/form&gt; tags. Within the form tags, we can declar e&lt;label&gt;&lt;/label&gt; tags where we will put a question for the user to answer or indicate what sort of input we are requiring from them, and then we can use &lt;input&gt;&lt;input/&gt; tags, where the user will put their input. E.g.:</p>
                <Image src={Forms1} alt='forms.png' fluid/>
                <br />
                <br />
                <p>There are many types of inputs we can accept on a form. By default, form input is set to text, however, there are a range of other inputs we can gather from the user. These include:</p>
                <ul>
                    <li>Submit - Input type=”submit” creates a button that is used to submit the data we have gathered from the user. </li>
                    <li>Password – input type=”password” will create a textbox where the data entered will appear blanked out intended for passwords.</li>
                    <li>Radio buttons – input type=”radio” creates selectable radio buttons, much like yes/no questions you may see on an application form.</li>
                    <li>Checkbox – input type=”checkbox” creates selectable checkbox’s. Appearance wise, they are very similar to radio buttons, however checkbox’s allow you to select multiple options, whereas radio buttons allow for only one option.</li>
                    <li>Email – input type=”email” will allow only valid email addresses to be input. These are handy as they wont require us to put any extra validation for email addresses as this is built in.</li>
                    <li>Number – input type=”number” will allow only numbers in the input field.</li>
                </ul>
                <br/>
                <h4>Input Value</h4>
                <p>We can set a value (value=””) which will appear as a pre-set value in the form. 
                </p>
                <br/>
                <h4>Form attributes</h4>
                <br/>
                <ul>
                    <li>Min/max values – by using the min=”” and max=”” key words we can set minimum and maximum integers the customer is allowed to enter.</li>
                    <li>MaxLength (maxLength=””) –  allows us to set the maximum amount of characters that can be entered within our form input</li>
                    <li>Required – placing the word required in our input tag will not allow the customer to submit the form until a value is entered in the input section</li>
                    <li>Height and width – we can also set height=”” and width=”” of our input box</li>
                </ul>
                <br/>
                <br/>
                <h4>Action, Method, GET and POST</h4>
                <br/>
                <p>Once a form is complete, we will want to be able to access the information that the user has entered. Generally to do so, we send the data to our server, where we will either store, alter or send back said data to display to the customer. In order to do so, we will need to give the form an action, which is where we want to send the data when we submit, and a method, which is how we want to send the data.</p>
                <br/>
                <p>Data from a form is generally sent as either a POST or GET method. A GET request is used in order to request data from the server. GET requests send data through query strings, that is, the information is sent in the url. The most common form of a get request is simply entering a url into a search engine. When we enter a url into a search bar i.e. google.com, this is sending a request for the data found that corresponds to that url. GET requests are generally not used for forms, especially when handling sensitive information. This is due to the fact that the information is sent over the url, and anyone with half a brain can access your computers search history and have access to all the information sent in the request.  </p>            
                <br/>
                <p>A POST request is used for posting information to the server and is usually the preferred method for forms. When we use a POST request, the information we send is sent in the body of the request, as apposed to in the url. Thus, it is preferable to use a POST request when sending form information to a server. </p>
            </div>
            <Switch>
                <Route path='/Routes'>
                    < Routes/>
                </Route>
                <Route path='/Flexbox'>
                    < Flexbox/>
                </Route>
            </Switch>
        </Container>
    )
}