"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/pages/product/ProductCard";

export default function ProductCatalog({ data }) {
  const [activeFilter, setActiveFilter] = useState(data.filters[0]?.id || "all");

  const filteredProducts = useMemo(() => {
    if (activeFilter === "all") {
      return data.products.filter((product) => product.slug === data.slug);
    }

    return data.products.filter(
      (product) => product.slug === data.slug && product.category === activeFilter
    );
  }, [activeFilter, data]);

  return (
    <section className="product-catalog-section pb-5">
      <div className="product-filter-bar mb-4">
        <div className="container product-filter-bar-inner">
          <div className="product-filter-list">
            {data.filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={`product-filter-btn ${activeFilter === filter.id ? "active" : ""}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-lg-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
