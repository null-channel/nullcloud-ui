<script setup lang="ts">
import ThemeToggleButton from "./ThemeToggleButton.vue";
import NavUser from "./UserNav.vue"
import Command from "./command.vue"
import MainNav from "./mainNav.vue";
import OrganizationSwitcher from "./OrganizationSwitcher.vue"
import { Icon } from '@iconify/vue'
import { Button } from "../ui/button";

</script>

<template>
    <div class="border-b border-border">
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
                <li class="hidden md:flex items-center">
                    <OrganizationSwitcher />
                </li>
                <MainNav />
            </ul>
            <div class="ml-auto flex items-center space-x-4">
                <NavUser />
                <ThemeToggleButton />
            </div>
        </nav>
    </div>
    <Command />
</template>./command.vue