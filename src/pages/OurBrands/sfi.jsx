import React, { useEffect } from 'react';
import OurBrands from '../../components/OurBrands/OurBrands';

export default function SFI() {
    return (
        <OurBrands company={{
            name: 'SFI',
            logo: '/images/our-brands/sfi/logo.jpg',
            images: Array.from({ length: 15 }, (_, i) => `/images/our-brands/sfi/page-${i + 3}.jpg`),
        }}/>
    )
}