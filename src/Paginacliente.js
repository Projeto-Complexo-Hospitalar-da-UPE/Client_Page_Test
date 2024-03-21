import React, { useState } from 'react';
import './Paginacliente.css';


function Paginicial() {

    const nome = "paciente"
    
    const [exames, setExames] = useState([
      { nome: 'Exame Teste', arquivo: 'exame1.pdf' },
  ]);

  const adicionarNovoExame = (nomeExame, nomeArquivo) => {
    const novoExame = { nome: nomeExame, arquivo: nomeArquivo };
    setExames([...exames, novoExame]); 
};



    return (
      <div className="Center">
        <div className="Bar"></div>

        <div className='container_Exam_Icons'>
        {exames.map((exame, index) => (
          <button key={index} onClick={() => abrirExame(exame.arquivo)}>{exame.nome}</button>
        ))}
        </div>

        <div className='container_Bar_Icons'>
            <img className = "UPE_logo_UP" src = "./Images_Folder/Logo-upe-site.png"></img>
            <img className = "SCH_UP" src = "./Images_Folder/sch.png"></img>   
              <div className='container_Icon_Name'>
                <h1 className= "User_Name"> Olá, bem vindo, {nome}! </h1>
              </div>
        </div>
          
      </div>
  
    );
}

function abrirExame(arquivo) {
 
  console.log("Abrindo arquivo de exame:", arquivo);
  window.open(arquivo, '_blank'); 
}

;

export default Paginicial;