import Navbar from "@/components/layout/Navbar";
import ProductCatalog from "@/components/pages/product/ProductCatalog";
import weightLossData from "@/data/men/weight-loss/weight-loss.json";

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

            <div>
            <button style={{color:"#000",background:"#fff",borderRadius:"50px",padding:"10px 15px",fontWeight:400,fontSize:"12px"}}>GET STARTED</button>
            <button style={{borderRadius:"50px"}} className="text-white bg-transparent border border-2-[#fff] py-2 px-4 m-3 rounded-2xl">Start with a free insurance check</button>
            </div>
          </div>
        </section>

        <ProductCatalog data={weightLossData} />
        
        </main>
        </>
    )
}