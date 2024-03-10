<script setup lang="ts">
import Button from '../ui/button/Button.vue';
import { useColorMode } from '@vueuse/core'
import { Icon } from '@iconify/vue'

const mode = useColorMode()
function toggleThemeMode() {
    const currentMode = mode.value
    if (currentMode == "dark") {
        mode.value = "light"
    }
    if (currentMode == "light") {
        mode.value = "dark"
    }
}
</script>

<template>
    <div class="border-b border-border">
        <nav class="flex m-auto p-2 md:max-w-screen-2xl ">
            <ul class="flex flex-grow items-center text-foreground space-x-6">
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
            </ul>
            <ul class="flex items-center space-x-6">
                <li class="hidden md:flex">

                    <router-link to="/auth" class="cursor-pointer">
                        <Button variant="outline"
                            class="gap-2 font-semibold transition-colors hover:text-foreground/80 text-foreground/60">
                            Sign up for Demo <span>

                                <Icon icon="game-icons:space-shuttle" class="w-8 h-8">
                                </Icon>

                            </span>
                        </Button>
                    </router-link>
                </li>
                <li>
                    <Button @click="toggleThemeMode" variant="ghost">
                        <Icon icon="radix-icons:moon"
                            class="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground" />
                        <Icon icon="radix-icons:sun"
                            class="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground" />
                        <span class="sr-only">Toggle theme</span>
                    </Button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped></style>