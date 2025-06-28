import { type ChangeEvent } from "react";
import { Link } from "react-router-dom";
interface LabledInputType {
    title: string;
    placeholder: string;
    type?: string;
    required?: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export function UserInput({ title, placeholder, type, onChange }: LabledInputType) {
    return <div>
        <div>
            <label className="block mb-2 text-sm font-medium text-black">{title}</label>
            <input type={type || "text"} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
    </div>
}

export function AuthHeader({ type }: { type: "signin" | "signup" }) {
    return (
        <div>
            <div className="text-3xl font-extrabold text-center">
                {type==="signin"? "Welcome back" : "Create an account"}
            </div>
            <div className="text-slate-400 text-center">
                {type==="signin" ? "Don't have an account?": " Already have an account?"}
                <Link to={type==="signin" ? "/signup" : "/signin"} className="pl-1 underline">{type==="signin"?"Register":"Sign in"}</Link>
            </div>
        </div>
    )
}
