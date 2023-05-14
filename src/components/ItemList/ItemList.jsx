import React, { useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";

const ItemList = ({ products }) => {
  const [productsPerPage, setProductsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const totalProducts = products.length;
  const lastIndex = currentPage * productsPerPage;
  const firsIndex = lastIndex - productsPerPage;

  return (
    <div>
      <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
        {products
          .map((products) => <Card key={products.id} products={products} />)
          .slice(firsIndex, lastIndex)}
      </div>

      <Pagination
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalProducts}
      />
    </div>
  );
};

export default ItemList;
