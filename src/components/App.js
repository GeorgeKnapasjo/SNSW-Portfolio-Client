import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Reviews from './Reviews'
import { Dropdown } from 'react-bootstrap';
import HelloWorld from './HelloWorld'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Basics from './Basics'
import Operators from './Operators'
import CombinigStrings from './CombiningStrings'
import IfAndElseStatements from './IfAndElseStatements'
import ComparisonOperators from './ComparisonOperators'
import Arrays from './Arrays'
import IncrementorDecrementorOperators from './IncrementorDecrementorOperators'
import Loops from './Loops'
import BasicDebugging from './BasicDebugging'
import Objects from './Objects'
import FunctionsAndObjectMethods from './FunctionsAndObjectMethods'
import AndOrNotOperators from './AndOrNotOperators'
import ArrayExtensionMethods from './ArrayExtensionMethods'
import StringExtensionMethods from './StringExtensionMethods'
import Classes from './Classes'
import ArrowFunctions from './ArrowFunctions'
import Exceptions from './Exceptions'
import JSON from './JSON'
import SpreadSyntax from './SpreadSyntax'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './App.css'
import Variables from './Variables'
import AboutMe from './AboutMe'
import Home from './Home'
import ThankYou from './ThankYou'
import Introduction from './Introduction'
import Tables from './Tables'
import TextFormatting from './TextFormatting'
import Images from './Images'
import Lists from './Lists'
import CSSBasics from './CSSBasics'
import Colours from './Colours'
import Class from './Class'
import ID from './ID'
import Javascript from './Javascript'
import PageLayout from './PageLayout'
import Float from './Float'
import Flexbox from './Flexbox'
import Forms from './Forms'
import Routes from './Routes'
import Projects from './Projects'


