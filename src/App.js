import React, { useEffect } from "react";

import Search from "./components/Search";
import Users from "./components/Users";
import useFetch from "./hook/useFetch";

const App = () => {
  const { users, isLoading, error, setUsers } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const handleDeleteUser = (id) => {
    const filter = users.filter((user) => user.id !== id);
    setUsers(filter);
  };

  const handleSearch = (searchText) => {
    const newSearch = users.filter((user) => {
      const name = user.name.toLowerCase();
      return name.startsWith(searchText);
    });
    setUsers(newSearch);
  };

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
      <Search onHandleSearch={handleSearch} />
      {users && <Users users={users} onHandleDeleteUser={handleDeleteUser} />}
    </div>
  );
};

export default App;
