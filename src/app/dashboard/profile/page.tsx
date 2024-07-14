"use client"
import { usePathname, useSearchParams } from "next/navigation"

export default function Page(){
    const pathname=usePathname();
    const searchParams=useSearchParams();
    console.log(pathname,searchParams);
    console.log(searchParams.get('search'))
    console.log(searchParams.get('randomvalue'))
    return <>
    <h3>Welcome to Profile Page</h3>
    </>
}