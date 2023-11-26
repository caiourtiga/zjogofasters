import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Calculadora({ onRegister }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordconf, setPasswordconf] = useState("");
    const { register, watch,
        formState: { errors },
    } = useForm()   
    
    
    function handleSubmit(event) {
        event.preventDefault();
        onRegister({ username, password });
    }

    return (
        <div className="container registercontainer text-center text-light bg-success">
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <div className="col-4 offset-4 p-2">
                        <label htmlFor="fullnamefield" >
                            Nome completo:
                        </label>
                        <input className="inputone col-4 form-control" id="fullnamefield" type="text" 
                        {...register("fullnamefield", {required: true, min: 3, maxLength: 50})} />
                    </div>
                    <div className="col-4 offset-4 p-2">
                        <label htmlFor="datanascimentoreg">
                            Data Nascimento
                        </label>
                        <input className="inputone form-control" id="datanascimentoreg" type="date" 
                        {...register("datanascimentoreg", {required: true})}/>
                    </div>
                    <div className="col-4 offset-4 p-2">
                        <label htmlFor="usernamefield" >
                            Email:
                        </label>
                        <input className="inputone form-control" id="usernamefield" type="text" value={username} onChange={(e) => setUsername(e.target.value)} 
                        {...register("usernamefield", {required: true})}/>
                    </div>
                    <div className="col-4 offset-4 p-2">
                        <label htmlFor="passwordfield">
                            Senha:
                        </label>
                        <input className="inputone form-control" id="passwordfield" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                        {...register("passwordfield", {required: true, min: 4})} />
                    </div>
                    <div className="col-4 offset-4 p-2">
                        <label htmlFor="passwordfieldconf">
                            Confirmar Senha:
                        </label>
                        <input className="inputone form-control" id="passwordfieldconf" type="password" value={passwordconf} onChange={(e) => setPasswordconf(e.target.value)}
                        {...register("passwordfieldconf", {required: true, min: 4})}/>
                    </div>
                    <br />
                    <br />
                    <input className="btn btn-primary btn-lg col-2 fw-semibold formbutton display-3 m-2" id="submitbutton" type="submit" value="Submit" />
                </form>
            </div>  
        </div>
    );
}

export default Calculadora;