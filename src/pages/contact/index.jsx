import Navbar from "@/components/layout/Navbar";
import ContactData from "@/data/contact/contact.json"

export default function Contact(){
    const {hero} = ContactData;

    return(
   <>
       <Navbar/>

        <main>
            <section
              className="product-page-sec bg-cover bg-center bg-no-repeat py-16 px-4 relative"
              style={{ backgroundImage: `url(${hero.backgroundImage})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
              {/* Responsive container */}
              <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 z-10">

                {/* Responsive Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-normal text-center max-w-2xl">
                  {hero.heading}
                </h1>

               <span className="text-white text-lg sm:text-xl lg:text-[24px] font-normal text-center">
  {hero.subHeading}
</span>

<p className="text-white font-normal text-base sm:text-lg lg:text-[26px] max-w-[760px] w-full text-center">
  {hero.para}
</p>
              </div>
            </section>
        </main>
   </>
)
}