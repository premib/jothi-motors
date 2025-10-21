import React, { useEffect } from 'react';
import OurBrands from '../../components/OurBrands/OurBrands';

export default function AnupamIndustries() {
    return (
        <OurBrands company={{
            name: 'ANUPAM INDUSTRIES',
            logo: '/images/our-brands/anupam/logo.jpg',
            images: Array.from({ length: 61 }).map((_, index) => `/images/our-brands/anupam/anupam catalogue -images-${index + 2}.jpg`)
            .filter(img => img !== '/images/our-brands/anupam/anupam catalogue -images-25.jpg'),
            color: '#cfcfcf'
        }} />
    )
}