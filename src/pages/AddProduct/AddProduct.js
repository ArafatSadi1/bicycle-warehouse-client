import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    const url = "https://whispering-crag-62697.herokuapp.com/myProducts";
    axios.post(url, data)
    event.target.reset();
    toast("Your Product Added");
  };
  return (
    <div className="row m-0">
      <div className="mx-auto m-3 border rounded shadow p-5 col-lg-6 col-sm-12">
        <h4 className="text-center">Add Your Product</h4>
        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="mb-2 py-1 px-2"
            value={user.email}
            {...register("email")}
            readOnly
          />
          <input
            className="mb-2 py-1 px-2"
            placeholder="Picture"
            {...register("picture")}
            required
          />
          <input
            className="mb-2 py-1 px-2"
            placeholder="Name"
            {...register("name")}
            required
          />
          <textarea
            className="mb-2 py-1 px-2"
            placeholder="Description"
            {...register("about")}
            required
          />
          <input
            className="mb-2 py-1 px-2"
            placeholder="Price"
            type="number"
            {...register("price")}
            required
          />
          <input
            className="mb-2 py-1 px-2"
            placeholder="Quantity"
            type="number"
            {...register("quantity")}
            required
          />
          <input
            className="mb-2 py-1 px-2"
            placeholder="SupplierName"
            {...register("supplierName")}
            required
          />
          <input
            className="btn btn-success fw-bold w-50 d-block mx-auto mt-3"
            value="Add Product"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
