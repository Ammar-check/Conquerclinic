import Navbar from "@/components/layout/Navbar";
import ProductCatalog from "@/components/pages/product/ProductCatalog";
import longevityData from "@/data/men/longevity/longevity.json";

export default function Longevity(){
    const {hero} = longevityData;

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

        <ProductCatalog data={longevityData} />
        
        </main>
        </>
    )
}