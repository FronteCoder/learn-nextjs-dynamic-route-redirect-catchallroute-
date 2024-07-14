import Link from "next/link";

async function fetchUsers() {
  try {
    const apiResponse= await fetch('https://dummyjson.com/users');
    const result=await apiResponse.json();
    return result.users;
  } catch (e: any) {
    throw new Error(e);
  }
}

export default async function UsersList() {
    const users=await fetchUsers();
  return <>
  <h1 className="text-sky-500 antialiased">Users List</h1>
  <div className="mt-5 mb-10 border-solid border-2 border-cyan-700">
        <ul className="mt-10 grid grid-cols-5 gap-10">
          {
            users.length>0?
            users.map((user:any)=>{
                return <li className="hover:cursor-pointer hover:text-red-400 hover:font-bold"
                key={user.id}>
                    <Link href={`/server-fetch/${user.id}`}>
                    {user.firstName}
                    </Link>
                </li>
            })
            :"No Data"
          }
        </ul>
        
    
  </div>
  </>;
}
