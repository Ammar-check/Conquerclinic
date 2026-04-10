import Navbar from "@/components/layout/Navbar";
import Faq from "@/components/pages/home/Faq";
import ProductCatalog from "@/components/pages/product/ProductCatalog";
import ProductStories from "@/components/pages/product/ProductStories";
import productPageData from "@/data/product-page.json";

export default function ProductPage() {
  const { hero, faq, stories } = productPageData;

  return (
    <>
      <Navbar />

      <main>
        <section
          className="product-hero-section"
          style={{ backgroundImage: `url(${hero.backgroundImage})` }}
        >
          <div className="container product-hero-content">
            <h1 className="product-hero-title">{hero.heading}</h1>
          </div>
        </section>

        <ProductCatalog data={productPageData} />
        <ProductStories stories={stories} />
        <Faq data={faq} />
      </main>
    </>
  );
}
