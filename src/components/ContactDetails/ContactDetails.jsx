
import WhatsaPPIcon from '@mui/icons-material/WhatsApp';
import IconButton from '@mui/material/IconButton';
import LinkIcon from '@mui/icons-material/Link';

import './contact-details.scss'

export default function ContactDetails() {
    return (<div className="contact-details">
        <h2 style={{textTransform: 'uppercase', textDecoration: 'underline'}}>Jothi Motor Spares - Contact Details</h2>

        <p>
            <strong>Email:</strong>  <a href="mailto:ashwinkumar948@gmail.com">ashwinkumar948@gmail.com<LinkIcon /></a> <br /><br />
            <strong>Phone:</strong> <a href="tel:+09786301346">+0 97863 01346<LinkIcon /></a><br /><br />
            <strong>Address:</strong> <a href='https://www.google.com/maps/place/Jothi+Motor+Spares/data=!4m2!3m1!1s0x0:0xa30bbe418b936cd1?sa=X&ved=1t:2428&ictx=111' target='_blank'>316, V.O.C. 2nd Street & Theni Main Road, Chavadi, Madurai, Tamil Nadu 625016<LinkIcon /></a>
        </p>
        <p>Feel free to reach out to us with any questions or inquiries you may have. We're here to help!</p>
        <IconButton className='whatsappButton' onClick={() => window.open('https://wa.me/919786301346', '_blank')}>
            <WhatsaPPIcon />
            <strong style={{textTransform: 'uppercase'}}>Contact us on WhatsApp</strong>
        </IconButton>
    </div>);
}