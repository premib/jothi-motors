import React, { useEffect } from 'react';
import OurBrands from '../../components/OurBrands/OurBrands';

export default function Spark() {
    return (
        <OurBrands company={{
            name: 'SPARK',
            logo: '/images/our-brands/spark/logo.jpg',
            images: Array.from({ length: 10 }, (_, i) => `/images/our-brands/spark/spark catalogue -images-${i + 1}.jpg`),
        }}/>
    )
}