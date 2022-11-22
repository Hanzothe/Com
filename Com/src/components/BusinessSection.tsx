import React from "react";

function BusinessSection() {
  return (
    <div className="BusinessContainer">
      <h1 class="font-sans font-bold text-5xl pt-10 grid col-start-2 col-span-2">
        Crie Comsciência na sua empresa!
      </h1>
      <div class="mt-8 max-height-2 sm:mx-auto sm:w-full sm:max-w-md col-start-1 col-span-2 pb-10 pl-12">
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
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Quero saber mais!
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-start-3 col-span-4  h-96 w-full grid items-center">
        <h1 class="font-sans font-bold text-2xl">
          Empodere sua empresa, conheça nossos cursos!
        </h1>
        <h1 class="pl-6 font-sans font-bold text-xl">Mentoria e Coaching</h1>
        <h1 class="pl-6 font-sans font-bold text-xl"> Transição de Carreira</h1>
        <h1 class="pl-6 font-sans font-bold text-xl">
          Aprimoramento de softskills
        </h1>
        <h1 class="pl-6 font-sans font-bold text-xl">
          Palestras e consultorias em D&I
        </h1>
      </div>
    </div>
  );
}

export default BusinessSection;
