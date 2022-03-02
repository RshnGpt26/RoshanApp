import React, { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: ''
    });

    const InputEvent = (Event) => {
        const { name, value } = Event.target;
        setData((prevVal) => {
            return {
                ...prevVal,
                [ name ]: value,
            }
        });
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullName}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.message}.`);
    }
    
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="fullName" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="fullName" placeholder="Enter your name" name="fullName" value={data.fullName} onChange={InputEvent} />
                            </div>
                            <div className="mb-3">
                                <label for="phone" className="form-label">Phone</label>
                                <input type="number" className="form-control" id="phone" placeholder="Enter your mobile number" name="phone" value={data.phone} onChange={InputEvent} />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" value={data.email} onChange={InputEvent} />
                            </div>
                            <div className="mb-3">
                                <label for="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="3" name="message" value={data.message} onChange={InputEvent}></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;