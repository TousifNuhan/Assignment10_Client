import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import axios from "axios";
import UseAuth from "../../hooks/UseAuth";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { data } from "autoprefixer";


const MyList = () => {
    const { user } = UseAuth()
    const axiosSecure = UseAxiosSecure()
    const queryClient = useQueryClient()
    // const { user } = useContext(AuthContext)
    // const [users, setUsers] = useState([])

    const { data: users = [], isLoading, isError, error, refetch } = useQuery({
        queryFn: () =>
            axiosSecure(`/user?email=${user?.email}`)
                .then(res => {
                    return res.data
                })
        ,
        queryKey: ['users', user?.email]
    })

    const { mutate } = useMutation({
        mutationFn: async ({ id }) => {
            await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {

                    fetch(`http://localhost:5000/user/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            const getTouristSpots = users.map((user) => ({
                                ...user,
                                touristSpots: user.touristSpots.filter(e => e._id !== id),

                            }))

                            // setUsers(getTouristSpots)

                            // getData()
                        })



                    Swal.fire({
                        title: "Deleted!",
                        text: "The spot has been deleted.",
                        icon: "success"
                    });
                }

            });
        },
        onSuccess: () => {
            // refetch()
            queryClient.invalidateQueries({ queryKey: ['users'] })
        }
    })

    const { mutateAsync } = useMutation({
        mutationFn: async (updatedSpot) => {
            await fetch(`http://localhost:5000/user/${selectedSpot._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedSpot)
            })
                .then(res => res.json())
                .then(data => {

                    console.log(data)

                    const updateUsers = users.map(user => ({
                        ...user,
                        touristSpots: user.touristSpots.map(spot =>
                            spot._id === selectedSpot._id ? { ...spot, ...updatedSpot } : spot
                        )
                    }))


                    Swal.fire({
                        text: 'You have successfully updated the spot',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })

                    return data
                })
        },
        onSuccess: () => {
            refetch()
        }
    })

    // const { data: users = [], isLoading, isError, refetch } = useQuery({
    //     queryFn: () =>
    //         axiosSecure(`/user?email=${user?.email}`)
    //             .then(res => {
    //                 console.log(res.data)
    //                 return res.data
    //             })
    //     ,
    //     queryKey: ['users']
    // })
    // console.log(users)

    // const { mutate } = useMutation({
    //     mutationFn: ({ id, updatedSpot }) => {
    //         console.log(id)
    //         axiosSecure.put(`/user/${id}`, { updatedSpot })
    //             .then(res => console.log(res.data))
    //     },
    //     onSuccess: ()=>{
    //         console.log('upated')
    //         refetch()
    //     }

    // })

    // const getData = async () => {
    //     const { data } = await axiosSecure(`/user?email=${user?.email}`)

    //     return data
    // }
    // const getData = () =>
    //     axiosSecure(`/user?email=${user?.email}`)
    //         .then(res => {
    //             console.log(res.data)
    //             return res.data
    //         })

    // useEffect(() => {
    //     // axios(`http://localhost:5000/user?email=${user?.email}`, { withCredentials: true })
    //     axiosSecure(`/user?email=${user?.email}`)
    //         .then(res => {
    //             console.log(res.data)
    //             setUsers(res.data)
    //         })
    // }, [user, axiosSecure])

    const userEmail = user?.email

    const usersMap = users.filter(user => user.email === userEmail)
    // setUsers(usersMap)
    const [selectedSpot, setSelectedSpot] = useState(null)

    const openModal = (spot) => {
        setSelectedSpot(spot)
        document.getElementById('my_modal_1').showModal();
    }

    const closeModal = () => {
        setSelectedSpot(null)
        document.getElementById('my_modal_1').close();
    }

    let serialNumber = 1;

    const handleDelete = id => {

        mutate({ id })

        // Swal.fire({
        //     title: "Are you sure?",
        //     text: "You won't be able to revert this!",
        //     icon: "warning",
        //     showCancelButton: true,
        //     confirmButtonColor: "#3085d6",
        //     cancelButtonColor: "#d33",
        //     confirmButtonText: "Yes, delete it!"
        // }).then((result) => {
        //     if (result.isConfirmed) {

        //         fetch(`http://localhost:5000/user/${id}`, {
        //             method: 'DELETE'
        //         })
        //             .then(res => res.json())
        //             .then(data => {
        //                 console.log(data)
        //                 const getTouristSpots = users.map((user) => ({
        //                     ...user,
        //                     touristSpots: user.touristSpots.filter(e => e._id !== id),

        //                 }))

        //                 // setUsers(getTouristSpots)

        //                 // getData()
        //             })



        //         Swal.fire({
        //             title: "Deleted!",
        //             text: "The spot has been deleted.",
        //             icon: "success"
        //         });
        //     }

        // });

    }

    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target
        const userName = form.userName.value;
        const email = form.email.value;
        const countryName = form.countryName.value;
        const spotName = form.spotName.value;
        const location = form.location.value;
        const photoURL = form.photoURL.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitors = form.totalVisitors.value;
        const description = form.description.value;


        document.getElementById('my_modal_1').close();

        const updatedSpot = { userName, email, countryName, spotName, location, photoURL, averageCost, seasonality, travelTime, totalVisitors, description }

        // fetch(`http://localhost:5000/user/${selectedSpot._id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(updatedSpot)
        // })
        //     .then(res => res.json())
        //     .then(data => {

        //         console.log(data)

        //         const updateUsers = users.map(user => ({
        //             ...user,
        //             touristSpots: user.touristSpots.map(spot =>
        //                 spot._id === selectedSpot._id ? { ...spot, ...updatedSpot } : spot
        //             )
        //         }))


        //         Swal.fire({
        //             text: 'You have successfully updated the spot',
        //             icon: 'success',
        //             confirmButtonText: 'Ok'
        //         })
        //         // getData()
        //     })
        // mutate({ id: selectedSpot._id, updatedSpot })
        mutateAsync(updatedSpot)

    }

    if (isLoading) return <span className="loading loading-spinner loading-lg"></span>
    if (isError || error) {
        console.log(isError, error)
    }



    return (
        <div className="text-center">
            <h1 className="text-3xl font-semibold mt-6 md:mt-3">My Tourist Spots</h1>
            <p className="w-11/12 md:w-2/4 mx-auto text-base font-medium mt-5 md:mt-1 mb-10">On this page, you can view all the tourist spots you have added. You can update or delete any entry, but only spots that you've personally added are visible.
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
                    {usersMap.map(user =>
                        <tbody key={user._id}>
                            {user.touristSpots.map(e =>
                                <tr key={e._id}>
                                    <th>{serialNumber++}</th>
                                    <td>{e.spotName}</td>
                                    <td>{e.countryName}</td>
                                    <td>{e.location}</td>
                                    <td>{e.averageCost}</td>
                                    <td>  <button className=" hover:underline hover:to-blue-400" onClick={() => openModal(e)}>Update</button>
                                        <dialog id="my_modal_1" className="modal">
                                            {selectedSpot &&
                                                <div className="modal-box">
                                                    <h1 className="text-center text-2xl font-semibold">Update Details</h1>
                                                    <div className="modal-action">
                                                        <form onSubmit={handleUpdate} method="dialog" className="w-full p-3">
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
                                                                        defaultValue={selectedSpot.userName}
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
                                                                    defaultValue={selectedSpot.email}
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
                                                                        defaultValue={selectedSpot.countryName}
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
                                                                        defaultValue={selectedSpot.spotName}
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
                                                                    defaultValue={selectedSpot.location}
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
                                                                    defaultValue={selectedSpot.photoURL}
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
                                                                        defaultValue={selectedSpot.averageCost}
                                                                        className="border py-3 px-3 rounded-md focus:outline-none focus:border-[#ff1ecc] w-full max-w-xl" />
                                                                </div>
                                                                <div className="flex-1">
                                                                    <label className="label">
                                                                        <span className="label-text text-[#2c3345] text-sm font-semibold">Seasonality</span>
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Enter Seasonality"
                                                                        name="seasonality"
                                                                        defaultValue={selectedSpot.seasonality}
                                                                        className="border py-3 px-3 rounded-md focus:outline-none focus:border-[#ff1ecc] w-full max-w-xl" />
                                                                </div>
                                                            </div>

                                                            <div className="flex items-center my-4">
                                                                <div className="flex-1 mr-10">
                                                                    <label className="label">
                                                                        <span className="label-text text-[#2c3345] text-sm font-semibold">Travel Time</span>
                                                                    </label>
                                                                    <input
                                                                        type="time"
                                                                        placeholder="Enter Travel Time"
                                                                        name="travelTime"
                                                                        defaultValue={selectedSpot.travelTime}
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
                                                                        defaultValue={selectedSpot.totalVisitors}
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
                                                                    defaultValue={selectedSpot.description}
                                                                    className="border textar py-3 px-3 rounded-md focus:outline-none focus:border-[#ff1ecc] w-full max-w-xl" />
                                                            </div>

                                                            <button type="submit" className="md:mt-0 mt-3 px-6 py-3 mr-1 text-white bg-sky-500 hover:bg-sky-700 text-sm font-semibold rounded-md">Update</button>
                                                            <button type="button" onClick={closeModal} className="px-6 py-3 text-white bg-sky-500 hover:bg-sky-700 text-sm font-semibold rounded-md">Close</button>

                                                        </form>
                                                    </div>
                                                </div>
                                            }
                                        </dialog>
                                    </td>
                                    <td> <button className=" hover:underline hover:to-blue-400" onClick={() => handleDelete(e._id)}>Delete</button>
                                    </td>



                                </tr>

                            )}
                        </tbody>
                    )}


                </table>
            </div>
        </div>
    );
};

export default MyList;