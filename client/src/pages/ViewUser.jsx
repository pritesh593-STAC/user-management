import { useEffect, useState } from "react";
import API from "../services/api";
import { useParams, Link } from "react-router-dom";

function ViewUser() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
  fetchUser();
}, []);

  const fetchUser = async () => {
    try {
      const res = await API.get(`/users/${id}`);
      setUser(res.data.data);
    } catch (error) {
      console.error(error);
      alert("Error loading user");
    }
  };

  if (!user) {
    return (
      <div className="container-fluid mt-5 text-center text-light">
        <h3>Loading user details...</h3>
      </div>
    );
  }

  return (
    <div className="container-fluid mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-12">

          <div className="card bg-dark text-light shadow-lg p-4">

            <h3 className="mb-4 text-center">
              User Details
            </h3>

            {/* User Info */}
            <div className="row mb-3">
              <div className="col-md-4 col-12 fw-bold">
                Full Name
              </div>
              <div className="col-md-8 col-12">
                {user.fullname}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-4 col-12 fw-bold">
                Email
              </div>
              <div className="col-md-8 col-12">
                {user.email}
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-4 col-12 fw-bold">
                Gender
              </div>
              <div className="col-md-8 col-12">
                {user.gender}
              </div>
            </div>

            {/* Button */}
            <div className="text-center">
              <Link to="/" className="btn btn-primary w-100">
                Back to Dashboard
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default ViewUser;
