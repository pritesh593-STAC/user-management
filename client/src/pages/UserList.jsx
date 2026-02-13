import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/users");
      setUsers(res.data.data);
    } catch (error) {
      console.error(error);
      alert("Error loading users");
    }
  };

  const deleteUser = async (id) => {
    if (window.confirm("Delete this user?")) {
      await API.delete(`/users/${id}`);
      fetchUsers();
    }
  };

  const searchUsers = async (term) => {
    try {
      const res = await API.get(`/users?search=${term}`);
      setUsers(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid mt-4">

      <div className="card bg-dark text-light shadow-lg">

        {/* Header */}
        <div className="card-header d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2">

          <h4 className="mb-0">
            User List
          </h4>

          <input
            className="form-control w-100 w-md-50"
            placeholder="Search users..."
            onChange={(e) => searchUsers(e.target.value)}
          />

        </div>

       
        <div className="card-body">

          
          <div className="table-responsive">

            <table className="table table-dark table-hover align-middle">

              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center">
                      No users found
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr key={user._id}>
                      <td>{user.fullname}</td>
                      <td>{user.email}</td>
                      <td>{user.gender}</td>

                      <td className="text-center">

                        <div className="d-flex flex-wrap gap-2 justify-content-center">

                          <Link
                            to={`/view/${user._id}`}
                            className="btn btn-info btn-sm"
                          >
                            View
                          </Link>

                          <Link
                            to={`/edit/${user._id}`}
                            className="btn btn-warning btn-sm"
                          >
                            Edit
                          </Link>

                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => deleteUser(user._id)}
                          >
                            Delete
                          </button>

                        </div>

                      </td>
                    </tr>
                  ))
                )}
              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default UserList;
