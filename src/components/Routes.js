import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import Forms from './Forms'
import Success from './Success'
import Routes1 from './photos/routes1.PNG'
import Routes2 from './photos/routes2.PNG'
import Routes3 from './photos/routes3.PNG'
import Image from 'react-bootstrap/Image'

export default function Routes() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/Success'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/Forms'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br /><br />
                <h2>Routes</h2>
                <br />
                <p>When we send a request to a server for information, whether that be GET, POST, PUT or DELETE we will need a route handler to handle that request. A route handler essentially handles that request and specifies what to do with said request and what information to send back to the client once it receives a request. A round handler will take 2 parameters, the first is the route which we are setting the handler for (set as a string) and the second is a function which is the logic we will operate when we get a request for the specified route. In node.js, we will need to download a node package in order to create route handlers, we have decided to go with express.js.</p>
                <br />
                <p>In order to install express.js, you will need to open the terminal and type npm init. This will initialize node package manager, and you will notice it will create a package.json. This is where all packages we download will be stored. Once that has finalised, to download express.js, you will need to enter npm install express --save. We will then have to import the modules into the page we require them in.</p>
                <Image src={Routes1} alt='routes.png' fluid/>
                <br />
                <p>Now we can start creating our route handlers.</p>
                <Image src={Routes2} alt='routes.png' fluid/>
                <br />
                <p>This is an example of a get request. The route we have selected is ‘/’, which is essentially the home page. If we are running off our local host, this will look like http://localhost:3000/, so when someone enters that address, we will send the text “hello world” to be displayed on the page. </p>
                <Image src={Routes3} alt='routes.png' fluid/>
                <br />
                <p>Similarly, if we are to make it a POST request, this means when someone sends a POST request (sending data to the server) we will send “hello world” as a response.</p>
            </div>
            <Switch>
                <Route path='/Success'>
                    < Success/>
                </Route>
                <Route path='/Forms'>
                    < Forms/>
                </Route>
            </Switch>
        </Container>
    )
}