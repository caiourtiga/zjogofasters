import React, { Component, useState } from 'react';
import { set } from 'react-hook-form';



export default function Body({ user }) {
  const [emaillogin, setEmaillogin] = useState("");
  const [passwordlogin, setPasswordlogin] = useState("");
  const [loginusuario, setLoginusuario] = useState(0);
  const [classe, setClasse] = useState("");
  const [raca, setRaca] = useState("");
  const [corpele, setCorpele] = useState("");
  const [corcabelo, setCorcabelo] = useState("");
  const [seualtq, setSeualtq] = useState("");
  const [suamount, setSuamount] = useState("");

  const fazerLogin = async (event) => {
    event.preventDefault();
    if (emaillogin === user.username && passwordlogin === user.password) {
      alert("Login realizado com sucesso!");
      setLoginusuario(1);
    }
    else {
      setLoginusuario(0);
      alert("Email ou senha incorretos!");
    }
  }


  const showClasse = async (event) => {
    event.preventDefault();
    alert(classe);

  }

  return (
    <>
      {loginusuario === 0 && (<> <div className="container text-center text-light">
        <h1 className="greetheader display-2"> Login</h1>
        <p className="greettext">Faça seu login para jogar</p>
      </div>
        <br />
        <div className="container registercontainer text-center text-light bg-success">
          <div className="container">
            <div className="row">
              <form onSubmit={fazerLogin}>
                <div className="col-4 offset-4 p-2">
                  <label htmlFor="emailfield" >
                    Email:
                  </label>
                  <input className="inputone form-control" id="emailfield" type="text" value={emaillogin} onChange={(e) => setEmaillogin(e.target.value)}
                  />
                </div>
                <div className="col-4 offset-4 p-2">
                  <label htmlFor="passwordfield">
                    Senha:
                  </label>
                  <input className="inputone form-control" id="passwordfield" type="password" value={passwordlogin} onChange={(e) => setPasswordlogin(e.target.value)}
                  />
                </div>
                <br />
                <input className="btn btn-primary btn-lg col-2 fw-semibold formbutton display-3 m-2" id="submitbutton" type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div></>)}
      <br />
      {loginusuario === 1 && (
        <>
          <div className="container text-center text-light bg-success">
            <h1 className="greetheader display-2"> Selecione sua classe</h1>
            <p className="greettext">Escolha sua classe para jogar</p>
          </div>
          <br />
          <div className="container registercontainer text-center text-light bg-success">
            <div className="container">
              <div className="row">
                <div className="col-3 m-2 border">
                  <button className="btn btn-lg  m-2 btn-primary" value="Bárbaro" onClick={(e) => setClasse(e.target.value)}> Bárbaro </button>
                  <p> Vida: 100, Mana: 10, Velocidade de Ataque: 1.30</p>
                </div>
                <div className="col-3 m-2 border">
                  <button className="btn btn-lg m-2 btn-primary" value="Paladino" onClick={(e) => setClasse(e.target.value)}> Paladino </button>
                  <p> Vida: 85, Mana: 35, Velocidade de Ataque: 1.25</p>
                </div>
                <div className="col-3 m-2 border">
                  <button className="btn btn-lg m-2 btn-primary" value="Atirador" onClick={(e) => setClasse(e.target.value)}> Atirador </button>
                  <p> Vida: 75, Mana: 45, Velocidade de Ataque: 1.35</p>
                </div>
                <div className="col-3 m-2 border">
                  <button className="btn btn-lg m-2 btn-primary" value="Guerreiro" onClick={(e) => setClasse(e.target.value)}> Guerreiro </button>
                  <p> Vida: 95, Mana: 25, Velocidade de Ataque: 1.30</p>
                </div>
                <div className="col-3 m-2 border">
                  <button className="btn btn-lg m-2 btn-primary" value="Arqueiro" onClick={(e) => setClasse(e.target.value)}> Arqueiro </button>
                  <p> Vida: 80, Mana: 40, Velocidade de Ataque: 1.40</p>
                </div>
              </div>
            </div>
            {classe != "" && (
              <button className="btn btn-lg col-2 m-2 btn-primary" onClick={() => setLoginusuario(2)}> Criar personagem </button>
            )}
          </div>
          <br />
        </>
      )
      }
      {loginusuario === 2 && (
        <>
          <div className="container text-center text-light bg-success">
            <h1 className="greetheader display-2"> Quem é você?</h1>
            <p className="greettext">Crie seu personagem</p>
          </div>
          <br />
          <div className="container registercontainer text-center text-light bg-success">
            <div className="container">
              <h3>Raça</h3>
              <div className="row m-2">
                <button className="btn btn-lg col-2 m-2 btn-primary" value="Anão" onClick={(e) => setRaca(e.target.value)}> Anão </button>
                <button className="btn btn-lg col-2 m-2 btn-primary" value="Humano" onClick={(e) => setRaca(e.target.value)}> Humano </button>
                <button className="btn btn-lg col-2 m-2 btn-primary" value="Elfo" onClick={(e) => setRaca(e.target.value)}> Elfo </button>
                <button className="btn btn-lg col-2 m-2 btn-primary" onClick={showClasse}> Mostrar Classe </button>
              </div>
            </div>
            <div className="container">
              <h3>Cor de pele</h3>
              <div className="row m-2">
                <button className="btn btn-lg col-2 m-2 btn-primary" value="Branco" onClick={(e) => setCorpele(e.target.value)}> Branco </button>
                <button className="btn btn-lg col-2 m-2 btn-primary" value="Preto" onClick={(e) => setCorpele(e.target.value)}> Preto </button>
                <button className="btn btn-lg col-2 m-2 btn-primary" value="Pardo" onClick={(e) => setCorpele(e.target.value)}> Pardo </button>
              </div>
            </div>
            <div className="container">
              <h3>Cor de cabelo</h3>
              <div className="row m-2">
                <button className="btn btn-lg col-2 m-2 btn-primary" value="Branco" onClick={(e) => setCorcabelo(e.target.value)}> Branco </button>
                <button className="btn btn-lg col-2 m-2 btn-primary" value="Preto" onClick={(e) => setCorcabelo(e.target.value)}> Preto </button>
                <button className="btn btn-lg col-2 m-2 btn-primary" value="Loiro" onClick={(e) => setCorcabelo(e.target.value)}> Loiro </button>
              </div>
            </div>
            {raca && corpele && corcabelo != "" && (
              <button className="btn btn-lg col-2 m-2 btn-primary" onClick={() => setLoginusuario(3)}> Escolher equipamento </button>
            )}
          </div>
          <br />
        </>
      )
      }
      {loginusuario === 3 && (<>
        {classe === "Bárbaro" && (
          <>
            <div className="container text-center text-light bg-success">
              <h1 className="greetheader display-2"> Escolha seu equipamento</h1>
            </div>
            <br />
            <div className="container registercontainer text-center text-light bg-success">
              <div className="container">
                <h3>Arma</h3>
                <div className="row m-2">
                  <button className="btn btn-lg col-2 m-2 btn-primary" value="Machado" onClick={(e) => setSeualtq(e.target.value)}> Machado </button>
                  <button className="btn btn-lg col-2 m-2 btn-primary" value="Marreta" onClick={(e) => setSeualtq(e.target.value)}> Marreta </button>
                </div>
              </div>
            </div>
          </>
        )}
        {classe === "Paladino" && (
          <>
            <div className="container text-center text-light bg-success">
              <h1 className="greetheader display-2"> Escolha seu equipamento</h1>
            </div>
            <br />
            <div className="container registercontainer text-center text-light bg-success">
              <div className="container">
                <h3>Arma</h3>
                <div className="row m-2">
                  <button className="btn btn-lg col-2 m-2 btn-primary" value="Lança" onClick={(e) => setSeualtq(e.target.value)}> Lança </button>
                  <button className="btn btn-lg col-2 m-2 btn-primary" value="Escudo" onClick={(e) => setSeualtq(e.target.value)}> Escudo </button>
                  <button className="btn btn-lg col-2 m-2 btn-primary" value="Lança e Escudo" onClick={(e) => setSeualtq(e.target.value)}> Lança e Escudo </button>
                </div>
              </div>
            </div>
          </>
        )}
        {classe === "Atirador" && (
          <>
            <div className="container text-center text-light bg-success">
              <h1 className="greetheader display-2"> Escolha seu equipamento</h1>
            </div>
            <br />
            <div className="container registercontainer text-center text-light bg-success">
              <div className="container">
                <h3>Arma</h3>
                <div className="row m-2">
                  <button className="btn btn-lg col-2 m-2 btn-primary" value="Arma" onClick={(e) => setSeualtq(e.target.value)}> Arma de fogo</button>
                </div>
              </div>
            </div>
          </>
        )}
        {classe === "Guerreiro" && (
          <>
            <div className="container text-center text-light bg-success">
              <h1 className="greetheader display-2"> Escolha seu equipamento</h1>
            </div>
            <br />
            <div className="container registercontainer text-center text-light bg-success">
              <div className="container">
                <h3>Arma</h3>
                <div className="row m-2">
                  <button className="btn btn-lg col-2 m-2 btn-primary" value="Espada" onClick={(e) => setSeualtq(e.target.value)}> Espada </button>
                  <button className="btn btn-lg col-2 m-2 btn-primary" value="Escudo" onClick={(e) => setSeualtq(e.target.value)}> Escudo </button>
                  <button className="btn btn-lg col-2 m-2 btn-primary" value="Espada e Escudo" onClick={(e) => setSeualtq(e.target.value)}> Espada e Escudo </button>
                </div>
              </div>
            </div>
          </>
        )}
        {classe === "Arqueiro" && (
          <>
            <div className="container text-center text-light bg-success">
              <h1 className="greetheader display-2"> Escolha seu equipamento</h1>
            </div>
            <br />
            <div className="container registercontainer text-center text-light bg-success mb-0">
              <div className="container">
                <h3>Arma</h3>
                <div className="row m-2 mb-0">
                  <button className="btn btn-lg col-2 m-2 btn-primary" value="Arco" onClick={(e) => setSeualtq(e.target.value)}> Arco </button>
                </div>
              </div>
            </div>
          </>
        )
        }
        {seualtq != "" && (
          <div className="container text-center text-light mt-0 bg-success">
            <button className="btn btn-lg col-2 m-2 mt-0 btn-primary" onClick={() => setLoginusuario(4)}> Escolher montaria </button>
          </div>
        )}
      </>)}
      {loginusuario === 4 && (
        <>
          <div className="container text-center text-light bg-success">
            <h1 className="greetheader display-2"> Escolha sua montaria</h1>
          </div>
          <br />
          <div className="container registercontainer text-center mb-0 text-light bg-success">
            <div className="container mb-0">
              <h3>Montaria</h3>
              <div className="row m-2 mb-0">
                <div className="col-3 m-2 border">
                  <button className="btn btn-lg m-2 btn-primary" value="Cavalo" onClick={(e) => setSuamount(e.target.value)}> Cavalo </button>
                  <p> Velocidade: 5 m/s, Tempo para descanso: 5 minutos</p>
                </div>
                <div className="col-3 m-2 border">
                  <button className="btn btn-lg m-2 btn-primary" value="Panda" onClick={(e) => setSuamount(e.target.value)}> Panda </button>
                  <p> Velocidade: 2 m/s, Tempo para descanso: 10 minutos</p>
                </div>
                <div className="col-3 m-2 border">
                  <button className="btn btn-lg m-2 btn-primary" value="Dragão" onClick={(e) => setSuamount(e.target.value)}> Dragão </button>
                  <p> Velocidade: 6 m/s, Tempo para descanso: 2 minutos</p>
                </div>
                <div className="col-3 m-2 border">
                  <button className="btn btn-lg m-2 btn-primary" value="Grifo" onClick={(e) => setSuamount(e.target.value)}> Grifo </button>
                  <p> Velocidade: 4 m/s, Tempo para descanso: 3 minutos</p>
                </div>
                <div className="col-3 m-2 border">
                  <button className="btn btn-lg m-2 btn-primary" value="Unicórnio" onClick={(e) => setSuamount(e.target.value)}> Unicórnio </button>
                  <p> Velocidade: 5 m/s, Tempo para descanso: 6 minutos</p>
                </div>
              </div>
            </div>
          </div>
          <br />
          {suamount != "" && (
            <div className="container text-center text-light bg-success mt-0">
              <button className="btn btn-lg col-2 m-2 mt-0 btn-primary" onClick={() => setLoginusuario(5)}> Mostrar personagem </button>
            </div>
          )}
        </>
      )}
      {loginusuario === 5 && (
        <>
          <div className="container text-center text-light bg-success">
            <h1 className="greetheader display-2"> Seu personagem</h1>
          </div>
          <br />
          <div className="container registercontainer text-center text-light bg-success">
            <div className="container">
              <h3>Classe</h3>
              <div className="row m-2">
                <p className="h3"> {classe} </p>
              </div>
            </div>
            <div className="container">
              <h3>Raça</h3>
              <div className="row m-2">
                <p className="h3"> {raca} </p>
              </div>
            </div>
            <div className="container">
              <h3>Cor de pele</h3>
              <div className="row m-2">
                <p className="h3"> {corpele} </p>
              </div>
            </div>
            <div className="container">
              <h3>Cor de cabelo</h3>
              <div className="row m-2">
                <p className="h3"> {corcabelo} </p>
              </div>
            </div>
            <div className="container">
              <h3>Equipamento</h3>
              <div className="row m-2">
                <p className="h3"> {seualtq} </p>
              </div>
            </div>
            <div className="container">
              <h3>Montaria</h3>
              <div className="row m-2">
                <p className="h3"> {suamount} </p>
              </div>
            </div>
          </div>
          <br />
        </>
      )}
      <br />
      <div className="container registercontainer text-center text-danger">
        <p className="fw-bold h3">Atenção: use o navegador privado.</p>
      </div>
      <div className="container-fluid bg-dark p-2 text-light footercontainer">
        <p className="text-center fw-semibold h5 footert">Feito por
          <a className="ms-2 text-light " href="https://github.com/caiourtiga">Caio Urtiga. </a>
          <a className="ms-2 text-light " href="https://github.com/caiourtiga">Caio Urtiga. </a>

        </p>
      </div>
    </>
  )
}
