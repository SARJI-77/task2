
import React, { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  const pricingData = {
    monthly: [
      {
        name: "Starter",
        price: 9,
        description: "Perfect for freelancers and individuals.",
        features: ["5 Projects", "10 GB Storage", "Basic Analytics"],
      },
      {
        name: "Professional",
        price: 29,
        popular: true,
        description: "Best for growing teams.",
        features: [
          "Unlimited Projects",
          "100 GB Storage",
          "Advanced Analytics",
        ],
      },
      {
        name: "Enterprise",
        price: 99,
        description: "For large organizations.",
        features: [
          "Unlimited Projects",
          "1 TB Storage",
          "24/7 Support",
        ],
      },
    ],

    yearly: [
      {
        name: "Starter",
        price: 90,
        description: "Perfect for freelancers and individuals.",
        features: ["5 Projects", "10 GB Storage", "Basic Analytics"],
      },
      {
        name: "Professional",
        price: 290,
        popular: true,
        description: "Best for growing teams.",
        features: [
          "Unlimited Projects",
          "100 GB Storage",
          "Advanced Analytics",
        ],
      },
      {
        name: "Enterprise",
        price: 990,
        description: "For large organizations.",
        features: [
          "Unlimited Projects",
          "1 TB Storage",
          "24/7 Support",
        ],
      },
    ],
  };
  
  function  toggle(){
    if(show === true){

    }else{
      (show === false)
    }
  }


  return (
    <div className="min-h-screen bg-red-100 p-6">
      <h1 className="text-center text-4xl font-bold">
        CloudFlow CRM
      </h1>

      <p className="mt-2 text-center text-blue-800">
        Choose your perfect plan
      </p>

      <div className="text-base font-normal text-green-700">
      <button onClick={()=>toggle}>{show?"monthly":"year"}</button>
      </div>  
      <div className="mx-4 grid max-w-6xl gap-6 md:grid-cols-3">
        {pricingData[show].map((plan) => (
    <div
      key={plan.name}
      className={`relative rounded-xl bg-white p- shadow-lg transition hover:-translate-y-3 `}>
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm text-white">
          Most Popular
        </span>
      )}

      <h2 className="text-4xl font-bold">
        {plan.name}
      </h2>

      <p className="mt-4 text-pink-700">
        {plan.description}
      </p>

      <h3 className="mt-4 text-5xl font-bold">
        ${plan.price}
        <span className="text-base font-normal text-gray-500">
          /{show === "monthly" ? "month" : "year"}
        </span>
      </h3>

      <ul className="mt-4 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature}>✅ {feature}</li>
        ))}
      </ul>

      <button className="mt-6 w-full rounded-lg bg-black py-3 text-white hover:bg-gray-800">
        Choose Plan
      </button>
    </div>
  ))}
</div>
             
        
      </div>
  
  );
}

export default App;
