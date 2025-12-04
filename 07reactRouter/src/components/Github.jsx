// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

export default function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://dummyjson.com/products')
    //         .then(response => response.json())
    //         .then((data) => {
    //             console.log(data)
    //             setData(data);
    //         })
    //         .catch((error) => {
    //             console.error(error)
    //         })
    // }, [])

    return (
        <>
            <div className="p-4 py-20 text-center bg-cyan-700 max-w-7xl mx-auto my-10 rounded-4xl">
                <h1 className="text-3xl mb-3 text-gray-100">Total Products: {data?.total}</h1>
                <h1 className="text-3xl text-gray-100">Limit per page: {data?.limit}</h1>
            </div>
        </>
    )
}


export const productLoader = async () => {
  const productData = await fetch("https://dummyjson.com/products");
  return productData.json();
};