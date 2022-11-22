import React from "react";

function IndexForm() {
  return (
    <div className="IndexForm">
      <div id="indexgrid"></div>
      <div className="bg-marrom">
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
                    Sign up
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
