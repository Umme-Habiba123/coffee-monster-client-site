import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const { _id, name, quantity, supplier, taste, details, price, photo } = useLoaderData()


    const handleUpdateCoffee = (e) => {
        e.preventDefault()

        const form = e.target
        const formData = new FormData(form)
        const updatedCoffee = Object.fromEntries(formData.entries())
        console.log(updatedCoffee)

        fetch(`http://localhost:5000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(updatedCoffee)




        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Coffee updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }




    return (
        <div>

            <div className='p-24'>

                <div className='p-12 text-center space-y-4  '>
                    <Link to={'/'}>
                        <button className='btn btn-primary  hover:bg-white hover:text-indigo-500 py-6 flex gap-2 dancing-script-font text-4xl mb-20'><span className='mt-1.5'><FaArrowLeftLong /></span>Back to home</button>
                    </Link>
                    <h1 className='text-5xl dancing-script-font '>Update Existing Coffee Details</h1>
                    <p className="dancing-script-font text-xl">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>\

                    <form onSubmit={handleUpdateCoffee} className="">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                                <label className="label">Name</label>
                                <input
                                    defaultValue={name}
                                    name="name"
                                    type="text"
                                    className="input  w-full" placeholder="Enter coffee name" />
                            </fieldset>

                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                <label className="label">Quantity</label>
                                <input
                                    defaultValue={quantity}
                                    name="quantity"
                                    type="text"
                                    className="input  w-full" placeholder="Enter coffee Quantity" />
                            </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                <label className="label">Supplier</label>
                                <input defaultValue={supplier}
                                    name="supplier"
                                    type="text"
                                    className="input  w-full" placeholder="Enter coffee supplier" />
                            </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                <label className="label">Taste</label>
                                <input
                                    defaultValue={taste}
                                    name="taste"
                                    type="text"
                                    className="input  w-full" placeholder="Enter coffee taste " />
                            </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                <label className="label">Price</label>
                                <input
                                    defaultValue={price}
                                    name="price"
                                    type="text"
                                    className="input  w-full" placeholder="price per cup         " />
                            </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                <label className="label">Details</label>
                                <input
                                    defaultValue={details}
                                    name="details"
                                    type="text"
                                    className="input  w-full" placeholder="Enter coffee details" />
                            </fieldset>
                        </div>

                        <div className="mt-5">
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                <label className="label">Photo</label>
                                <input
                                    defaultValue={photo}
                                    name="photo"
                                    type="text"
                                    className="input  w-full" placeholder="Enter photo URL" />
                            </fieldset>
                            <input type="submit" className="btn mt-3 w-full text-xl dancing-script-font" value='Update Coffee Details' />
                        </div>

                    </form>


                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;