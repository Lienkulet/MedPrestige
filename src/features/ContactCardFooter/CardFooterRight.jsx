import React from 'react'
import './CardFooterRight.css';

const CardFooterRight = () => {
    return (
        <section className="contact-card" aria-labelledby="contact-heading">
            <form className="contact-form">
                <fieldset>
                    <div className="form-grid">
                        <div className='form-row'>
                            {/* Name */}
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email address"
                                    required
                                />
                            </div>
                        </div>

                        <div className='form-row'>
                            {/* Phone */}
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="+91"
                                />
                            </div>

                            {/* Department */}
                            <div className="form-group">
                                <label htmlFor="department">Department</label>
                                <input
                                    id="department"
                                    name="department"
                                    type="text"
                                    placeholder="Ortho"
                                />
                            </div>
                        </div>

                        <div className='form-row'>
                            {/* Time */}
                            <div className="form-group">
                                <label htmlFor="time">Time</label>
                                <input
                                    id="time"
                                    name="time"
                                    type="time"
                                    defaultValue="09:15"
                                />
                            </div>

                            {/* Date */}
                            <div className="form-group">
                                <label htmlFor="date">Date</label>
                                <input
                                    id="date"
                                    name="date"
                                    type="date"
                                />
                            </div>
                        </div>
                    </div>
                </fieldset>

                {/* Message */}
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Anything else you wanna communicate"
                    />
                </div>

                {/* Submit */}
                <footer className="form-footer">
                    <button type="submit">Submit</button>
                </footer>
            </form>
        </section>
    );
}

export default CardFooterRight

