"use client"

import { useRouter } from "next/navigation"

export default function Page() {
  const router = useRouter()

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <h1 className="pricing-title">Our Pricing</h1>

        <label className=" inline-flex  cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <span>Monthly</span>

          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span>Annually</span>
        </label>
        <div className="flex flex-row pricing-container gap-3 ">
          <div className="max-w-lg rounded overflow-hidden shadow-lg ">
            <div className="px-8 py-4 cards">
              <div className="font-bold text-xl mb-2">Basic</div>
              <p className="text-gray-700 text-base">
                <span className="dollar-sign">$</span>19.99{" "}
              </p>
              <span>500 GB storage</span>
              <span>2 Users allowed</span>

              <span>Send up to 3 GB</span>
              <button className="buttons">Learn More</button>
            </div>
          </div>

          <div className="max-w-lg rounded overflow-hidden shadow-lg  ">
            <div className="px-6 py-4 cards">
              <div className="font-bold text-xl mb-2">Professionals</div>
              <p className="text-gray-700 text-base">
                <span className="dollar-sign">$</span>20.99{" "}
              </p>
              <span>1 TB storage</span>
              <span>5 users allowed</span>

              <span>Send up to 10 GB</span>
              <button className="buttons">Learn More</button>
            </div>
          </div>

          <div className="max-w-lg rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4 cards">
              <div className="font-bold text-xl mb-2">Master</div>
              <p className="text-gray-700 text-base">
                <span className="dollar-sign">$</span>39.99{" "}
              </p>
              <span>2 TB Storage</span>
              <span>10 Users Allowed</span>

              <span>Send up to 20 GB</span>
              <button className="buttons">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
