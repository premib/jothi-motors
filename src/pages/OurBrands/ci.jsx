import React, { useEffect } from 'react';
import OurBrands from '../../components/OurBrands/OurBrands';

export default function CI() {
    return (
        <OurBrands company={{
            name: 'CAMOFLEX WIPER SYSTEMS',
            logo: '/images/our-brands/ci/logo.jpg',
            images: Array.from({ length: 265 }).map((_, index) => {
                let indexNumber = (index + 1).toString().padStart(3, '0');
                return `/images/our-brands/ci/ci cataloguee_${indexNumber}.jpg`
            }),
            color: '#676666'
        }}/>
    )
}