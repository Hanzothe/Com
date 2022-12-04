import React, { useState } from "react";
import api from "../../services/api";
import Logo from "../data/img/logos/Logo2.png";

function IndexForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [tipo, setTipo] = useState("1");

  async function handleSubmit() {
    const data = {
      nome_usuario: nome,
      email_usuario: email,
      telefone_usuario: telefone,
      tipo_usuario: tipo,
    };
    const response = await api.post("/api/usuarios", data);
  }

  return (
    <div className="IndexForm">
      <div id="indexgrid">
        <div class="h-full w-full grid gap text-justify">
          <h1 id="IndexLogo">
            <img src={Logo} />
          </h1>
          <div>
            <p class="px-32 font-light text-txtbrown">
              É um Ecossistema de Mentoria e Consultoria é uma empresa híbrida
              do setor 2.5. Idealizado, organizado e fundado pela Dra Cândida
              Costa.
            </p>
            <p class="px-32 font-light">
              O Ecossistema é híbrido entre o segundo setor das empresas com o
              terceiro setor, das organizações sem fins lucrativos. Somos
              conhecidos como negócios sociais, que tem como missão gerar
              impacto socioambiental ao mesmo tempo em gerar resultado
              financeiro positivo de forma sustentável.
            </p>
          </div>
        </div>
      </div>

      <div id="formgrid">
        <div className="  h-full flex flex-col justify-center ">
          <h2 id="receba">Receba informações sobre nossos projetos 2023</h2>

          <div class="mt-8 max-height-2 ">
            <form class="mb-4 space-y-8 grid justify-center ">
              <div class="place-self-center ">
                <input
                  id="name"
                  name="name"
                  required
                  class="drop-shadow-lg shadow-lg  border-0 rounded w-72  align-middle py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Nome Completo"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>

              <div class="place-self-center">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="drop-shadow-lg shadow-lg  border-0 rounded w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div class="place-self-center  ">
                <input
                  id="telefone"
                  name="telefone"
                  type="number"
                  required
                  class="drop-shadow-lg shadow-lg border-0 rounded w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Telefone"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </div>

              <div class="grid">
                <button
                  type="submit"
                  class="w-60 place-self-center justify-center py-1 px-4 border-transparent rounded-md shadow-sm  font-medium text-white bg-cta hover:bg-ctah ease-in-out duration-200"
                  onClick={handleSubmit}
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexForm;
