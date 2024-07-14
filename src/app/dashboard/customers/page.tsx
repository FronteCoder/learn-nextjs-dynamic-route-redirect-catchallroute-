
import { redirect } from "next/navigation";

export default function Page(){
    const customerData=null;
    if(!customerData) redirect("/dashboard/profile?search=shivam&randomvalue=abcde");
    return <>
    <h2>Welcome to customers Page</h2>
    </>
}