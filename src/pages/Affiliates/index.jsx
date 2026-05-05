import Navbar from "@/components/layout/Navbar";
import affiliatesData from "@/data/affiliates/affiliates.json";

export default function affiliates() {
  const { hero } = affiliatesData;

  return (
    <>
      <Navbar />

      <main>
        <section
          className="product-page-sec bg-cover bg-center bg-no-repeat py-16 px-4 relative"
          style={{ backgroundImage: `url(${hero.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          {/* Responsive container */}
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 z-10">
            {/* Responsive Heading */}
            <span className="text-2xl sm:text-3xl md:text-[28px] text-white font-normal text-center max-w-2xl">
              {hero.heading}
            </span>

            <span className="text-white text-lg sm:text-xl lg:text-[16px] font-normal text-center max-w-[800px]">
              {hero.subHeading}
            </span>

            <p className="text-white font-normal text-base sm:text-lg lg:text-[16px] max-w-[800px] w-full text-center">
              {hero.para}
            </p>

            <div className="bg-white w-full max-w-3xl mx-auto p-4 sm:p-6 lg:p-7 rounded-[3px] shadow-md flex flex-col gap-3">
              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 w-4 h-4" />
                <label className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  I accept and agree to the Privacy Policy and Terms
                </label>
              </div>

              {/* Input + Button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 sm:py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black"
                />

                <button className="bg-[#D7DBE0]  text-black  px-5 py-2 sm:py-3 rounded-lg transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
