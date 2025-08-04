import './ProductList.css';

function ProductList() {
    const products = [
        { id: 1, kodas: 'A001', pavadinimas: 'Stalas', kaina: 120, savikaina: 80, kiekis: 5 },
        { id: 2, kodas: 'A002', pavadinimas: 'Kėdė', kaina: 40, savikaina: 20, kiekis: 10 },
        { id: 3, kodas: 'A003', pavadinimas: 'Lempa', kaina: 70, savikaina: 50, kiekis: 7 },
        { id: 4, kodas: 'A004', pavadinimas: 'Spinta', kaina: 300, savikaina: 200, kiekis: 2 },
        { id: 5, kodas: 'A005', pavadinimas: 'Knyga', kaina: 15, savikaina: 10, kiekis: 20 }
    ];

    function geBiggestPriceOfProduct() {
        return products.reduce((max, curr) => (curr.kaina > max.kaina ? curr : max));
    }
    
    function getLowestPriceOfProduct() {
        return products.reduce((min, curr) => (curr.kaina < min.kaina ? curr : min));
    }

    function getAvgPriceOfProduct() {
    const suma = products.reduce((sum, product) => sum + product.kaina, 0);
    return (suma / products.length).toFixed(2);
  };

    function getProfitOfProduct(product) {
        return (product.kaina - product.savikaina) * product.kiekis;
    }

    return (
        <div>
            <h2>Prekių sąrašas</h2>
            <table className="prekiu-lentele">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Kodas</th>
                        <th>Pavadinimas</th>
                        <th>Kaina</th>
                        <th>Savikaina</th>
                        <th>Kiekis</th>
                        <th>Galimas pelnas</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((preke) => (
                        <tr key={preke.id}>
                        <td>{preke.id}</td>
                        <td>{preke.kodas}</td>
                        <td>{preke.pavadinimas}</td>
                        <td>{preke.kaina} €</td>
                        <td>{preke.savikaina} €</td>
                        <td>{preke.kiekis}</td>
                        <td className="pelno-laukas">{getProfitOfProduct(preke)} €</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div style={{ marginTop: '20px', textAlign: 'left', maxWidth: '600px', marginInline: 'auto' }}>
                <p><strong>Brangiausia prekė:</strong> {geBiggestPriceOfProduct().pavadinimas}</p>
                <p><strong>Pigiausia prekė:</strong> {getLowestPriceOfProduct().pavadinimas}</p>
                <p><strong>Kainų vidurkis:</strong> {getAvgPriceOfProduct()} €</p>
            </div>
        </div>
    );
}

export default ProductList;