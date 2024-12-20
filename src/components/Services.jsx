import React from 'react'
import { services } from '../data'
import '../components/services.css'

const Services = () => {
    return (
        <div className='services-container'>
            <h1 className='services-header'> Our Services</h1>
            <div className="services">
                {services.map((service) => (
                    <div key={service.id} className='services-item'>
                        <img src={service.image} alt="" className='service-image' />
                        <div className="service-content">
                            <h1>{service.title}</h1>
                            <p>{service.description}</p>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Services
