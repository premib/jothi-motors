import React, { useEffect } from 'react';
import OurBrands from '../../components/OurBrands/OurBrands';

export default function Paltex() {
    return (
        <OurBrands company={{
            name: 'PALTEEX',
            logo: '/images/our-brands/paltex/logo.jpg',
            images: Array.from({ length: 62 }, (_, i) => `/images/our-brands/paltex/PALTEX Catalogue-images-${i + 4}.jpg`)
            .filter(img => img !== '/images/our-brands/paltex/PALTEX Catalogue-images-45.jpg'),
        }}/>
    )
}