import im2 from '../assets/images/1.jpg'

const HowItWorks = () => {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">How it works</h2>
      <p className="text-lg text-gray-600 mb-12">
        Whether you're looking to earn from your space or find your next beauty service, we've made the process simple.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
              <span className="text-pink-600 font-semibold">1</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Find a service</h3>
              <p className="text-gray-600">Browse through our curated selection of beauty services</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
              <span className="text-pink-600 font-semibold">2</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Book instantly</h3>
              <p className="text-gray-600">Secure your appointment with our trusted beauty professionals</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
              <span className="text-pink-600 font-semibold">3</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Enjoy</h3>
              <p className="text-gray-600">Experience professional beauty services at your convenience</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src={im2} alt="How it works" className="w-full h-auto shadow-lg" />
        </div>
      </div>
    </div>
  )
}

export default HowItWorks 