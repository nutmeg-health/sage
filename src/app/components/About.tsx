export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          
          <div className="space-y-6">
            <p className="text-lg text-emerald-100">
              We help curate your grocery lists based on recipes you select. Cooking at home should not be stressful and that is why we are here.
            </p>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-orange-950">How It Works</h3>
              <p className="text-orange-950">
                We help you select different recipes each week - from breakfast, lunch and dinner to snacks and drinks - and create your grocery list for you, so you dont have to remember what to add.
              </p>
            </div>

            <div className="border-l-4 border-green-800 pl-6">
              <h3 className="text-2xl font-semibold mb-4">Modern Grocery Shopping</h3>
              <p className="text-emerald-100">
                You can either generate your grocery list and we provide the recipes that match based on your food preferences that week or you choose the recipes and we make the list.
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-[400px]">
          <img
            src="/grocery-planning.jpg" // You'll need to add this image to your public folder
            alt="Grocery planning and recipe selection"
            className="rounded-lg shadow-xl object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  )
} 