import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {

  const { _id } = coffee

  const handleDelete = (_id) => {
    console.log(_id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json()).then(data => {
            if (data.deletedCount)
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success"
              });

            const remainingCoffees = coffees.filter((cof) => cof.id !== _id)
            setCoffees(remainingCoffees)
          })


      }
    });
  }

  console.log(coffee)
  return (
    <div >
      <div className="card card-side bg-base-100 shadow-sm border p-4 ">
        <figure>
          <img className='w-[150px]'
            src={coffee.photo}
            alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name : {coffee.name}</h2>
          <p>Supplier : {coffee.supplier}</p>
          <p>Price : {coffee.price}</p>


        </div>
        <div className="join join-vertical space-y-5
                     ">
          <Link to={`coffee/${_id}`}>
            <button className="btn join-item">View</button>
          </Link>
          <Link to={`updateCoffee/${_id}`}>
            <button className="btn join-item">Edit</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn join-item">X</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;