<template>

    <nav class=" py-4 bg-[#191919]">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <div class="ml-8 flex items-center">
                <img class="w-20" src="../assets/logo-white.png" alt="logo-white">
            </div>
            <div class="flex md:order-2">
                <div class="mr-8">
                    <img src="./../assets/icons/cart.svg" alt="Cart for products" />
                </div>
            </div>
            <div class=" justify-between items-center w-full  md:w-auto ">
                <div class="flex text-white flex-wrap  gap-8 items-center justify-center my-3">
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
            </div>
        </div>
    </nav>

</template>