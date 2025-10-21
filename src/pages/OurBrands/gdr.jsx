import React, { useEffect } from 'react';
import OurBrands from '../../components/OurBrands/OurBrands';

export default function GDR() {
    return (
        <OurBrands company={{
            name: 'GDR',
            logo: '/images/our-brands/gdr/logo.jpg',
            images: Array.from({ length: 21 }).map((_, index) => `/images/our-brands/gdr/gdr catalogue -images-${index + 1}.jpg`),
            color: '#e39d9d'
        }}/>
    )
}