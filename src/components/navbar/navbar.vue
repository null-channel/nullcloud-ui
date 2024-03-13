<script setup lang="ts">
import Button from '../ui/button/Button.vue';
import { useColorMode } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import { ref } from 'vue';
import { useMotion } from '@vueuse/motion';
import { Protect, useClerk } from 'vue-clerk';
import { Separator } from '../ui/separator';
import { AvatarFallback, AvatarImage, Avatar } from '../ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { useUser } from 'vue-clerk'

const spaceShipRotate = ref(null)

const { user } = useUser()
const { signOut } = useClerk();
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

            </ul>
            <ul class="flex items-center space-x-6">
                <li class="hidden md:flex">
                    <router-link to="/about" class="text-base cursor-pointer hover:no-underline">
                        About
                    </router-link>
                </li>
                <Separator orientation="vertical" class="h-6" />
                <li class="hidden md:flex">
                    <router-link to="/contact" class="text-base cursor-pointer hover:no-underline">
                        Contact
                    </router-link>
                </li>
                <Protect>
                    <template #fallback>
                        <Separator orientation="vertical" class="h-6" />
                        <li class="hidden md:flex">
                            <router-link to="/auth" class="cursor-pointer">
                                <Button variant="outline" @mouseover="rotateSpaceShip" @mouseleave="resetSpaceShip"
                                    class="gap-2 font-semibold transition-colors hover:text-foreground/80 text-foreground/60">
                                    Sign up for Demo <span>
                                        <Icon ref="spaceShipRotate" icon="game-icons:space-shuttle" class="w-8 h-8">
                                        </Icon>

                                    </span>
                                </Button>
                            </router-link>
                        </li>
                    </template>
                    <Separator orientation="vertical" class="h-6" />

                    <li class="hidden  md:flex items-center justify-center">
                        <DropdownMenu>
                            <DropdownMenuTrigger class="flex items-center justify-center">
                                <Avatar class="w-8 h-8">
                                    <AvatarImage :src="user?.profileImageUrl ?? ''" :alt="user?.fullName" />
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent :align="'end'" class="w-56">
                                <DropdownMenuLabel>
                                    My Account
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem @click="$clerk.openUserProfile()">
                                    <Icon icon="lucide:user" class="mr-2 h-4 w-4" />
                                    <span>Profile</span>
                                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem @click="$router.push('billing')">
                                    <Icon icon="lucide:credit-card" class="mr-2 h-4 w-4" />
                                    <span>Billing</span>
                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem @click="signOut">
                                    <Icon icon="fe:logout" class="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>
                </Protect>
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