import Navbar from "@/components/layout/Navbar";
import ProductCatalog from "@/components/pages/product/ProductCatalog";
import sexualHealthData from "@/data/men/sexual-health/sexual-health.json";

export default function HormoneHealth(){
    const {hero} = sexualHealthData;

    return(
        <>
        <Navbar/>

        <main>
            <section
          className="product-page-sec"
          style={{ backgroundImage: `url(${hero.backgroundImage})` }}
        >
          <div className="container product-hero-content">
            <h1 className="product-hero-title">{hero.heading}</h1>

          </div>
        </section>

        <ProductCatalog data={sexualHealthData} />
        
        </main>
        </>
    )
}