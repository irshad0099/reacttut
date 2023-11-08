import React from "react";

export default function Products() {
    var products = [
        { Name: 'Samsung TV', price: 50882 },
        { Name: 'Nike Shoes', price: 403322 }
    ];
    return (
        <div className="container">
            <h2>Products Table</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr>
                                <td>{products.Name}</td>
                                <td>{products.price}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}