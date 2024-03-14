<script setup lang="ts">
import Button from '../ui/button/Button.vue';
import { Icon } from '@iconify/vue'
import { ref } from 'vue';
import { useMotion } from '@vueuse/motion';
import { Protect } from 'vue-clerk';
import NavUser from "./UserNav.vue"
import ThemeToggleButton from './ThemeToggleButton.vue';
const spaceShipRotate = ref(null)

const { apply } = useMotion(spaceShipRotate, {
    enter: {
        opacity: 1,
        rotate: 0,
        x: 0
    },
    leave: {
        x: 500
    }
})
async function rotateSpaceShip() {
    await apply({
        rotate: 90,
        x: 40,
        transition: {
            type: 'spring',
        },
    })

}
async function resetSpaceShip() {
    await apply("enter")
}

</script>

<template>
    <div class=" border-b border-border">
        <nav class="flex m-auto text-foreground p-2 md:max-w-screen-2xl ">
            <ul class="flex flex-grow items-center space-x-6">
                <li class="flex md:hidden">
                    <Button variant="ghost">
                        <Icon icon="heroicons-solid:menu" class="h-5 w-5 text-foreground" />
                    </Button>
                </li>
                <li class="hidden md:flex">
                    <router-link to="/" class="cursor-pointer hover:no-underline">
                        <span class="font-bold">
                            Null-Cloud
                        </span>
                    </router-link>
                </li>
                <li class="hidden md:flex">
                    <router-link to="/about" :class="{ 'text-muted-foreground': !($route.name == 'home') }"
                        class="text-sm font-medium transition-colors hover:text-primary">
                        Home
                    </router-link>
                </li>
                <Protect>
                    <li class="hidden md:flex items-center justify-center">
                        <router-link to="/dashboards"
                            :class="{ 'text-muted-foreground': !($route.name == 'dashboards') }"
                            class="text-sm font-medium transition-colors hover:text-primary">
                            Dashboard
                        </router-link>
                    </li>
                </Protect>
                <li class="hidden md:flex">
                    <router-link to="/about" :class="{ 'text-muted-foreground': !($route.name == 'about') }"
                        class="text-sm font-medium transition-colors hover:text-primary">
                        About
                    </router-link>
                </li>
                <li class="hidden md:flex">
                    <router-link to="/contact" :class="{ 'text-muted-foreground': !($route.name == 'contact') }"
                        class="text-sm font-medium transition-colors hover:text-primary">
                        Contact
                    </router-link>
                </li>
            </ul>
            <ul class="flex items-center space-x-6">
                <Protect>
                    <template #fallback>
                        <li class="hidden md:flex">
                            <Button variant="outline" as-child @mouseover="rotateSpaceShip" @mouseleave="resetSpaceShip"
                                class="gap-2 font-semibold transition-colors hover:text-foreground/80 text-foreground/60">
                                <router-link to="/auth" class="cursor-pointer">
                                    Sign up for Demo <span>
                                        <Icon ref="spaceShipRotate" icon="game-icons:space-shuttle" class="w-8 h-8">
                                        </Icon>

                                    </span>
                                </router-link>
                            </Button>
                        </li>
                    </template>
                    <li class="hidden md:flex items-center justify-center">
                        <NavUser />
                    </li>
                </Protect>
                <li>
                    <ThemeToggleButton />
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped></style>