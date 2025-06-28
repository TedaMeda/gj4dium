import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

export function Appbar(){
    return <div className="flex justify-between border-b border-slate-300 px-10 py-2">
        <Link to={'/blogs'}>
        <div className="font-bold text-2xl">
            Medium
        </div>
        </Link>
        <div className="flex items-center">
            <Link to={'/publish'}>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-2 text-center">Create New</button>
            </Link>
            <Avatar name={"Ronak"} size={"large"} />
        </div>
    </div>
}