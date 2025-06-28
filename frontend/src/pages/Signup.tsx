import { SignupComp } from "../components/Signup";
import { Quote } from "../components/Quote";

export function Signup(){
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <SignupComp />
            </div>
            <div className="invisible lg:visible">
                <Quote/>
            </div>    
        </div>
    )
}