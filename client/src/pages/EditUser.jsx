import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    gender: "",
  });

 useEffect(() => {
  fetchUser();
}, [id]);

  const fetchUser = async () => {
    try {
      const res = await API.get(`/users/${id}`);
      setForm(res.data.data);
    } catch (error) {
      console.error(error);
      alert("Error loading user");
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/users/${id}`, form);
      alert("User updated successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Error updating user");
    }
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-12">

          <div className="card bg-dark text-light shadow-lg p-4">

            <h3 className="mb-4 text-center">
              Edit User
            </h3>

            <form onSubmit={handleSubmit}>

              {/* Full Name */}
              <div className="mb-3">
                <label className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  className="form-control"
                  value={form.fullname}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Gender */}
              <div className="mb-4">
                <label className="form-label">
                  Gender
                </label>
                <select
                  name="gender"
                  className="form-select"
                  value={form.gender}
                  onChange={handleChange}
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="btn btn-warning w-100"
              >
                Update User
              </button>

            </form>

          </div>

        </div>
      </div>
    </div>
  );
}

export default EditUser;
