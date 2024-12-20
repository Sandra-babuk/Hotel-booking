import React, { useState } from 'react';
import discover from '../assets/discover.jpg';
import '../components/newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = () => {
        if (email.trim() === '') {
            alert('Please enter your email address before subscribing.');
        } else {
            alert(`Thank you for subscribing with ${email}!`);
            // Here you can add further subscription handling logic such as API calls.
            setEmail(''); // Clear the input field after subscription
        }
    };

    return (
        <div className='newsletter-container'>
            <div className="newsletter-wrapper">
                <div className="newsletter-image">
                    <img src={discover} alt="Discover" />
                </div>
                <div className="newsletter-content">
                    <h1>Explore the World With Us</h1>
                    <p>Subscribe to see secret deals and prices drop the moment you sign-up.</p>
                    <div className="input-container">
                        <input 
                            type="email" 
                            placeholder='Enter your email' 
                            value={email} 
                            onChange={handleInputChange} 
                        />
                        <button 
                            className="subscribe-button" 
                            onClick={handleSubscribe}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
