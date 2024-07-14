async function fetchUserDetails(userid: string) {
  try {
    const apiResponse = await fetch(`https://dummyjson.com/users/${userid}`);
    const result = await apiResponse.json();
    return result;
  } catch (e: any) {
    throw new Error(e);
  }
}

export default async function UserDetails({params}:any) {
    const userDetails=await fetchUserDetails(params['user-details']);
    return <>
 <h1 className="text-sky-500 antialiased">User Details of {userDetails.firstName}</h1>
  
        <ul className="mt-10 grid grid-cols-1 gap-2">
       
                
                {
            Object.values(userDetails).filter((item:any)=>typeof item==="string").map((item:any)=>{
                return <li key={item}>
                <div className="mt-5 mb-10 border-solid border-2 border-slate-500">
                   {item}
                </div>
                </li>
            })
            
          } 
          
        </ul>
        
    
    </>
}
