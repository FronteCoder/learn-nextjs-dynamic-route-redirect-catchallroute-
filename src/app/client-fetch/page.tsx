"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";
const fetcher = (url:string) => fetch(url).then(res => res.json()).then(res=>res.users)

export default function ClientSideDataFetch() {
//   const [loading, setLoading] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState(false);
//   async function fetchUsers() {
//     try {
//       setLoading(true);
//       const apiResponse = await fetch("https://dummyjson.com/users");
//       const result = await apiResponse.json();

//       if (result?.users) {
//         setUsers(result.users);
//         setLoading(false);
//       }
//     } catch (e: any) {
//       console.error(e);
//       setError(true);
//       setLoading(false);
//       setUsers([]);
//     }
//   }
//   useEffect(() => {
//     fetchUsers();
//   }, []);
const {data:users,error,isLoading:loading}=useSWR('https://dummyjson.com/users',fetcher);
  if (loading) {
    return (
      <>
        <h1 className="h-screen grid grid-cols-1 content-center text-red-700 antialiased">
          Loading....
        </h1>
      </>
    );
  }
  if (error) {
    <h1>Not Able To fetch Users</h1>;
  }
  return (
    <>
      <h1 className="text-sky-500 antialiased">Users List</h1>
      <div className="mt-5 mb-10 border-solid border-2 border-cyan-700">
        <ul className="mt-10 grid grid-cols-5 gap-10">
          {users.length > 0
            ? users.map((user: any) => {
                return (
                  <li
                    className="hover:cursor-pointer hover:text-red-400 hover:font-bold"
                    key={user.id}
                  >
                    {user.firstName}
                  </li>
                );
              })
            : "No Data"}
        </ul>
      </div>
    </>
  );
}
