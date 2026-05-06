import Navbar from "@/components/layout/Navbar";
import fertilityData from "@/data/fertility/fertility.json"

export default function Fertility(){
    const {hero} = fertilityData;

    return(
   <>
       <Navbar/>

        <main>
            <section
              className="product-page-sec bg-cover bg-center bg-no-repeat py-16 px-4"
              style={{ backgroundImage: `url(${hero.backgroundImage})` }}
            >
              {/* Responsive container */}
              <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">

                {/* Responsive Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-normal text-center max-w-2xl">
                  {hero.heading}
                </h1>

                {/* Form Section */}
                <div className="flex flex-col gap-4 w-full max-w-md items-start">

                  {/* Removed negative margin */}
                  <label className="text-white text-sm">
                    Be the first to know
                  </label>

                  {/* Responsive input */}
                  <input
                    className="p-3 border border-white bg-transparent text-white w-full focus:outline-none"
                    type="text"
                    placeholder="Email address"
                  />

                  {/* Responsive button */}
                  <button
                    className="bg-white text-black py-3 text-sm font-normal w-full sm:w-1/2 self-center hover:opacity-90 transition"
                  >
                    {hero.btn}
                  </button>

                </div>
              </div>
            </section>
        </main>
   </>
)
}