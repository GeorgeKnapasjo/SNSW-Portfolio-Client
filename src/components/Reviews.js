import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'

export default function Reviews() {
    const [name, setName] = useState('');
    const [rating, setRating] = useState('');
    const [message, setMessage] = useState('');
    const [review, setReview] = useState()
    const [reviews, setReveiws] = useState()


    useEffect(() => {
        fetch('http://localhost:4000/reviews')
            .then(res => res.json())
            .then(json => setReveiws(json.map(r => <Container className="border" key={r.id}>
                <p>Name: {r.name}</p>
                <p>Rating: {r.rating}</p>
                <p>Message: {r.message}</p>
            </Container>))
            )

    }, [])

    function sendReview(e) {
        e.preventDefault();
        let review = { name, rating, message };
        fetch('http://localhost:4000/reviews', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(review)
        })
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)

                if(json.status == 200){
                setReview(
                    <div>
                        <p>Name: {json.message.name}</p>
                        <p>Rating: {json.message.rating}</p>
                        <p>Message: {json.message.message}</p>
                    </div>
                )
                } else{
                    alert(json.message)
                }
    })}

return (
    <div>
        <br/>
    <Container className='border'>
        <br/>
        <h2>Write a review</h2>
        <form>
            <div className='form-group'>
                <label>Name: </label>
                <input placeholder='Name' className="form-control" onChange={(c) => setName(c.target.value)} value={name} /> <br /> <br />
                <label>Rating: </label>
                <input placeholder='Out of 5' type="number" min="1" max="5" className="form-control" onChange={(c) => setRating(c.target.value)} value={rating} /> <br /> <br />
                <label>Message: </label> <br />
                <textarea placeholder='Max 500 characters' className="form-control" onChange={(c) => setMessage(c.target.value)} value={message} cols="30" rows="10" style={{ margin: '5px', padding: '5px' }} />
                <button className="btn btn-outline-success" onClick={sendReview}>Submit</button>
            </div>
        </form>
        <Container className="border">{review}</Container>
        {reviews}
        {/* {reviews} */}
        {/* {)} */}
    </Container>
    </div>
)
}