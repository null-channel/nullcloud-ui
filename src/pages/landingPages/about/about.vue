<script setup lang="ts">
</script>
<template>
    <main class="flex flex-col mt-12 md:mt-24">
        <div class="flex w-full h-24 md:h-48 ">
            <h1 class="text-3xl font-black">
                About us
            </h1>
        </div>
        <section class="flex flex-col space-y-12  md:grid md:grid-cols-2 mb-24">
            <div >
                <img src="@assets/img/dwarf.png" class="rounded-full border w-96 mx-auto ">
            </div>
            <div class="my-auto relative ">
                <div class="absolute -top-4 -right-4 w-10 h-20 border-solid border-rose-600 border-t-8 border-r-8"></div>
                <div class="absolute -bottom-4 -left-4 w-20 h-10 border-solid border-rose-600 border-l-8 border-b-8"></div>
                
                <h2 class="text-2xl font-bold">
                    Who we are ?
                </h2>
                <p>
                    Welcome to Null Lab, a vibrant community of passionate developers and tech enthusiasts dedicated to
                    fostering innovation through open-source collaboration. At Null Lab, we believe in the power of
                    technology to transform the world, and we are committed to creating tools and platforms that empower
                    developers to unleash their creativity.
                </p>
                <h2 class="text-2xl font-bold">

                    Our Mission
                </h2>
                <p>

                    At the heart of Null Lab is our mission to simplify the software development process and make it
                    more accessible to all. We understand the challenges that developers face when it comes to deploying
                    their applications, and we're on a mission to change that. Our goal is to provide developers with
                    the tools they need to focus on what they do best: writing code.
                </p>
                <h2 class="text-2xl font-bold">
                    Introducing Null Cloud
                </h2>
                <p>

                    One of our flagship projects is Null Cloud, an open-source platform designed to streamline the
                    deployment process for developers. With Null Cloud, developers can easily deploy and manage their
                    applications without having to worry about the complexities of infrastructure management. Our
                    platform automates the deployment process, allowing developers to focus their time and energy on
                    building great software.
                </p>
            </div>
        </section>


    </main>
</template>