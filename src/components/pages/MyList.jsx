

const MyList = () => {
    return (
        <div className="text-center">
            <h1 className="text-3xl font-semibold mt-3">My Tourist Spots</h1>
            <p className="w-2/4 mx-auto text-base font-medium mt-1 mb-5">On this page, you can view all the tourist spots you have added. You can update or delete any entry, but only spots that you've personally added are visible.
            </p>

            <div className="overflow-x-auto w-11/12 mx-auto mb-10">
                <table className="table table-xs">
                    <thead >
                        <tr>
                            <th></th>
                            <th>Tourists_spot_name</th>
                            <th>Country_Name</th>
                            <th>Location</th>
                            <th>Average_cost</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Easter Lake Park</td>
                            <td>Austrailia</td>
                            <td>Kamarpara</td>
                            <td>5000</td>
                            <td>  <button className=" hover:underline hover:to-blue-400" onClick={() => document.getElementById('my_modal_1').showModal()}>Update</button>
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box">
                                        <h1 className="text-center text-2xl font-semibold">Update Details</h1>
                                        <div className="modal-action">
                                            <form method="dialog" className="w-full p-3">
                                                <div>
                                                    <h1 className=" text-[#030712] font-bold text-lg mb-4">User Information</h1>
                                                </div>
                                                <div className=" ">
                                                    <div className="">
                                                        <label className="label">
                                                            <span className="label-text text-[#2c3345] text-sm font-semibold">User Name</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            placeholder="Enter your Name"
                                                            name="userName"
                                                            className="border py-3 px-3 rounded-md focus:outline-none focus:border-[#ff1ecc] w-full max-w-xl" />
                                                    </div>

                                                </div>
                                                <div className=" mt-3">
                                                    <label className="label">
                                                        <span className="label-text text-[#2c3345] text-sm font-semibold"> User Email</span>
                                                    </label>
                                                    <input
                                                        type="email"
                                                        placeholder="Enter your Email"
                                                        name="email"
                                                        className="border py-3 px-3 rounded-md focus:outline-none focus:border-[#ff1ecc] w-full max-w-xl" />
                                                </div>

                                                <div>
                                                    <h1 className="text-[#030712] font-bold text-lg my-4">Tourist Spot Information</h1>
                                                </div>

                                                <div className="grid grid-cols-2 gap-2">
                                                    <div >
                                                        <label className="label">
                                                            <span className="label-text text-[#2c3345] text-sm font-semibold">Country Name</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            placeholder="Enter the Country Name"
                                                            name="countryName"
                                                            className="border py-3 px-3 rounded-md focus:outline-none focus:border-[#ff1ecc] w-full max-w-xl" />
                                                    </div>

                                                    <div>
                                                        <label className="label">
                                                            <span className="label-text text-[#2c3345] text-sm font-semibold">Tourist Spot Name</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            placeholder="Enter the Tourist Spot Name"
                                                            name="spotName"
                                                            className="border py-3 px-3 rounded-md focus:outline-none focus:border-[#ff1ecc] w-full max-w-xl" />
                                                    </div>

                                                </div>
                                                <div>
                                                    <label className="label">
                                                        <span className="label-text text-[#2c3345] text-sm font-semibold">Location</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter the Location"
                                                        name="location"
                                                        className="border py-3 px-3 rounded-md focus:outline-none focus:border-[#ff1ecc] w-full max-w-xl" />
                                                </div>

                                                <div className="my-4">
                                                    <label className="label">
                                                        <span className="label-text text-[#2c3345] text-sm font-semibold ">ImageURL</span>
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
                                                            <span className="label-text text-[#2c3345] text-sm font-semibold">Average Cost</span>
                                                        </label>
                                                        <input
                                                            type="number"
                                                            placeholder="Enter Average Cost"
                                                            name="averageCost"
                                                            className="border py-3 px-3 rounded-md focus:outline-none focus:border-[#ff1ecc] w-full max-w-xl" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <label className="label">
                                                            <span className="label-text text-[#2c3345] text-sm font-semibold">Seasonality</span>
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
                                                            <span className="label-text text-[#2c3345] text-sm font-semibold">Travel Time</span>
                                                        </label>
                                                        <input
                                                            type="datetime-local"
                                                            placeholder="Enter Travel Time"
                                                            name="travelTime"
                                                            className="border py-3 px-3 rounded-md focus:outline-none focus:border-[#ff1ecc] w-full max-w-xl" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <label className="label">
                                                            <span className="label-text text-[#2c3345] text-sm font-semibold">Total Visitors Per Year</span>
                                                        </label>
                                                        <input
                                                            type="number"
                                                            placeholder="Enter Total Visitors Per Year"
                                                            name="totalVisitors"
                                                            className="border py-3 px-3 rounded-md focus:outline-none focus:border-[#ff1ecc] w-full max-w-xl" />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="label">
                                                        <span className="label-text text-[#2c3345] text-sm font-semibold">Description</span>
                                                    </label>
                                                    <textarea
                                                        type="text"
                                                        placeholder="Write a short description..."
                                                        name="description"
                                                        className="border textar py-3 px-3 rounded-md focus:outline-none focus:border-[#ff1ecc] w-full max-w-xl" />
                                                </div>
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="px-6 py-3 mr-1 text-white bg-sky-500 hover:bg-sky-700 text-sm font-semibold rounded-md">Update</button>
                                                <button className="px-6 py-3 text-white bg-sky-500 hover:bg-sky-700 text-sm font-semibold rounded-md">Close</button>
                                               
                                            </form>
                                        </div>
                                    </div>
                                </dialog></td>
                            <td> <button className=" hover:underline hover:to-blue-400" onClick={() => document.getElementById('my_modal_2').showModal()}>Delete</button>
                                <dialog id="my_modal_2" className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Press ESC key or click the button below to close</p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn">Delete</button>
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog></td>



                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Zemlak, Daniel and Leannon</td>
                            <td>United States</td>
                            <td>12/5/2020</td>
                            <td>Purple</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Carroll Group</td>
                            <td>China</td>
                            <td>8/15/2020</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;