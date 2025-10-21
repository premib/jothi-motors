import React, { useEffect } from 'react';
import OurBrands from '../../components/OurBrands/OurBrands';

export default function VascoGold() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Our Brands - VASCO GOLD';
    }, []);

    return (
        <OurBrands company={{
            name: 'VASCO GOLD',
            logo: '/images/our-brands/vasko/logo.jpg',
            images: Array.from({ length: 22 }, (_, i) => `/images/our-brands/vasko/vasko catalogue -images-${i + 4}.jpg`),
        }}/>
    )
}