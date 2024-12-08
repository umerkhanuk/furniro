export default function Checkout (){
    return (
        <>
        <div className="flex flex-col w-full justify-center items-center mt-12" id="cartbgimg">
        <h2 className=" text-[#333] text-4xl font-[500]">Cart</h2>
       </div>

       <div className="flex flex-wrap w-full  justify-center mt-28 mb-3  gap-4 ">
        <div className="flex flex-col sm:w-full md:w-[32%] lg:w-[48%] gap-3 ">
        <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded">
  <h2 className="text-2xl font-bold mb-6">Billing details</h2>
  <form className="space-y-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">First Name</label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Last Name</label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">Company Name (Optional)</label>
      <input
        type="text"
        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">Country / Region</label>
      <select
        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option>Sri Lanka</option>
        <option>Other</option>
      </select>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">Street address</label>
      <input
        type="text"
        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Street address"
      />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Town / City</label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Province</label>
        <select
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option>Western Province</option>
          <option>Other</option>
        </select>
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">ZIP code</label>
      <input
        type="text"
        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">Phone</label>
      <input
        type="text"
        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">Email address</label>
      <input
        type="email"
        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">Additional Information</label>
      <textarea
        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Additional information"
      ></textarea>
    </div>
  </form>
</div>
        </div>

<div className="flex flex-col sm:w-full md:w-[32%] lg:w-[48%] gap-3 ">
       <div className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-md shadow-sm">
      <div>
        <div className="flex justify-between mb-4">
           <h3 className="font-semibold text-lg">Product</h3>
          <h3 className="font-semibold text-lg">Subtotal</h3>
        </div>
        <div className="flex justify-between">
           <p>Asgaard sofa x 1</p>
          <p>Rs. 250,000.00</p>
        </div>
        <hr className="my-4 border-gray-300" />
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>Rs. 250,000.00</p>
        </div>
        <div className="flex justify-between font-semibold text-xl text-yellow-600 mt-2">
          <p>Total</p>
          <p>Rs. 250,000.00</p>
        </div>
      </div>

      <hr className="my-4 border-gray-300" />

      <div>
        <h4 className="font-semibold mb-2">Direct Bank Transfer</h4>
        <p className="text-sm text-gray-600 mb-4">
          Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
        </p>

        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="radio" name="payment" value="bank" className="form-radio text-yellow-600" />
          
            <span>Direct Bank Transfer</span>
          </label>
          <label className="flex items-center space-x-2">
              <input type="radio" name="payment" value="cod" className="form-radio text-yellow-600" />
             <span>Cash On Delivery</span>
          </label>
        </div>
      </div>

      <p className="text-xs text-gray-600 mt-4">
        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="text-blue-600 underline">privacy policy</span>.
      </p>

        <button className="w-full bg-yellow-600 text-white py-2 mt-6 rounded-md text-lg hover:bg-yellow-500 transition">
         Place order
        </button>
    </div>
        </div>

        </div>
        </>
    )
}