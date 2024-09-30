
const Countries = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center mt-20 mb-16">
        <h1 className="text-[#303030] text-5xl font-bold">Go Exotic Places</h1>
        <p className="text-[#818181] text-xl font-semibold w-3/4 mx-auto mt-5">When it comes to exploring exotic places, the choices are numerous. Whether you like peaceful destinations or vibrant landscapes, we have offers for you.</p>
      </div>

      <div className="grid grid-cols-3 gap-5 my-20">
        <div className="relative col-span-2 overflow-hidden">
          <h1 className="absolute z-20 top-3/4 text-6xl font-medium ml-10 font-Kristi text-[#ffcc05]">New</h1>
          <h1 className="absolute z-20 top-3/4 text-4xl ml-16 mt-16 text-white">Qatar</h1>

          <img className="z-0 hover:transition hover:ease-in-out hover:duration-150 hover:scale-110 " src="https://images.unsplash.com/photo-1669300884869-e6e11c67c031?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="row-span-2 relative overflow-hidden">
          <h1 className="absolute z-20 top-3/4  text-4xl ml-8 mt-32 text-white">Turkey</h1>

          <img className="h-full z-0 hover:transition hover:ease-in-out hover:duration-150 hover:scale-105 " src="https://images.unsplash.com/photo-1519818187420-8e49de7adeef?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="relative overflow-hidden">
          <h1 className="absolute z-20 top-3/4 text-4xl ml-7  text-white">South Africa</h1>
          <img className="z-0 hover:transition hover:ease-in-out hover:duration-150 hover:scale-105 " src="https://images.unsplash.com/photo-1484318571209-661cf29a69c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="relative overflow-hidden">
        <h1 className="absolute z-20 top-1/2 mt-3 text-5xl font-medium ml-7 font-Kristi text-[#ffcc05]">New</h1>
          <h1 className="absolute z-20 top-3/4 text-4xl ml-12  text-white">Uzbekistan</h1>
          <img className="z-0 hover:transition hover:ease-in-out hover:duration-150 hover:scale-105 "  src="https://images.unsplash.com/photo-1459949293702-2ec939154ddb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

      </div>

    </div>
  );
};

export default Countries;