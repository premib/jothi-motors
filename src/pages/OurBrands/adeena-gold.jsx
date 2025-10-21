import React, { useEffect } from 'react';
import OurBrands from '../../components/OurBrands/OurBrands';

export default function Adeena() {
    return (
        <OurBrands company={{
            name: 'ADEENA',
            logo: '/images/our-brands/adeena/logo.jpg',
            images: Array.from({ length: 76 }).map((_, index) => `/images/our-brands/adeena/adeena catalogue -images-${index + 1}.jpg`)
            .filter(img => img !== '/images/our-brands/adeena/adeena catalogue -images-16.jpg'),
            color: '#fffe5f'
        }}/>
    )
}