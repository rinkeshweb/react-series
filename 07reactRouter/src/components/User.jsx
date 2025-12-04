import { useParams } from "react-router-dom";

export default function User() {
    const { userId } = useParams();

    return (
        <>
            <div className="p-4 py-20 text-center">
                <h1 className="text-3xl">User <span className="bg-cyan-700 text-gray-100 px-2 rounded">{userId}</span></h1>
            </div>
        </>
    )
}