import { Quote } from "../components/Quote";
import { SigninComp } from "../components/Signin";

export function Signin() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <SigninComp />
            </div>
            <div className="invisible lg:visible">
                <Quote />
            </div>
        </div>
    )
}