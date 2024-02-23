import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="bg-black m-8">
        <div className="container mx-auto px-4 py-16 ">
          <div className="flex  overflow-x-hidden snap-x snap-mandatory">
            <div className="w-screen flex mx-2 snap-item">
              <div className=" p-8 rounded-lg shadow-md bg-black">
                <div className="flex flex-row">
                  <img src="/i1.png" alt="image 1" className="h-14 w-14 " />
                  <h2 className="text-xl font-bold mb-4">BENEVOLENT TEAM</h2>
                </div>

                <p className="text-gray-300 text-sm pl-16  ">
                  We'll soak ourselves in your craft, your product and your
                  persona till the time where were simply a wing of your own
                  team.
                </p>
              </div>
            </div>
            <div className="w-screen flex mx-2 snap-item">
              <div className="bg-black p-8 rounded-lg shadow-md">
                <div className="flex flex-row">
                  <img src="/img2.png" alt="" className="h-10 w-10" />
                  <h2 className="text-xl font-bold mb-4">
                    CONVERGENCE OF STRATEGY & LUCID EXECUTION
                  </h2>
                </div>

                <p className="text-gray-300 text-sm pl-10">
                  We transform mission driven organizations through branding,
                  marketing, and digital communications for rapid growth.
                </p>
              </div>
            </div>
            <div className="w-screen flex mx-2 snap-item">
              <div className="bg-black p-8 rounded-lg shadow-md">
                <div className="flex flex-row">
                  <img src="/i3.png" alt="" className="h-10 w-10" />
                  <h2 className="text-xl font-bold mb-4">LUCID EXECUTION</h2>
                </div>

                <p className="text-gray-300 text-sm pl-10">
                  We think big but we value simplicity. Sometimes the simplest
                  ideas bring high payoffs. We unleash rapid growth and elevate
                  to the pinnacle of potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
    </>
  );
}

export default Hero