import React, { useState } from "react";
import { useForm } from "react-hook-form";

function RegisterPage({ onRegister }) {
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
        <>
        <div className="container  text-center text-light">
        <h1 className="greetheader display-2"> Registrar</h1>
        <p className="greettext">Faça seu cadastro</p>
        </div>
        <div className="container registercontainer text-center text-light bg-success">
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <div className="col-4 offset-4 p-2">
                        <label htmlFor="fullnamefield" >
                            Nome completo:
                        </label>
                        <input className="inputone col-4 form-control" id="fullnamefield" type="text" 
                        required />
                    </div>
                    <div className="col-4 offset-4 p-2">
                        <label htmlFor="datanascimentoreg">
                            Data Nascimento
                        </label>
                        <input className="inputone form-control" id="datanascimentoreg" type="date" 
                        required/>
                    </div>
                    <div className="col-4 offset-4 p-2">
                        <label htmlFor="usernamefield" >
                            Email:
                        </label>
                        <input className="inputone form-control" id="usernamefield" type="text" value={username} onChange={(e) => setUsername(e.target.value)} 
                        required/>
                    </div>
                    <div className="col-4 offset-4 p-2">
                        <label htmlFor="passwordfield">
                            Senha:
                        </label>
                        <input className="inputone form-control" id="passwordfield" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                         required/>
                    </div>
                    <div className="col-4 offset-4 p-2">
                        <label htmlFor="passwordfieldconf">
                            Confirmar Senha:
                        </label>
                        <input className="inputone form-control" id="passwordfieldconf" type="password" value={passwordconf} onChange={(e) => setPasswordconf(e.target.value)}
                        required/>
                    </div>
                    <br />
                    <br />
                    {password !="" && password === passwordconf && 
                    (<button className="btn btn-primary btn-lg col-2 fw-semibold formbutton display-3 m-2"  id="submitbutton" type="submit" value="Submit"> Registrar </button> )
                    }
                </form>
            </div>  
        </div>
        <div className="container registercontainer text-center text-danger">
            <p className="fw-bold h3">Atenção: use o navegador privado.</p>
        </div>
        </>
    );
}

export default RegisterPage;