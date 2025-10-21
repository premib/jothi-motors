import React, { useEffect } from 'react';

import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

import styles from '../pages/wholesaledealers.module.scss'
import pageStyles from './autospares.module.scss'


export default function AutoSpares() {
    useEffect(() => {
        document.title = 'Wholesale Dealers - Jothi Motor Spares';
    }, []);

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const companies = [
        {
            name: 'COMMERCIAL BUSH',
            images: Array.from({ length: 2 }).map((_, index) => `/images/auto-spares/commercial-bush-${index + 1}.jpg`),
            logo: '/images/auto-spares/logo/tata-logo.png'
        },
        {
            name: 'SPRING BUSH',
            images: Array.from({ length: 2 }).map((_, index) => `/images/auto-spares/spring-bush-${index + 1}.jpg`),
            logo: '/images/auto-spares/logo/ford-logo.png'
        },
        {
            name: 'FUEL LINES',
            images: Array.from({ length: 3 }).map((_, index) => `/images/auto-spares/fuel-lines-${index + 1}.jpg`),
            logo: '/images/auto-spares/logo/eicher-logo.png'
        },
        {
            name: 'LIGHTS',
            images: Array.from({ length: 21 }).map((_, index) => `/images/auto-spares/lights-${index + 1}.jpg`),
            logo: '/images/auto-spares/logo/suzuki-logo.png'
        },
        {
            name: 'FUEL TANK CAP',
            images: Array.from({ length: 2 }).map((_, index) => `/images/auto-spares/fuel-tank-cap-${index + 1}.jpg`),
            logo: '/images/auto-spares/logo/leyland-logo.png'
        }
        , {
            name: 'AUTOMATIVE LED LAMP',
            images: Array.from({ length: 6 }).map((_, index) => `/images/auto-spares/automative-led-lamp-${index + 1}.jpg`),
            logo: '/images/auto-spares/logo/benz-logo.png'
        },
        {
            name: 'STEARING BOOT SET',
            images: Array.from({ length: 2 }).map((_, index) => `/images/auto-spares/boot-set-${index + 1}.jpg`),
            logo: '/images/auto-spares/logo/toyota-logo.png'
        },
        {
            name: 'FOOTREST PARTS',
            images: Array.from({ length: 1 }).map((_, index) => `/images/auto-spares/foot-rest-${index + 1}.jpg`),
            logo: '/images/auto-spares/logo/mahindra-logo.png'
        },
        {
            name: 'BUTTONS',
            images: Array.from({ length: 1 }).map((_, index) => `/images/auto-spares/buttons-${index + 1}.jpg`),
            logo: '/images/auto-spares/logo/chevrolet-logo.png'
        },
        {
            name: 'OIL SEAL',
            images: Array.from({ length: 5 }).map((_, index) => `/images/auto-spares/oil-seal-${index + 1}.jpg`),
            logo: '/images/auto-spares/logo/mazda-logo.png'
        },
        {
            name: 'YELLOW BRAKE HOSE',
            images: Array.from({ length: 1 }).map((_, index) => `/images/auto-spares/yellow-brake-hose-${index + 1}.jpg`),
            logo: '/images/auto-spares/logo/hyundai-logo.png'
        },
        {
            name: 'MUDGUARD FLAP',
            images: Array.from({ length: 1 }).map((_, index) => `/images/auto-spares/mud-guard-flap-${index + 1}.jpg`),
            logo: '/images/auto-spares/nissan logo.jpg'
        },
        {
            name: 'COOLANT HOSE',
            images: Array.from({ length: 2 }).map((_, index) => `/images/auto-spares/coolant-hose-${index + 1}.jpg`),
            logo: '/images/auto-spares/logo/force-logo.png'
        },
        {
            name: 'ENGINE MOUNTS',
            images: Array.from({ length: 1 }).map((_, index) => `/images/auto-spares/engine-mounts-${index + 1}.jpg`),
            logo: '/images/auto-spares/logo/honda-logo.png'
        },
        {
            name: 'FLOOR MATTING',
            images: Array.from({ length: 1 }).map((_, index) => `/images/auto-spares/floor-matting-${index + 1}.jpg`),
            logo: '/images/auto-spares/logo/suzuki-logo.png'
        },
        {
            name: 'A/C HOSE',
            images: Array.from({ length: 1 }).map((_, index) => `/images/auto-spares/ac-hose-${index + 1}.jpg`),
            logo: '/images/auto-spares/logo/suzuki-logo.png'
        },
        {
            name: 'BALANCE ROD BUSH',
            images: Array.from({ length: 1 }).map((_, index) => `/images/auto-spares/balance-rod-bush-${index + 1}.jpg`),
            logo: '/images/auto-spares/logo/suzuki-logo.png'
        },
        {
            name: 'COMBINATION SWITCH',
            images: Array.from({ length: 31 }).map((_, index) => `/images/auto-spares/combination-switch-${index + 1}.jpg`),
            logo: '/images/auto-spares/logo/suzuki-logo.png'
        },
        {
            name: 'FUEL PUMP MOTOR',
            images: Array.from({ length: 3 }).map((_, index) => `/images/auto-spares/fuel-pump-motor-${index + 1}.jpg`),
        },
        {
            name: 'SPRAY MOTOR',
            images: Array.from({ length: 2 }).map((_, index) => `/images/auto-spares/spray-motor-${index + 1}.jpg`),
        },
        {
            name: 'THERMOSTAT',
            images: Array.from({ length: 13 }).map((_, index) => `/images/auto-spares/thermostat-${index + 1}.jpg`),
        },
        {
            name: 'OIL PRESSURE SWITCH',
            images: Array.from({ length: 6 }).map((_, index) => `/images/auto-spares/oil-pressure-switch-${index + 1}.jpg`),
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