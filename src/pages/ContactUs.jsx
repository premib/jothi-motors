import ContactUsForm from "../components/ContactUsForm/ContactUsForm";
import ContactDetails from "../components/ContactDetails/ContactDetails";

import './ContactUs.scss'

export default function ContactUs() {
    return (
        <article className="main" >
            <div className="contact-us" >
                <ContactUsForm />
                <ContactDetails />
            </div>
        </article>
    );
}