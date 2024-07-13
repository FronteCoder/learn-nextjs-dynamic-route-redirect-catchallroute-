"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  function handleNavigation(route: string) {
    router.push(route);
  }
  const router = useRouter();
  return (
    <>
      <h1 className="text-blue-600 mx-3 my-2">Welcome to Dashboard</h1>
      <h2>Navigation Using Link</h2>
      <Link
        className="text-slate-700 hover:text-blue-300 mx-3 my-2"
        href={"dashboard/products"}
      >
        Go to Products
      </Link>
      <Link
        className="text-slate-700 hover:text-blue-300 mx-3 my-2"
        href={"dashboard/customers"}
      >
        Go to Customers
      </Link>
      <h2>Navigation Using useRouter</h2>
      <button
        onClick={() => handleNavigation("dashboard/products")}
        className="text-white hover:text-blue-300 hover:bg-white mx-3 my-2 bg-slate-700"
      >
        Go to Products
      </button>
      <button
        onClick={() => {
          handleNavigation("dashboard/customers");
        }}
         className="text-white hover:text-blue-300 hover:bg-white mx-3 my-2 bg-slate-700"
      >
        Go to Customers
      </button>
    </>
  );
}
