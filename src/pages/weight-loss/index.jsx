import Navbar from "@/components/layout/Navbar";
import ProductCatalog from "@/components/pages/product/ProductCatalog";
import weightLossData from "@/data/weight-loss/weight-loss.json"

export default function WeightLoss(){
    const {hero} = weightLossData;
     
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
            <div className="weight-loss-btns">
              <button>Get Started</button>
              <button>Start with a free insurance check</button>
            </div>
          </div>
        </section>

        <ProductCatalog data={weightLossData} />
        
        </main>
        </>
    )
}