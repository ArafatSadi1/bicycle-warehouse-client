import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import axiosPrivate from "../../axiosPrivate/axiosPrivate";
import { signOut } from "firebase/auth";

const MyProducts = () => {
  const [user] = useAuthState(auth);
  const [myProducts, setMyProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getMyProducts = async () => {
        try {
          const email = user?.email;
          const url = `https://whispering-crag-62697.herokuapp.com/myProducts?email=${email}`;
          const { data } = await axiosPrivate.get(url);
          setMyProducts(data);
        } catch (error) {
          if (error.response.status === 401 || error.response.status === 403) {
            console.log("error");
            signOut(auth);
            navigate("/login");
          }
        }
    };
    getMyProducts();
  }, [user]);

  const handleMyProductDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `https://whispering-crag-62697.herokuapp.com/myProducts/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = myProducts?.filter((product) => product._id !== id);
          setMyProducts(remaining);
        });
    }
  };

  return (
    <div className="my-5">
      <Container>
        <h3 className="text-center mb-5">Manage Your Product</h3>
        <Table className="border-dark" striped bordered hover responsive="sm">
          <thead>
            <tr>
              <th className="text-center">product Name</th>
              <th className="text-center">Product Id</th>
              {/* <th className="text-center">Price</th> */}
              <th className="text-center">Qty</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {myProducts?.map((product) => (
              <tr key={product._id}>
                <td className="text-center">{product.name}</td>
                <td className="text-center">{product._id}</td>
                <td className="text-center">{product.quantity}</td>
                <td className="text-center">
                  <Button
                    onClick={() => handleMyProductDelete(product._id)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="w-75 mx-auto my-5 p-3 bg-dark rounded">
          <Link
            to="/addProduct"
            className="btn btn-warning d-block mx-auto w-75 fw-bold"
          >
            Add New Product
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default MyProducts;
