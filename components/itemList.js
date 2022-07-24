import React from "react";

function ItemList({product}) {
  return (
    <div className="d-flex gap-3 container-fluid my-2">
      <div style={{ width: "20%" }}>
        <img
          style={{ width: "100%", borderRadius: "12px" }}
          src={product.Product.product_image}
          alt={product.Product.product_name}
        />
      </div>
      <div className="d-flex flex-column flex-grow-1">
        <div className="d-flex flex-grow justify-content-between">
          <p className="m-0">Penawaran Produk</p>
          <p className="m-0">{typeof(product.createdAt)}</p>
        </div>
        <h4>{product.Product.product_name}</h4>
        <p className="m-0">Rp. {product.Product.product_price}</p>
        <p className="m-0">Ditawar Rp. {product.order_price}</p>
      </div>
    </div>
  );
}

export default ItemList;