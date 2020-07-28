import React from 'react'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import Basics from './Basics'
import Home from './Home'
import HelloWorldImage from './photos/hworld.PNG'
import Image from 'react-bootstrap/Image'

export default function HelloWorld() {
    return (
        <Container>
            <br />
            <div className='border'>
                {/* <ButtonGroup > */}
                <Link to ='/Home'><Button variant="outline-success" className="float-left">Home</Button></Link>
                    <Link to='/Basics'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                {/* </ButtonGroup> */}
                <br />
                <br />
                <h2>Hello World!</h2>
                <br />
                <p>
                    In this first project we are going to learn how to write “hello world” to the console. By writing the command console.log(“helloWorld”); into visual studio code and running it in the terminal, we will see “HelloWorld” in the  terminal.
                </p>
                <Image src={HelloWorldImage} alt="HelloWorld.PNG" fluid/>

            </div>
            <Switch>
                <Route path='/Basics'>
                    <Basics/>
                </Route>
                <Route path='/Home'>
                    <Home/>
                </Route>
            </Switch>
        </Container>

    )
}