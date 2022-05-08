import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = async () => {
      const email = user?.user?.email;
      if (user) {
        const url = "https://whispering-crag-62697.herokuapp.com/login";
        fetch(url, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(email),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data.accessToken);
            setToken(data.accessToken);
            localStorage.setItem("accessToken", data.accessToken);
          });
      }
    };
    getToken();
  }, [user]);
  return [token];
};
export default useToken;
