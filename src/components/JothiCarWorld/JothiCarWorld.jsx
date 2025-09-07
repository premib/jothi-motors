
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import GavelIcon from '@mui/icons-material/Gavel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import Carousel from 'react-multi-carousel';
import ButtonOne from '@mui/icons-material/ArrowBackIos';
import ButtonTwo from '@mui/icons-material/ArrowForwardIos';
import ButtonThree from '@mui/icons-material/TripOrigin';
import 'react-multi-carousel/lib/styles.css';

import inheritedStyles from '../HomePageComponent/homepage.module.scss'
import styles from './jothicarworld.module.scss'

const aboutUs = [
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
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1280 },
        items: 3,
        partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
        breakpoint: { max: 1280, min: 768 },
        items: 2,
        partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
        partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    }
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className={styles['carousel-button-group']}>
            <div className={styles['left']}>
                <ButtonOne className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
            </div>
            <div className={styles['right']}>
                <ButtonTwo onClick={() => next()} />
            </div>
        </div>
    );
};

const CustomDot = ({ onClick, active }) => {
    return (
        <li
            className={`${styles['custom-dot']} ${active ? styles.active : ""}`}
            onClick={onClick}
        />
    );
};


export default function JothiCarWorld() {
    return (
        <>
            <div className={inheritedStyles.hero} alt="Home Image" />
            <div className={inheritedStyles['main-description']}>
                <h1>
                    Jothi Car World provides you the best range of brake parts, automotive lubricants & other products with effective & timely delivery.
                </h1>
            </div>
            <article className='main'>
                <section className={`${inheritedStyles['about-us']} ${styles['about-us']}`}>
                    <h2 className={styles.title}>About Us</h2>
                    <p className={styles.description}>
                        Jothi Car World, based in Madurai, Tamil Nadu, India, offers a wide range of high-quality automotive products.
                        We specialize in reliable <strong>brake parts</strong> designed for durability and safety.
                        Our collection also includes premium <strong>automotive lubricants</strong> that ensure smooth vehicle performance.
                        In addition, we supply trusted <strong>electrical parts</strong> suitable for various vehicle needs.
                        We proudly cater to both <strong>light commercial vehicles</strong> and <strong>heavy vehicles</strong>, meeting diverse customer requirements.<br />
                        <br />
                    </p>
                    <div className={styles.cards}>
                        {
                            aboutUs.map((item, index) => (
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
                    <p style={{ textAlign: 'left', marginTop: '40px' }}>
                        <strong>Our Commitment:</strong> We are dedicated to delivering products that meet the highest standards of quality and reliability. Our team ensures every customer receives personalized service and expert guidance for their automotive needs.<br />
                        <strong>Why Choose Us?</strong> With years of experience in the industry, we have built a reputation for trust and excellence. Our extensive inventory, competitive pricing, and prompt delivery make us the preferred choice for automotive spares in the region.<br />
                        <strong>Customer Satisfaction:</strong> At Jothi Car World, customer satisfaction is our top priority. We strive to exceed expectations by offering tailored solutions and ongoing support for all our clients.
                    </p>
                </section>
                <section className={inheritedStyles['our-products']}>
                    <h2 className={styles.title}>Our Products</h2>
                    <p>
                        We offer a comprehensive selection of automotive spares including brake components, engine oils, lubricants, filters, electrical parts, and more. Our products are suitable for a variety of vehicles, ensuring quality and reliability for both commercial and personal use.
                    </p>
                    <div className={styles['carousel-wrapper']}>
                        <Carousel
                            showDots={true}
                            responsive={responsive}
                            customButtonGroup={<ButtonGroup />}
                            renderButtonGroupOutside={true}
                            customDot={<CustomDot />}
                            renderDotsOutside={true}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            arrows={false}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass={styles["custom-dot-list-style"]}
                            itemClass="carousel-item-padding-40-px"
                        >
                            {
                                Array.from({ length: 6 }).map((_, index) => (
                                    <div key={index} style={{ padding: '10px' }}>
                                        <img src={`/images/product${index + 1 }.jpg`} alt={`Product ${index + 1}`} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
                                    </div>
                                ))
                            }
                        </Carousel>
                    </div>
                </section>
                {/* <section>
                    <h2 className={styles.title}>Our Partners</h2>
                    <div className={styles['carousel-wrapper']}>
                        <Carousel
                            centerMode
                            showDots={true}
                            responsive={responsive}
                            customButtonGroup={<ButtonGroup />}
                            renderButtonGroupOutside={true}
                            customDot={<CustomDot />}
                            renderDotsOutside={true}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            arrows={false}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass={styles["custom-dot-list-style"]}
                            itemClass="carousel-item-padding-40-px"
                        >
                            {
                                Array.from({ length: 8 }).map((_, index) => (
                                    <div key={index} style={{ padding: '10px' }}>
                                        <img src={`/images/partner${(index % 4) + 1}.jpg`} alt={`Product ${index + 1}`} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
                                    </div>
                                ))
                            }
                        </Carousel>
                    </div>
                </section> */}
            </article>
        </>
    )
}
