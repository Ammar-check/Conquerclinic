import Navbar from "@/components/layout/Navbar";
import ProductCatalog from "@/components/pages/product/ProductCatalog";
import diagnosticData from "@/data/diagnostic-labs/diagnostic-labs.json"


export default function DiagnosticLab(){
    const {hero} = diagnosticData;

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
            <p style={{color:'#fff',fontWeight:300,fontSize:"16px",lineHeight:"24px",marginTop:"20px"}}>{hero.subHeading}</p>
          <button style={{color:"#000",background:"#fff",borderRadius:"50px",padding:"10px 15px",fontWeight:400,fontSize:"12px"}}>{hero.btn}</button>
          </div>
        </section>

        <ProductCatalog data={diagnosticData} />
        
        </main>
   </>
   
)
}