import Navbar from "@/components/layout/Navbar";
import Faq from "@/components/pages/home/Faq";
import ProductCatalog from "@/components/pages/product/ProductCatalog";
import ProductStories from "@/components/pages/product/ProductStories";
import menProductPageData from "@/data/men-product-page.json";

export default function MenProductsPage() {
  const { hero, faq, stories } = menProductPageData;

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

        <ProductCatalog data={menProductPageData} />
        <ProductStories stories={stories} />
        <Faq data={faq} />
      </main>
    </>
  );
}
