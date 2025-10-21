import React, { useEffect } from 'react';
import OurBrands from '../../components/OurBrands/OurBrands';

export default function Vir() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Our Brands - VIR';
    }, []);

    return (
        <OurBrands company={{
            name: 'VIR',
            logo: '/images/our-brands/vir/logo.jpg',
            images: [
                ...Array.from({ length: 22 }, (_, i) => `/images/our-brands/vir/vir hoses catalogue -images-${i + 3}.jpg`),
                ...Array.from({ length: 161 }, (_, i) => `/images/our-brands/vir2/page-${i + 4}.jpg`),
            ]
        }} />
    )
}