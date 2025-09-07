import React, { useEffect } from 'react';

import ContactUsForm from "../components/ContactUsForm/ContactUsForm";
import ContactDetails from "../components/ContactDetails/ContactDetails";

import './ContactUs.scss'

export default function ContactUs() {
    useEffect(() => {
        document.title = 'Contact Us - Jothi Motor Spares';
    }, []);

    return (
        <article className="main" >
            <div className="contact-us" >
                <ContactUsForm />
                <ContactDetails />
            </div>
        </article>
    );
}