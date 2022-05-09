import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../axiosPrivate/axiosPrivate";
import auth from "../firebase.init";

const useMyProducts = () =>{
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
    return [myProducts, setMyProducts]
}
export default useMyProducts;