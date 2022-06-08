<template>

    <body class=" bg-[#191919]">
        <div class="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12">
            <div class="flex flex-col items-center justify-center">
                <div>
                    <img class="w-20" src="../assets/logo-white.png" alt="logo-white">
                </div>
                <div class="flex justify-center text-white  gap-5  my-3">
                    <router-link to="/">
                        <a class="hover:text-gray-500" href="">Home</a>
                    </router-link>
                    <router-link to="/uniform">
                        <a class="hover:text-gray-500" href="">Uniform</a>
                    </router-link>
                    <router-link to="/equipment">
                        <a class="hover:text-gray-500" href="">Equipment</a>
                    </router-link>
                </div>

                <div class="flex items-center text-white mt-6">
                    <p class="text-base leading-4 ">2022 <span class="font-semibold">PUGNATOR</span></p>
                    <div class="border-l  pl-2 ml-2">
                        <p class="text-base leading-4 "> All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>


