import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import Lists from './Lists'
import TextFormatting from './TextFormatting'
import Images1 from './photos/images1.PNG'
import Images2 from './photos/images2.PNG'
import Images3 from './photos/images3.PNG'
import Images4 from './photos/images4.PNG'
import Image from 'react-bootstrap/Image'

export default function Images() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/Lists'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/TextFormatting'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br /><br />
                <h2>Images</h2>
                <br />
                <p>As we saw previously, we can add an image to a website using an &lt;img&gt; tag. Within the tag, we define the image source with src= and add alternative text (alt=) incase the image doesn’t load. This looks like: </p>
                <Image src={Images1} alt="htmlimages.png" fluid/>
                <br />
                <br />
                <h4>Image styling</h4>
                <p>Like other html elements, images can have styling. We can modify the size of the image by: </p>
                <Image src={Images2} alt="htmlimages.png" fluid/>
                <br />
                <br />
                <h4>Image links</h4>
                <p>Links can also be embedded in images by using the &lt;a href=””&gt; tag:</p>
                <Image src={Images3} alt="htmlimages.png" fluid/>
                <br/>
                <br/>
                <h4>Background Images</h4>
                Images can also be used in the background by defining this as a style
                <Image src={Images4} alt="htmlimages.png" fluid/>
            </div>
            <Switch>
                <Route path='/Lists'>
                    < Lists/>
                </Route>
                <Route path='/TextFormatting'>
                    < TextFormatting/>
                </Route>
            </Switch>
        </Container>
    )
}