//INSTALL REACT DOM/REACTROUTERDOM
function App() {
  return (

    <Router>
      <Container>
        <div class="header">
         <a href='/Home' style={{textDecoration:'none'}}><h1 style={{color:'#555555'}}> W6schools<span className="text-success">.com</span> </h1></a>
         <p>Because 6 is twice as good as 3</p>
          </div>
        <Navbar bg="dark" variant='dark'>
          <Nav className="mr-auto justify-content-between w-100">
            <NavDropdown title="Javascript">
              <NavDropdown.Item href="/HelloWorld">Hello World</NavDropdown.Item>
              <NavDropdown.Item href="/Basics">Basics</NavDropdown.Item>
              <NavDropdown.Item href="/Variables">Variables</NavDropdown.Item>
              <NavDropdown.Item href="/Operators">Operators </NavDropdown.Item>
              <NavDropdown.Item href="/CombiningStrings">Combining strings</NavDropdown.Item>
              <NavDropdown.Item href="/IfAndElseStatements">If and Else Statements</NavDropdown.Item>
              <NavDropdown.Item href="/ComparisonOperators">Comparison Operators</NavDropdown.Item>
              <NavDropdown.Item href="Arrays">Arrays</NavDropdown.Item>
              <NavDropdown.Item href="IncrementorDecrementorOperators">Incrementor/Decrementor Operators</NavDropdown.Item>
              <NavDropdown.Item href="/Loops">Loops</NavDropdown.Item>
              <NavDropdown.Item href="/BasicDebugging">Basic Debugging</NavDropdown.Item>
              <NavDropdown.Item href="/Objects">Objects</NavDropdown.Item>
              <NavDropdown.Item href="/FunctionsAndObjectMethods">Functions and Object methods</NavDropdown.Item>
              <NavDropdown.Item href="/AndOrNotOperators">And Or and Not Operators</NavDropdown.Item>
              <NavDropdown.Item href="/ArrayExtensionMethods">Array Extension Methods</NavDropdown.Item>
              <NavDropdown.Item href="/StringExtensionMethods">String Extension Methods</NavDropdown.Item>
              <NavDropdown.Item href="/Classes">Classes</NavDropdown.Item>
              <NavDropdown.Item href="/ArrowFunctions">Arrow Functions</NavDropdown.Item>
              <NavDropdown.Item href="/Exceptions">Exceptions</NavDropdown.Item>
              <NavDropdown.Item href="/JSON">JSON</NavDropdown.Item>
              <NavDropdown.Item href="/SpreadSyntax">Spread Syntax</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="HTML/CSS">
              <NavDropdown.Item href='/Introduction'>Introduction</NavDropdown.Item>
              <NavDropdown.Item href='/Tables'>Tables</NavDropdown.Item>
              <NavDropdown.Item href='/TextFormatting'>Text Formating</NavDropdown.Item>
              <NavDropdown.Item href='/Images'>Images</NavDropdown.Item>
              <NavDropdown.Item href='/Lists'>Lists</NavDropdown.Item>
              <NavDropdown.Item href='/CSSBasics'>CSS Basics</NavDropdown.Item>
              <NavDropdown.Item href='/Colours'>Colours</NavDropdown.Item>
              <NavDropdown.Item href='/Class'>Class</NavDropdown.Item>
              <NavDropdown.Item href='/ID'>ID</NavDropdown.Item>
              <NavDropdown.Item href='/Javascript'>Javascript</NavDropdown.Item>
              <NavDropdown.Item href='/PageLayout'>Page Layout</NavDropdown.Item>
              <NavDropdown.Item href='/Float'>Float</NavDropdown.Item>
              <NavDropdown.Item href='Flexbox'>Flexbox</NavDropdown.Item>
              <NavDropdown.Item href='/Forms'>Forms</NavDropdown.Item>
              <NavDropdown.Item href='/Routes'>Routes</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="React">
              <NavDropdown.Item></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/reviews'>Testimonials</Nav.Link>
            <Nav.Link href="/about-me">About Me</Nav.Link>
            <Nav.Link href='/projects'>My Projects</Nav.Link>
            <Nav.Link href='/thankyou'>Thank you</Nav.Link>
          </Nav>
        </Navbar>
      </Container>

      <Switch>
        <Route path="/thankyou">
          <ThankYou />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/reviews">
          <Reviews />
        </Route>
        <Route path='/HelloWorld'>
          <HelloWorld />
        </Route>
        <Route path='/Basics'>
          <Basics />
        </Route>
        <Route path='/Variables'>
          <Variables />
        </Route>
        <Route path='/Operators'>
          <Operators />
        </Route>
        <Route path='/CombiningStrings'>
          <CombinigStrings />
        </Route>
        <Route path='/IfAndElseStatements'>
          <IfAndElseStatements />
        </Route>
        <Route path='/ComparisonOperators'>
          <ComparisonOperators />
        </Route>
        <Route path='/Arrays'>
          <Arrays />
        </Route>
        <Route path='/IncrementorDecrementorOperators'>
          <IncrementorDecrementorOperators />
        </Route>
        <Route path='/Loops'>
          <Loops />
        </Route>
        <Route path='/BasicDebugging'>
          <BasicDebugging />
        </Route>
        <Route path='/Objects'>
          <Objects />
        </Route>
        <Route path='/FunctionsAndObjectMethods'>
          <FunctionsAndObjectMethods />
        </Route>
        <Route path='/AndOrNotOperators'>
          <AndOrNotOperators />
        </Route>
        <Route path='/ArrayExtensionMethods'>
          <ArrayExtensionMethods />
        </Route>
        <Route path='/StringExtensionMethods'>
          <StringExtensionMethods />
        </Route>
        <Route path='/Classes'>
          <Classes />
        </Route>
        <Route path='/ArrowFunctions'>
          <ArrowFunctions />
        </Route>
        <Route path='/Exceptions'>
          <Exceptions />
        </Route>
        <Route path='/JSON'>
          <JSON />
        </Route>
        <Route path='/SpreadSyntax'>
          <SpreadSyntax />
        </Route>
        <Route path='/about-me'>
          <AboutMe />
        </Route>
        <Route path='/Introduction'>
          <Introduction />
        </Route>
        <Route path='/Tables'>
          <Tables />
        </Route>
        <Route path='/TextFormatting'>
          <TextFormatting />
        </Route>
        <Route path='/Images'>
          <Images />
        </Route>
        <Route path='/Lists'>
          <Lists />
        </Route>
        <Route path='/CSSBasics'>
          <CSSBasics />
        </Route>
        <Route path='/Colours'>
          <Colours />
        </Route>
        <Route path='/Class'>
          <Class />
        </Route>
        <Route path='/ID'>
          <ID />
        </Route>
        <Route path='/Javascript'>
          <Javascript />
        </Route>
        <Route path='/PageLayout'>
          <PageLayout />
        </Route>
        <Route path='/Float'>
          <Float />
        </Route>
        <Route path='/Flexbox'>
          <Flexbox />
        </Route>
        <Route path='/Forms'>
          <Forms />
        </Route>
        <Route path='/Routes'>
          <Routes />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
