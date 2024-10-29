
const Countries = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center mt-20 mb-10 md:mb-16">
        <h1 className="text-[#303030] text-3xl md:text-5xl font-bold">Go Exotic Places</h1>
        <p className="text-[#818181] text-base md:text-xl font-semibold md:w-3/4 mx-auto mt-5">When it comes to exploring exotic places, the choices are numerous. Whether you like peaceful destinations or vibrant landscapes, we have offers for you.</p>
      </div>

      <div className="grid grid-cols-3 gap-5  md:my-20">
        <div className="relative col-span-2 overflow-hidden">
          <h1 className="absolute z-20 top-2/3 md:top-2/3 lg:top-3/4 text-2xl md:text-5xl lg:text-6xl font-medium  ml-3 md:ml-7 lg:ml-10 font-Kristi text-[#ffcc05]">New</h1>
          <h1 className="absolute z-20 top-3/4 md:text-3xl lg:text-4xl ml-6 md:ml-14 lg:ml-16 mt-3 md:mt-4 lg:mt-16 text-white">Qatar</h1>

          <img className="z-0 hover:transition hover:ease-in-out hover:duration-150 hover:scale-110 " src="https://images.unsplash.com/photo-1669300884869-e6e11c67c031?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="row-span-2 relative overflow-hidden">
          <h1 className="absolute z-20 top-3/4 md:text-3xl lg:text-4xl md:ml-5 lg:ml-8 ml-2 lg:mt-32 md:mt-16 mt-9 text-white">Turkey</h1>

          <img className="h-full z-0 hover:transition hover:ease-in-out hover:duration-150 hover:scale-105 " src="https://images.unsplash.com/photo-1519818187420-8e49de7adeef?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="relative overflow-hidden">
          <h1 className="absolute z-20 top-3/4 text-xs md:text-2xl lg:text-4xl md:ml-3 lg:ml-7 ml-1 text-white">South Africa</h1>
          <img className="z-0 hover:transition hover:ease-in-out hover:duration-150 hover:scale-105 " src="https://images.unsplash.com/photo-1484318571209-661cf29a69c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="relative overflow-hidden">
        <h1 className="absolute z-20 top-1/2 md:mt-3 md:text-3xl lg:text-5xl font-medium lg:ml-7 md:ml-3 ml-2 font-Kristi text-[#ffcc05]">New</h1>
          <h1 className="absolute z-20 top-3/4 text-xs md:text-2xl lg:text-4xl md:ml-8 lg:ml-12 ml-3 text-white">Uzbekistan</h1>
          <img className="z-0 hover:transition hover:ease-in-out hover:duration-150 hover:scale-105 "  src="https://images.unsplash.com/photo-1459949293702-2ec939154ddb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

      </div>

    </div>
  );
};

export default Countries;