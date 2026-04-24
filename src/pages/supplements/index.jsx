import Navbar from "@/components/layout/Navbar";
import ProductCatalog from "@/components/pages/product/ProductCatalog";
import SupplementsData from "@/data/supplements/supplements.json"


export default function Supplements(){
    const {hero} = SupplementsData;

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

        <ProductCatalog data={SupplementsData} />
        
        </main>
   </>
   
)
}