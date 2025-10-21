import React, { useEffect } from 'react';

import styles from './ourbrands.module.scss'

export default function OurBrands({ company }) {
    useEffect(() => {
        document.title = 'Our Brands - Jothi Motor Spares';
    }, []);

    const [visibleCount, setVisibleCount] = React.useState(Math.min(5, company?.images?.length || 0));

    useEffect(() => {
        // reset visible count when company/images change
        setVisibleCount(Math.min(5, company?.images?.length || 0));
    }, [company?.images]);

    const showMore = () => {
        setVisibleCount(prev => Math.min(prev + 5, company?.images?.length || 0));
    };

    return (
        <article className={styles.main}>
            <div className={styles['panel']} style={{background: 'rgb(207, 207, 207)' ?? 'white'}}>
                <div className={styles['logo-container']}>
                    <img src={company.logo} alt={`${company.name} logo`} />
                </div>

                {(company.images || []).map((img, imgIndex) => (
                    <div key={imgIndex} className={styles['img-container']}>
                        <img src={img} loading="lazy" alt={`${company.name} ${imgIndex + 1}`} />
                    </div>
                ))}

                {/* {(company.images || []).length > visibleCount && (
                    <div >
                        <button type="button" className={styles.button} onClick={showMore} >
                            Load more
                        </button>
                    </div>
                )} */}
            </div>
        </article>
    )
}
