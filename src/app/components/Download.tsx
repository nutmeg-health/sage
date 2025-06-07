import Image from 'next/image'

export default function Download() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="bg-nutmeg-100 bg-nutmeg-background rounded-2xl shadow-lg max-w-6xl mx-auto overflow-hidden">
        <div className="grid md:grid-cols-2 items-center gap-8 p-8">
          {/* Left side - Text and buttons */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-sage-800">Get Our App</h2>
            <p className="text-sage-700 text-lg leading-relaxed">
              Take control of your nutrition journey with our easy-to-use mobile app. 
              Track meals, discover recipes, and stay connected with your health goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* App Store Button */}
              <a 
                href="#" 
                className="transition-transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  className="h-[60px] w-auto"
                />
              </a>

              {/* Play Store Button */}
              <a 
                href="#" 
                className="transition-transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/play-store-badge.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="h-[60px] w-auto"
                />
              </a>
            </div>

            {/* QR Code Section */}
            <div className="mt-8 flex items-center gap-4">
              <div className="bg-white p-4 rounded-xl shadow-md">
                <div className="w-24 h-24 bg-sage-100 rounded-lg flex items-center justify-center">
                  <span className="text-sage-500 text-sm text-center">QR Code Coming Soon</span>
                </div>
              </div>
              <p className="text-sage-600">
                Scan to download<br />
                the Nutmeg app
              </p>
            </div>
          </div>

          {/* Right side - Phone mockups */}
          <div className="relative h-[600px] hidden md:block">
            {/* Phone 1 */}
            <div className="absolute left-0 top-0 transform -rotate-6">
              <div className="relative w-[280px] h-[570px] bg-sage-900 rounded-[3rem] p-3 shadow-xl">
                <div className="relative w-full h-full overflow-hidden rounded-[2.5rem]">
                  <Image
                    src="/app-screenshot-1.png"
                    alt="Nutmeg App Screenshot 1"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Phone 2 */}
            <div className="absolute right-0 top-20 transform rotate-6">
              <div className="relative w-[280px] h-[570px] bg-sage-900 rounded-[3rem] p-3 shadow-xl">
                <div className="relative w-full h-full overflow-hidden rounded-[2.5rem]">
                  <Image
                    src="/app-screenshot-2.png"
                    alt="Nutmeg App Screenshot 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 