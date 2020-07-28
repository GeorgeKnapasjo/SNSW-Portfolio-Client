import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import Introduction from './Introduction'
import TextFormatting from './TextFormatting'
import Tablesimg from './photos/tables.PNG'
import Image from 'react-bootstrap/Image'

export default function Tables() {
    return (
        <Container>
            <br />
            <div className='border'>
                <Link to='/TextFormatting'><Button variant="outline-success" className='float-right'>Next page</Button></Link>
                <Link to='/Introduction'><Button variant="outline-success" className='float-left'>Prev page</Button></Link> <br /><br />
                <h2>Tables</h2>
                <br />
                <p>Tables are declared using &lt;table&gt;&lt;/table&gt; tags. Rows are defined with &lt;tr&gt;&lt;/tr&gt; tags. The headings of the table are used set with &lt;th&gt;&lt;/th&gt; tags and table data is set with &lt;td&gt;&lt;/td&gt;tags. E.g.</p>
                <Image src={Tablesimg} alt='Tables.png'fluid/>
            </div>
            <Switch>
                <Route path='/Introduction'>
                    < Introduction/>
                </Route>
                <Route path='/TextFormatting'>
                    <TextFormatting />
                </Route>
            </Switch>
        </Container>
    )
}