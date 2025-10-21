import React, { useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import styles from '../pages/wholesaledealers.module.scss'
import pageStyles from './autospares.module.scss'

export default function PriceList() {
    useEffect(() => {
        document.title = 'Price List - Jothi Motor Spares';
    }, []);

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const companies = [
        {
            "name": "UJ CROSS",
            "images": Array.from({ length: 2 }).map((_, index) => `/images/price-list/uj-cross-${index + 1}.jpg`)
        },
        {
            "name": "LONG FORK",
            "images": Array.from({ length: 1 }).map((_, index) => `/images/price-list/long-fork-${index + 1}.jpg`)
        },
        {
            "name": "REAR HOUSING",
            "images": Array.from({ length: 1 }).map((_, index) => `/images/price-list/rear-housing-${index + 1}.jpg`)
        },
        {
            "name": "SLEEVE YORK",
            "images": Array.from({ length: 1 }).map((_, index) => `/images/price-list/sleeve-york-${index + 1}.jpg`)
        },
        {
            "name": "REAR TEETH",
            "images": Array.from({ length: 2 }).map((_, index) => `/images/price-list/rear-teeth-${index + 1}.jpg`)
        },
        {
            "name": "FRONT TEETH",
            "images": Array.from({ length: 2 }).map((_, index) => `/images/price-list/front-teeth-${index + 1}.jpg`)
        },
        {
            "name": "CROSS HOLDER",
            "images": Array.from({ length: 3 }).map((_, index) => `/images/price-list/cross-holder-${index + 1}.jpg`)
        },
        {
            "name": "STUB BALL HALF YOKE",
            "images": Array.from({ length: 2 }).map((_, index) => `/images/price-list/stub-ball-yoke-${index + 1}.jpg`)
        },
        {
            "name": "CENTRE COUPLING FLANGE",
            "images": Array.from({ length: 2 }).map((_, index) => `/images/price-list/center-coupling-flange-${index + 1}.jpg`)
        },
        {
            "name": "DIFFERENTIAL COUPLING FLANGE",
            "images": Array.from({ length: 1 }).map((_, index) => `/images/price-list/differential-coupling-flange-${index + 1}.jpg`)
        },
        {
            "name": "GEAR COUPLING FLANGE",
            "images": Array.from({ length: 2 }).map((_, index) => `/images/price-list/gear-coupling-flange-${index + 1}.jpg`)
        },
        {
            "name": "CLUTCH FORK",
            "images": Array.from({ length: 1 }).map((_, index) => `/images/price-list/clutch-fork-${index + 1}.jpg`)
        },
        {
            "name": "PITMAN ARM",
            "images": Array.from({ length: 1 }).map((_, index) => `/images/price-list/pitman-arm-${index + 1}.jpg`)
        },
        {
            "name": "STEERING CROSS",
            "images": Array.from({ length: 1 }).map((_, index) => `/images/price-list/steering-cross-${index + 1}.jpg`)
        },
        {
            "name": "DIFFERENTIAL CAGE",
            "images": Array.from({ length: 1 }).map((_, index) => `/images/price-list/differential-cage-${index + 1}.jpg`)
        },
        {
            "name": "FLY WHEEL RING",
            "images": Array.from({ length: 1 }).map((_, index) => `/images/price-list/fly-wheel-ring-${index + 1}.jpg`)
        },
        {
            "name": "CLUTCH LEVER REPAIR KIT",
            "images": Array.from({ length: 1 }).map((_, index) => `/images/price-list/clutch-lever-repair-kit-${index + 1}.jpg`)
        },
        {
            "name": "CENTER BEARING ASSEMBLY",
            "images": Array.from({ length: 1 }).map((_, index) => `/images/price-list/center-bearing-assembly-${index + 1}.jpg`)
        },
        {
            "name": "CENTER BREAKING RUBBER",
            "images": Array.from({ length: 1 }).map((_, index) => `/images/price-list/center-breaking-rubber-${index + 1}.jpg`)
        },
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
                        <TabPanel className={pageStyles['image-container']} value={`${index + 1}`} key={company.name}>
                            {company.images.map((img, imgIndex) => (
                                <div className={styles['img-container']} key={imgIndex}>
                                    <img src={img} loading='lazy' alt={`${company.name} ${imgIndex + 1}`} />
                                </div>
                            ))}
                        </TabPanel>
                    ))
                }
            </TabContext>
        </article>
    );
}