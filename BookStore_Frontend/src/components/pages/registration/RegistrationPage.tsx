import { useState } from "react"
import { Quote } from "../../commons/quote/Quote"
import { RegistrationModel } from "../../../models/RegistrationModel";
import { FieldErrors } from "../../commons/field_errors/FieldErrors";
import { FormLoader } from "../../commons/form_loader/FormLoader";
import { useAuthenticationContext } from "../../../authentication/authenticationContext";
import { Link } from "react-router-dom";
import { HttpErrorMessage } from "../../commons/http_error_message/HttpErrorMessage";

export const RegistrationPage = () => {

    const { authentication, register } = useAuthenticationContext();

    const [personDetails, setPersonDetails] = useState<RegistrationModel>({firstName: "", lastName: "", dateOfBirth: new Date("1800-01-01"), email: "", password: ""});
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setPersonDetails({ ...personDetails, [event.target.name]: event.target.value });
    };

    const handleRegisterClick = async () => {

        await register(personDetails, setIsLoading, setHttpError);
    };

    return (

        <div className="page-container px-5">

            <Quote quoteId={8} />
            
            <div className="custom-form">

                <div className="text-center">
                    <h1 className="text-3xl font-serif font-bold text-slate-800">Create Account</h1>
                    <p className="text-slate-500 mt-2">Join our community of book lovers</p>
                </div>

                <FormLoader isLoading={isLoading} />

                {(httpError && !httpError.startsWith("Some")) && <HttpErrorMessage httpError={httpError} />}

                {!authentication.isAuthenticated ? 

                    <>

                        <form className="flex flex-col gap-5 w-full">

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-slate-700">First Name</label>
                                    <FieldErrors fieldName="firstName" httpError={httpError} />
                                    <input type="text" name="firstName" onChange={handleChange} placeholder="John" className="input"/>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                                    <FieldErrors fieldName="lastName" httpError={httpError} />
                                    <input type="text" name="lastName" onChange={handleChange} placeholder="Doe" className="input"/>
                                </div>
                            </div>
                            
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-slate-700">Date of Birth</label>
                                <FieldErrors fieldName="dateOfBirth" httpError={httpError} />
                                <input type="date" name="dateOfBirth" onChange={handleChange} className="input"/>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-slate-700">Email</label>
                                <FieldErrors fieldName="email" httpError={httpError} />
                                <input type="text" name="email" onChange={handleChange} placeholder="john@example.com" className="input"/>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-slate-700">Password</label>
                                <FieldErrors fieldName="password" httpError={httpError} />
                                <input type="password" name="password" onChange={handleChange} placeholder="Create a strong password" className="input"/>
                            </div>

                        </form>

                        <button className="custom-btn-2 w-full" onClick={handleRegisterClick}>Create Account</button>

                        <div className="flex items-center gap-4 w-full">
                            <div className="flex-1 h-px bg-slate-200"></div>
                            <span className="text-sm text-slate-400">or</span>
                            <div className="flex-1 h-px bg-slate-200"></div>
                        </div>

                        <p className="text-slate-600">Already have an account? <Link to={"/login"} className="text-green-600 font-medium hover:underline">Sign In</Link></p>

                    </>

                    :

                    <>

                        <div className="flex flex-col items-center gap-5 text-center">

                            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>

                            <h2 className="text-2xl font-serif font-bold text-slate-800">Welcome to Book Store!</h2>

                            <p className="text-slate-600">Your account has been created successfully. You're now logged in and ready to explore our collection.</p>

                        </div>

                        <Link to={"/home"} className="custom-btn-2 w-full">Start Exploring</Link>

                    </>

                }

            </div>
            
        </div>

    )

}