import React, { useEffect } from 'react';
import OurBrands from '../../components/OurBrands/OurBrands';

export default function Camoflex() {
    return (
        <OurBrands company={{
            name: 'CAMOFLEX WIPER SYSTEMS',
            logo: '/images/our-brands/camoflex/logo.jpg',
            images: Array.from({ length: 4 }).map((_, index) => `/images/our-brands/camoflex/camoflex catalogue -images-${index}.jpg`),
            color: '#346b92'
        }}/>
    )
}