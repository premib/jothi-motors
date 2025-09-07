
const products = [
    { id: 1, name: 'Product 1', image: '/images/product1.jpg' },
    { id: 2, name: 'Product 2', image: '/images/product2.jpg' },
    { id: 3, name: 'Product 3', image: '/images/product3.jpg' },
    { id: 4, name: 'Product 4', image: '/images/product4.jpg' },
    { id: 4, name: 'Product 4', image: '/images/product4.jpg' },
    { id: 4, name: 'Product 4', image: '/images/product4.jpg' },
    { id: 4, name: 'Product 4', image: '/images/product4.jpg' },
    { id: 4, name: 'Product 4', image: '/images/product4.jpg' },
    { id: 4, name: 'Product 4', image: '/images/product4.jpg' },
    { id: 4, name: 'Product 4', image: '/images/product4.jpg' },
    { id: 4, name: 'Product 4', image: '/images/product4.jpg' },
    { id: 4, name: 'Product 4', image: '/images/product4.jpg' },
    { id: 4, name: 'Product 4', image: '/images/product4.jpg' },
    { id: 4, name: 'Product 4', image: '/images/product4.jpg' },
    { id: 4, name: 'Product 4', image: '/images/product4.jpg' },
    { id: 4, name: 'Product 4', image: '/images/product4.jpg' },
    { id: 4, name: 'Product 4', image: '/images/product4.jpg' },
    { id: 4, name: 'Product 4', image: '/images/product4.jpg' },
    { id: 4, name: 'Product 4', image: '/images/product4.jpg' },
    { id: 4, name: 'Product 4', image: '/images/product4.jpg' },
    { id: 4, name: 'Product 4', image: '/images/product4.jpg' },
    { id: 4, name: 'Product 4', image: '/images/product4.jpg' },
    // Add more products as needed
];

export default function Products() {
    return (
        <div style={{ padding: '2rem' }}>
            <h2>Products</h2>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1.5rem',
                }}
            >
                {products.map(product => (
                    <div
                        key={product.id}
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            textAlign: 'center',
                            background: '#fff',
                        }}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                        />
                        <div style={{ padding: '1rem' }}>
                            <h3 style={{ margin: 0 }}>{product.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

} 