import Navbar from "@/components/layout/Navbar";
import ProductCatalog from "@/components/pages/product/ProductCatalog";
import skinCareData from "@/data/skin-care/skin-care.json"


export default function SkinCare(){
    const {hero} = skinCareData;

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
            <button style={{color:"#000",background:"#fff",borderRadius:"50px",padding:"10px 15px",fontWeight:400,fontSize:"12px"}}>{hero.btn}</button>
            <button style={{borderRadius:"50px"}} className="text-white bg-transparent border border-2-[#fff] py-2 px-4 m-3 rounded-2xl">Start with a free insurance check</button>
            </div>
          </div>
        </section>

        <ProductCatalog data={skinCareData} />
        
        </main>
   </>
   
)
}