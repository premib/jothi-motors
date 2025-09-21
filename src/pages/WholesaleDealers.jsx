import React, { useEffect } from 'react';

import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

import styles from './wholesaledealers.module.scss'

export default function WholesaleDealers() {
    useEffect(() => {
        document.title = 'Wholesale Dealers - Jothi Motor Spares';
    }, []);

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const companies = [
        {
            name: 'TATA',
            images: Array.from({ length: 26 }).map((_, index) => `/images/wholesale-dealers/tata-${index + 1}.jpg`),
            logo: '/images/wholesale-dealers/logo/tata-logo.png'
        },
        {
            name: 'FORD',
            images: Array.from({ length: 1 }).map((_, index) => `/images/wholesale-dealers/ford-${index + 1}.jpg`),
            logo: '/images/wholesale-dealers/logo/ford-logo.png'
        },
        {
            name: 'EICHER',
            images: Array.from({ length: 6 }).map((_, index) => `/images/wholesale-dealers/eicher-${index + 1}.jpg`),
            logo: '/images/wholesale-dealers/logo/eicher-logo.png'
        },
        {
            name: 'ASHOK LEYLAND',
            images: Array.from({ length: 4 }).map((_, index) => `/images/wholesale-dealers/leyland-${index + 1}.jpg`),
            logo: '/images/wholesale-dealers/logo/leyland-logo.png'
        }
        , {
            name: 'BHARAT BENZ',
            images: Array.from({ length: 3 }).map((_, index) => `/images/wholesale-dealers/benz-${index + 1}.jpg`),
            logo: '/images/wholesale-dealers/logo/benz-logo.png'
        },
        {
            name: 'TOYOTA',
            images: Array.from({ length: 4 }).map((_, index) => `/images/wholesale-dealers/toyota-${index + 1}.jpg`),
            logo: '/images/wholesale-dealers/logo/toyota-logo.png'
        },
        {
            name: 'MAHINDRA',
            images: Array.from({ length: 24 }).map((_, index) => `/images/wholesale-dealers/mahindra-${index + 1}.jpg`),
            logo: '/images/wholesale-dealers/logo/mahindra-logo.png'
        },
        {
            name: 'CHEVROLET',
            images: Array.from({ length: 4 }).map((_, index) => `/images/wholesale-dealers/chevrolet-${index + 1}.jpg`),
            logo: '/images/wholesale-dealers/logo/chevrolet-logo.png'
        },
        {
            name: 'MAZDA',
            images: Array.from({ length: 3 }).map((_, index) => `/images/wholesale-dealers/mazda-${index + 1}.jpg`),
            logo: '/images/wholesale-dealers/logo/mazda-logo.png'
        },
        {
            name: 'HYUNDAI',
            images: Array.from({ length: 6 }).map((_, index) => `/images/wholesale-dealers/hyundai-${index + 1}.jpg`),
            logo: '/images/wholesale-dealers/logo/hyundai-logo.png'
        },
        {
            name: 'NISSAN',
            images: Array.from({ length: 6 }).map((_, index) => `/images/wholesale-dealers/nissan-${index + 1}.jpg`),
            logo: '/images/wholesale-dealers/nissan logo.jpg'
        },
        {
            name: 'FORCE',
            images: Array.from({ length: 2 }).map((_, index) => `/images/wholesale-dealers/force-${index + 1}.jpg`),
            logo: '/images/wholesale-dealers/logo/force-logo.png'
        },
        {
            name: 'HONDA',
            images: Array.from({ length: 1 }).map((_, index) => `/images/wholesale-dealers/honda-${index + 1}.jpg`),
            logo: '/images/wholesale-dealers/logo/honda-logo.png'
        },
        {
            name: 'MARUTI SUZUKI',
            images: Array.from({ length: 3 }).map((_, index) => `/images/wholesale-dealers/suzuki-${index + 1}.jpg`),
            logo: '/images/wholesale-dealers/logo/suzuki-logo.png'
        }
    ]

    return (
        <article className={styles.main}>
            <TabContext value={value}>
                <Tabs onChange={handleChange} variant="scrollable" scrollButtons={"auto"} className={styles.tabs} centered
                    sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: '20px' }} >
                    {
                        companies.map((company, index) => (
                            <Tab label={company.name} value={`${index + 1}`} key={company.name} />
                        ))
                    }
                </Tabs>
                {
                    companies.map((company, index) => (
                        <TabPanel value={`${index + 1}`} key={company.name}>
                            <div className={styles['logo-container']} >
                                <img src={company.logo} alt={`${company.name} logo`} />
                            </div>
                            {company.images.map((img, imgIndex) => (
                                <div className={styles['img-container']} key={imgIndex}>
                                    <img src={img} loading='lazy'  alt={`${company.name} ${imgIndex + 1}`} />
                                </div>
                            ))}
                        </TabPanel>
                    ))
                }
            </TabContext>
        </article>
    );
}