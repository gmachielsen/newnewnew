import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {SyncOutlined} from '@ant-design/icons';
import Link from "next/link";
import { Context } from "../context";
import {useRouter} from 'next/router';

const Register = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // (global)state
  const { state } = useContext(Context);
  const { user } = state;
  // or 
  // const {
  //   state: {user},
  // } = useContext(Context);

  // router
  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  console.log("TESTING ENV", process.env.NEXT_PUBLIC_API);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/reg`, {
        email,
      });
      // console.log("REGISTER RESPONSE", data);
      toast.success("Verification email send. Please check you email.");
      setEmail("");
      setLoading(false);
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }

  };

  return (
    <>
      <h1 className="jumbotron text-center bg-primary square">Register</h1>

      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mb-4 p-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />

          <button style={{width:'100%'}} type="submit" className="btn btn-block btn-primary"
            disabled={  !email || loading }
          >
            {loading ? <SyncOutlined spin /> : "Submit"}
          </button>
        </form>
        <p className="text-center p-3">
          Already registered?{" "}
          <Link href="/login">
            <a>Login</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;