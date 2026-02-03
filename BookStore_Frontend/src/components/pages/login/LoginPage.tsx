import { Link, Navigate } from "react-router-dom"
import { Quote } from "../../commons/quote/Quote"
import { FieldErrors } from "../../commons/field_errors/FieldErrors"
import { useState } from "react";
import { LoginModel } from "../../../models/LoginModel";
import { useAuthenticationContext } from "../../../authentication/authenticationContext";
import { FormLoader } from "../../commons/form_loader/FormLoader";
import { HttpErrorMessage } from "../../commons/http_error_message/HttpErrorMessage";

export const LoginPage = () => {

    const { authentication, login } = useAuthenticationContext();

    const [personDetails, setPersonDetails] = useState<LoginModel>({ email: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setPersonDetails({ ...personDetails, [event.target.name]: event.target.value });
    };

    const handleSignInClick = async () => {

        await login(personDetails, setIsLoading, setHttpError);
    };
    
    if (authentication.isAuthenticated) return <Navigate to={"/"} />

    return (

        <div className="page-container px-5">

            <Quote quoteId={9} />
            
            <div className="custom-form">

                <div className="text-center">
                    <h1 className="text-3xl font-serif font-bold text-slate-800">Welcome Back</h1>
                    <p className="text-slate-500 mt-2">Sign in to continue your reading journey</p>
                </div>

                <FormLoader isLoading={isLoading} />

                {(httpError && !httpError.startsWith("Some")) && <HttpErrorMessage httpError={httpError} />}

                <form className="flex flex-col gap-5 w-full">

                    <div className="flex flex-col gap-2">

                        <label className="text-sm font-medium text-slate-700">Email</label>
                        <FieldErrors fieldName="email" httpError={httpError} />
                        <input type="text" name="email" onChange={handleChange} placeholder="Enter your email" className="input"/>

                    </div>

                    <div className="flex flex-col gap-2">

                        <label className="text-sm font-medium text-slate-700">Password</label>
                        <FieldErrors fieldName="password" httpError={httpError} />
                        <input type="password" name="password" onChange={handleChange} placeholder="Enter your password" className="input"/>

                    </div>

                </form>

                <div className="w-full flex flex-col gap-4 text-center">
                    
                    <button className="custom-btn-2 w-full" onClick={handleSignInClick}>Sign In</button>

                    <div className="flex items-center gap-4">
                        <div className="flex-1 h-px bg-slate-200"></div>
                        <span className="text-sm text-slate-400">or</span>
                        <div className="flex-1 h-px bg-slate-200"></div>
                    </div>

                    <p className="text-slate-600">Don't have an account?</p>

                    <Link to={"/register"} className="custom-btn-1 w-full">Create Account</Link>
                
                </div>

            </div>
            
        </div>

    )

}