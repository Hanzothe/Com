import React from "react";

function IndexForm() {
  return (
    <div className="IndexForm">
      <div id="indexgrid">
        <div class="h-5/6 w-11/12 grid  text-justify">
          <h1 class="place-self-center font-sans font-bold text-6xl grid">
            ECOSSISTEMA - Comsciência Conecta
            <h1 class="place-self-center  font-sans font-bold text-2xl  pt-10">
              Quem Somos?
            </h1>
          </h1>

          <p class="font-sans text-4xl px-20">
            A COMSCIÊNCIA CONECTA é um Ecossistema de Mentoria e Consultoria é
            uma empresa híbrida do setor 2.5. Idealizado, organizado e fundado
            pela Dra Cândida Costa: Mulher Preta e Cientista, Pesquisadora e
            Pensadora da Pluralidade do Universo Feminino. O Ecossistema é
            híbrido entre o segundo setor das empresas com o terceiro setor, das
            organizações sem fins lucrativos. Somos conhecidos como negócios
            sociais, que tem como missão gerar impacto socioambiental ao mesmo
            tempo em gerar resultado financeiro positivo de forma sustentável.
          </p>
        </div>
      </div>

      <div className="bg-cor7">
        <div class="  h-full flex flex-col justify-center py-12 px-6 lg:px-8">
          <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              class="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 font-sans ">
              Quer mais informações sobre os projetos 2023?
            </h2>
          </div>

          <div class="mt-8 max-height-2 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-cinza py-8 px-6 shadow rounded-lg sm:px-10">
              <form class="mb-0 space-y-6" action="#" method="POST">
                <label
                  for="email"
                  class="block text-xl font-medium text-gray-700 font-sans "
                >
                  Nome Completo
                </label>
                <div class="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class="w-full border-gray-300 border-0 rounded-lg shadow-lg"
                  />
                </div>
                <label
                  for="email"
                  class="block text-xl font-medium text-gray-700 font-sans"
                >
                  Email
                </label>
                <div class="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class="w-full border-gray-300 rounded-lg border-0 shadow-lg"
                  />
                </div>

                <label
                  for="email"
                  class="block text-xl font-medium text-gray-700 font-sans"
                >
                  Telefone
                </label>
                <div class="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class="w-full border-gray-300 rounded-lg shadow-lg border-0"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    CTA
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexForm;
