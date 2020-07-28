import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import Forms from './Forms'
import Float from './Float'
import Image from 'react-bootstrap/Image'
import Flexbox1 from './photos/flexbox1.png'
import Flexbox2 from './photos/flexbox2.PNG'
import Flexbox3 from './photos/flexbox3.png'
import Flexbox4 from './photos/flexbox4.png'
import Flexbox5 from './photos/flexbox5.png'
import Flexbox6 from './photos/flexdirection.svg'
// import Flexbox7 from './photos/flexgrow.png'

export default function Flexbox() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/Forms'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/Float'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br /><br />
                <h2>Flexbox</h2>
                <br />
                <p>CSS flex box involves placing elements into containers, where we can alter their size, order, spacing  and alignment within said container. We can then order the containers on the page to create our layout. 
                </p>
                <Image src={Flexbox1} alt='flexbox.png' fluid/>
                <h4>Flex Containers</h4>
                <p>As stated previously, we declare flex containers which will hold the content we wish to display on the page. In order to declare a flex container, we need to give it the CSS display property of flex, i.e.</p>
                <Image src={Flexbox2} alt='flexbox.png' fluid/>
                <br/>
                <br/>
                <h4>Flex Direction</h4>
                <ul>
                    <li>Row - Items are ordered left to right</li>
                    <li>Row-reverse - Items are ordered right to left</li>
                    <li>Column - Items are ordered from top to bottom</li>
                    <li>Column-reverse - Items are ordered from bottom to top</li>
                </ul>
                <Image src={Flexbox6} alt='flexbox.png' fluid/>
                <br/>
                <br/>
                <h4>Flex Wrap</h4>
                <ul>
                    <li>No-wrap - The size of the flex items will be modified so that they all fit on one line</li>
                    <li>Wrap - Flex items will wrap onto the next line from top to bottom</li>
                    <li>Wrap-reverse - Flex items will wrap onto the next line from bottom to top</li>
                </ul>
                <Image src={Flexbox3} alt='flexbox.png' fluid/>
                <br/>
                <br/>
                <h4>Justify Content</h4>
                <ul>
                    <li>Flex-start – items are justified towards the start of the flex container</li>
                    <li>Flex-end – items are justified towards the opposite end of the start position of the container</li>
                    <li>Center – items are justified within the centre of the flex container</li>
                    <li>Space-between – items are evenly spaced across the width of the flex container, with the first item being at the start position and the final element being at the end position.</li>
                    <li>Space-around – items are given the same amount of spacing that surrounds the item. i.e. if items are given a 1px space around, this means there will be a 2px gap between each item (adding the space around each item) and a 1px gap between start and end positions.</li>
                    <li>Space-evenly – an even space is given both between each item and between the start and end positions of the flex container. Note the difference between space around and evenly is the space given between start and end positions of the container.</li>
                </ul>
                <Image src={Flexbox4} alt='flexbox.png' fluid/>
                <br/>
                <br/>
                <h4>Align Items</h4>
                <ul>
                    <li>Flex-start – all items are aligned with the start of the flex container (top of the page generally.)</li>
                    <li>Flex-end – all items are aligned with the end of the flex container (generally the bottom.)</li>
                    <li>Flex-center – items are aligned within the centre of the flex container.</li>
                    <li>Flex-stretch – items are stretched to all fit evenly across the vertical axis</li>
                    <li>Baseline – the centre of each item is set inline with a baseline </li>
                </ul>
                <Image src={Flexbox5} alt='flexbox.png' fluid/>
                <br/>
                <br/>
                <h4>Flex Items/Child Elements</h4>
                <p></p>
            </div>
            <Switch>
                <Route path='/Forms'>
                    < Forms/>
                </Route>
                <Route path='/Float'>
                    < Float/>
                </Route>
            </Switch>
        </Container>
    )
}