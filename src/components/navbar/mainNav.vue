<script setup lang="ts">
import { Badge } from '@/components/ui/badge'

</script>

<template>

    <li class="hidden md:flex">
        <router-link to="apps" :class="{ 'text-muted-foreground': !($route.name == 'apps') }"
            class="text-sm font-medium transition-colors hover:text-primary">
            Applications
        </router-link>
    </li>
    <li class="relative hidden md:flex">
        <router-link to="billing" :class="{ 'text-muted-foreground': !($route.name == 'billing') }"
            class="text-sm font-medium transition-colors hover:text-primary">
            Billing

        </router-link>
    </li>
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
</template>