import React, { useEffect } from 'react';
import OurBrands from '../../components/OurBrands/OurBrands';

export default function SuperAuto() {
    return (
        <OurBrands company={{
            name: 'SUPER AUTO',
            logo: '/images/our-brands/super/logo.jpg',
            images: Array.from({ length: 32 }, (_, i) => `/images/our-brands/super/page-${i + 6}.jpg`),
        }}/>
    )
}