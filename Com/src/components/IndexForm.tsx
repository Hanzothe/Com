import React, { useState } from "react";
import api from "../../services/api";

function IndexForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  // const [tipo, setTipo] = useState("");

  async function handleSubmit() {
    const data = {
      nome_usuario: nome,
      email_usuario: email,
      telefone_usuario: telefone,
    };
    const response = await api.post("/api/usuarios", data);

    // if (response.status === 200) {
    //   window.location.href = "./usuarios";
    // } else {
    //   alert("Erro ao cadastrar usuario");
    // }
  }

  return (
    <div className="IndexForm">
      <div id="indexgrid">
        <div class="h-5/6 w-11/12 grid  text-justify">
          <h1 class="place-self-center font-sans font-bold grid" id="eco">
            ECOSSISTEMA
            <h1 class="place-self-center  font-sans font-bold  " id="com">
              ComsCiência Conecta
            </h1>
          </h1>

          <p class="px-20 font-semibold">
            É um Ecossistema de Mentoria e Consultoria é uma empresa híbrida do
            setor 2.5. Idealizado, organizado e fundado pela Dra Cândida Costa.
          </p>
          <p class="px-20 font-semibold">
            O Ecossistema é híbrido entre o segundo setor das empresas com o
            terceiro setor, das organizações sem fins lucrativos. Somos
            conhecidos como negócios sociais, que tem como missão gerar impacto
            socioambiental ao mesmo tempo em gerar resultado financeiro positivo
            de forma sustentável.
          </p>
        </div>
      </div>

      <div className="bg-cor7">
        <div class="  h-full flex flex-col justify-center py-12 px-6 lg:px-8">
          <h2 id="receba">Receba informações sobre nossos projetos 2023</h2>

          <div class="mt-8 max-height-2 sm:mx-auto sm:w-full sm:max-w-md">
            <form class="mb-0 space-y-6 grid justify-center">
              <div class="mt-1">
                <input
                  id="name"
                  name="name"
                  required
                  class="drop-shadow-lg shadow-lg  border rounded w-80 align-middle py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Nome Completo"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>

              <div class="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="drop-shadow-lg shadow-lg  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div class="mt-1">
                <input
                  id="telefone"
                  name="telefone"
                  type="number"
                  required
                  class="drop-shadow-lg shadow-lg border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Telefone"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </div>

              <div>
                <button
                  type="button"
                  class="w-full flex justify-center py-2 px-4 border-transparent rounded-md shadow-sm  font-medium text-white bg-cta hover:bg-ctah focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleSubmit}
                >
                  CTA
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
