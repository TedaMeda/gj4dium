import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthHeader, UserInput } from "./Auth";
import axios from "axios";
import { BACKEND_URL } from "../config/config";
import { Button } from "./Button";

export const SignupComp = () => {
    const [postInputs, setPostInputs] = useState({
        name: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    async function sendRequest() {
        try {
            console.log(postInputs)
            const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
                name: postInputs.name,
                email: postInputs.email,
                password: postInputs.password
            });
            const jwt = response.data.jwt;
            localStorage.setItem("jwt", jwt);
            navigate("/blogs");
        } catch (error) {
            console.error("Error signing up:", error);
            throw error;
        }
    }


    return <div className="h-screen flex flex-col justify-center">
        <div className="flex justify-center">
            <div className="bg-white-50 flex flex-col gap-7 w-2/4">
                <AuthHeader type="signup" />
                <div className="flex flex-col gap-3">
                     <UserInput title="Name" placeholder="John Cena" onChange={(e) => {
                        setPostInputs((c) => ({
                            ...c,
                            name: e.target.value
                        }))
                    }} />
                    <UserInput title="Email" placeholder="john@gmail.com" onChange={(e) => {
                        setPostInputs((c) => ({
                            ...c,
                            email: e.target.value
                        }))
                    }} />
                    <UserInput title="Password" placeholder="john's secret" type={"password"} onChange={(e) => {
                        setPostInputs((c) => ({
                            ...c,
                            password: e.target.value
                        }))
                    }} />
                   <Button lable="Sign up" onClick={sendRequest} />
                </div>
            </div>
        </div>

    </div>
}