
const AddTouristSpot = () => {

    return (
        <div>
            <div className="w-4/5 flex flex-col items-center mx-auto my-3">
                <h1 className="text-[#1a1d27] font-bold text-2xl">Add Your Dream Destination</h1>
                <p className="text-center text-[#03071299] font-semibold text-sm w-3/5 mt-1 mb-4">Welcome to the Tourist Spot Submission page! This form allows users to contribute by adding new tourist spots to our directory.</p>
            </div>
            <form>
                <div className=" border-2 border-[#1dd100] rounded-2xl w-4/5 mx-auto p-10">
                    {/* {User's Info} */}
                    <div>
                        <h1 className="   text-[#030712] font-bold text-xl mb-4">User Information</h1>
                    </div>
                    <div className="flex items-center ">
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-[#2c3345] text-base font-semibold">User Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your Name"
                                name="userName"
                                className="border py-3 px-3 rounded-md focus:outline-none focus:border-[#ff1ecc] w-full max-w-xl" />
                        </div>
                        <div className="ml-10 flex-1 ">
                            <label className="label">
                                <span className="label-text text-[#2c3345] text-base font-semibold"> User Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                name="email"
                                className="border py-3 px-3 rounded-md focus:outline-none focus:border-[#ff1ecc] w-full max-w-xl" />
                        </div>

                    </div>

                    <div>
                        <h1 className="   text-[#030712] font-bold text-xl my-4">Tourist Spot Information</h1>
                    </div>

                    {/* {Tourist Spot info} */}

                    <div className="grid grid-cols-3 gap-2">
                        <div >
                            <label className="label">
                                <span className="label-text text-[#2c3345] text-base font-semibold">Country Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter the Country Name"
                                name="countryName"
                                className="border py-3 px-3 rounded-md focus:outline-none focus:border-[#ff1ecc] w-full max-w-xl" />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text text-[#2c3345] text-base font-semibold">Tourist Spot Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter the Tourist Spot Name"
                                name="spotName"
                                className="border py-3 px-3 rounded-md focus:outline-none focus:border-[#ff1ecc] w-full max-w-xl" />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text text-[#2c3345] text-base font-semibold">Location</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter the Location"
                                name="location"
                                className="border py-3 px-3 rounded-md focus:outline-none focus:border-[#ff1ecc] w-full max-w-xl" />
                        </div>
                    </div>

                    <div className="my-4">
                        <label className="label">
                            <span className="label-text text-[#2c3345] text-base font-semibold ">ImageURL</span>
                        </label>
                        <input
                            type="url"
                            placeholder="Enter the PhotoUrl"
                            name="photoURL"
                            className="border py-3 px-3 rounded-md focus:outline-none focus:border-[#ff1ecc] w-full " />
                    </div>

                    <div className="flex items-center">
                        <div className="flex-1 mr-10">
                            <label className="label">
                                <span className="label-text text-[#2c3345] text-base font-semibold">Average Cost</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Enter Average Cost"
                                name="averageCost"
                                className="border py-3 px-3 rounded-md focus:outline-none focus:border-[#ff1ecc] w-full max-w-xl" />
                        </div>
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-[#2c3345] text-base font-semibold">Seasonality</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Seasonality"
                                name="countryName"
                                className="border py-3 px-3 rounded-md focus:outline-none focus:border-[#ff1ecc] w-full max-w-xl" />
                        </div>
                    </div>

                    <div className="flex items-center my-4">
                        <div className="flex-1 mr-10">
                            <label className="label">
                                <span className="label-text text-[#2c3345] text-base font-semibold">Travel Time</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Travel Time"
                                name="travelTime"
                                className="border py-3 px-3 rounded-md focus:outline-none focus:border-[#ff1ecc] w-full max-w-xl" />
                        </div>
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-[#2c3345] text-base font-semibold">Total Visitors Per Year</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Total Visitors Per Year"
                                name="totalVisitors"
                                className="border py-3 px-3 rounded-md focus:outline-none focus:border-[#ff1ecc] w-full max-w-xl" />
                        </div>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-[#2c3345] text-base font-semibold">Description</span>
                        </label>
                        <textarea
                            type="text"
                            placeholder="Write a short description..."
                            name="description"
                            className="border textar py-3 px-3 rounded-md focus:outline-none focus:border-[#ff1ecc] w-full max-w-xl" />
                    </div>

                </div>
                <div className="flex justify-center py-5 ">
                    <button className="text-white w-1/5 py-3 rounded-[4px]  bg-[#18bd5b] hover:bg-[#269746]">Add</button>
                </div>
            </form>

        </div>
    );
};

export default AddTouristSpot;