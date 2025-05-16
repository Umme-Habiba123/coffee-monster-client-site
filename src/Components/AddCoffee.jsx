import Swal from "sweetalert2";

const AddCoffee = () => {
    const addCoffeHandler = e => {
        e.preventDefault()

        const form = e.target
        const formData = new FormData(form)
        const newCoffee = Object.fromEntries(formData.entries())
        console.log(newCoffee)

        // send data to the server---
        fetch('http://localhost:5000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Added successfully!",
                        icon: "success",
                        draggable: true
                    });
                }
            })

    }



    return (
        <div className='p-24'>

            <div className='p-12 text-center space-y-4  '>
                <h1 className='text-5xl dancing-script-font '>Add new Coffee</h1>
                <p className="dancing-script-font text-xl">It is a long established fact that a reader will be distraceted by the readable content of a <br /> page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>\

                <form onSubmit={addCoffeHandler} className="">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Name</label>
                            <input
                                name="name"
                                type="text"
                                className="input  w-full" placeholder="Enter coffee name" />
                        </fieldset>

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Quantity</label>
                            <input
                                name="quantity"
                                type="text"
                                className="input  w-full" placeholder="Enter coffee Quantity" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Supplier</label>
                            <input
                                name="supplier"
                                type="text"
                                className="input  w-full" placeholder="Enter coffee supplier" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Taste</label>
                            <input
                                name="taste"
                                type="text"
                                className="input  w-full" placeholder="Enter coffee taste " />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Price</label>
                            <input
                                name="price"
                                type="text"
                                className="input  w-full" placeholder="price per cup         " />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Details</label>
                            <input
                                name="details"
                                type="text"
                                className="input  w-full" placeholder="Enter coffee details" />
                        </fieldset>
                    </div>

                    <div className="mt-5">
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Photo</label>
                            <input
                                name="photo"
                                type="text"
                                className="input  w-full" placeholder="Enter photo URL" />
                        </fieldset>
                        <input type="submit" className="btn mt-3 w-full text-xl dancing-script-font" value='Add Coffee' />
                    </div>

                </form>


            </div>
        </div>
    );
};

export default AddCoffee;