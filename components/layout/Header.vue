<template>
  <header class="sticky top-0 left-0 w-full z-50">
    <nav class="bg-white border-b">
      <div class="container mx-auto flex items-center">
        <!-- Logo -->
        <div class="w-[30%] h-[80px] sm:flex items-center hidden lg:flex" @click="navigateTo('/')">
          <h1><b>first</b>edition</h1>
        </div>

        <!-- Search -->
        <div class="flex-1" style="margin-left: 1rem; padding: 1rem;">
          <form>
            <div class="relative sm:w-[85%]">
              <input type="search" id="default-search"
                class="block w-full p-4 pl-10 text-sm border text-black border-gray-300 rounded-full bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-rose-500 dark:focus:border-rose-500"
                required>
              <div
                class="absolute inset-y-0 flex items-center p-3 m-2 right-0 pointer-events-none bg-gray-800 rounded-full shadow-lg">
                <svg class="w-4 h-4 text-gray-800 dark:text-gray-200" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
            </div>
          </form>

        </div>


        <!-- Hamburger Mobile -->
        <div class="w-[15%] sm:flex justify-end lg:hidden">
          <div
            class="absolute inset-y-0 flex items-center p-4 m-4 right-0 pointer-events-none bg-gray-50 border rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
              style="display:block;fill:none;height:20px;width:20px;stroke:currentcolor;stroke-width:4px;overflow:visible;"
              aria-hidden="true" role="presentation" focusable="false">
              <path fill="none"
                d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3">
              </path>
            </svg>
          </div>
        </div>

        <!-- Actions Avatar -->
        <div class="w-[30%] sm:flex justify-end hidden lg:flex">
          <div class="absolute inset-y-0 flex items-center p-3 m-3 space-x-2 mr-[3rem] pointer-events-none rounded-full">
            <button class="p-3 rounded-full hover:bg-gray-100 items-center">
              <BaseIcon name="localize" category="custom" class="h-[24px] w-[24px]" />
            </button>
          </div>
          <div
            class="absolute inset-y-0 flex items-center p-3 m-3 space-x-2 right-0 pointer-events-none bg-gray-50 border rounded-full">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 7L4 7" stroke="#717171" stroke-width="1.5" stroke-linecap="round" />
              <path d="M20 12L4 12" stroke="#717171" stroke-width="1.5" stroke-linecap="round" />
              <path d="M20 17L4 17" stroke="#717171" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 35 35" aria-hidden="true"
              role="presentation" focusable="false">
              <path
                d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"
                fill="#717171">
              </path>
            </svg>
          </div>
        </div>
      </div>
  </nav>
</header></template>
