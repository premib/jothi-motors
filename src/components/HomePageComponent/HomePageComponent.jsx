import styles from './homepage.module.scss'

import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import GavelIcon from '@mui/icons-material/Gavel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

export default function HomePageComponent() {
    const aboutUs = [
        {
            image: '/images/mission.jpeg',
            title: 'Our Mission',
            information: 'To provide reliable, quality auto parts and accessories with excellent service and expert guidance, supporting both mechanics and DIY enthusiasts through a well-managed inventory and efficient process.'
        },
        {
            image: '/images/vision.jpg',
            title: 'Our Vision',
            information: 'To be the leading one-stop destination for auto parts and services, known for outstanding customer care, a wide product range, and future-ready solutions including sustainable and EV components.'
        },
        {
            image: '/images/values.jpg',
            title: 'Our Values',
            information: 'Customer Focus, Integrity, Quality, Expertise, Convenience, and Community Engagement—guiding everything we do to ensure trust, reliability, and long-term relationships.'
        }
    ]

    const aboutUsSmall = [
        {
            image: WorkOutlineIcon,
            title: 'Nature of Business',
            information: 'Retailer'
        },
        {
            image: GavelIcon,
            title: 'Legal Status of Firm',
            information: 'Partnership'
        },
        {
            image: AttachMoneyIcon,
            title: 'Annual Turnover',
            information: '1.5 - 5 Cr'
        },
        {
            image: AccountBalanceIcon,
            title: 'GST Registration Date',
            information: '01-07-2017'
        },
        {
            image: ReceiptLongIcon,
            title: 'GST Number',
            information: '33AAIFJ1362J1ZG'
        }
    ]


    return (
        <>
            <div className={styles['hero']} alt="Home Image" />
            <div className={styles['main-description']}>
                <h1>
                    We are an Automobile part dealer offering a wide range of specialized automotive components and accessories.
                </h1>
            </div>
            <article className={'main'}>
                <section className={styles['added-content']}>
                    <section className={styles['content']}>
                        Our journey began back in 1979, and since then, we’ve worked hard to build a trusted name in this field. You can find us at <a target='_blank' href="https://www.google.com/maps/place/Jothi+Motor+Spares/@9.9336539,78.0898707,17z/data=!3m1!4b1!4m6!3m5!1s0x3b00cf6a0b7746c3:0xa30bbe418b936cd1!8m2!3d9.9336539!4d78.092451!16s%2Fg%2F11b7xr8cmg!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"><strong>No. 316, VOC 2nd Street, Theni Main Road, Arasaradi-625016, near Pandian Motor & P P Chavadi</strong></a>, which is a well-known landmark in the area.
                        <br /><br />
                        The core function of our company is that, we source auto parts from top automotive industries in North India and supply them to stores that are present in Tamil Nadu with a aim to give top quality products to our customers at a reasonable and affordable price
                        <br /><br />
                        Our goal has always been to make every customer’s experience positive through the products and services we offer. To make transactions easy and seamless, we accept payments through UPI and cash, ensuring that the process is smooth for everyone.
                        <br /><br />
                        Customer satisfaction has always been at the core of our business. We believe in building long-term relationships by providing top-quality products and reliable service.
                    </section>
                    <img src="/images/added-content.webp" alt="jothi motors" className={styles['content-image']} />
                </section>

                <section className={styles['about-us']}>
                    <h2 className={styles['title']}>About Us</h2>
                    <div className={styles.aboutUsCards}>
                        {
                            aboutUsSmall.map((item, index) => (
                                <section className={styles.card} key={index}>
                                    <span>
                                        <item.image style={{ fontSize: 35 }} />
                                    </span>
                                    <h4 className={styles.title}>{item.title}</h4>
                                    <h3 className={styles.information}>{item.information}</h3>
                                </section>
                            ))
                        }
                    </div>
                    <div className={styles['cards']}>
                        {
                            aboutUs.map((item, index) => (
                                <section className={`card ${styles.card}`} key={index}>
                                    <img src={item.image} alt={item.title} />
                                    <h2 className={styles['title']}>{item.title}</h2>
                                    <p className={styles['information']}>{item.information}</p>
                                </section>
                            ))
                        }
                    </div>
                </section>
            </article>
        </>
    )
}