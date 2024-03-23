<script setup lang="ts">
import { Button } from '../ui/button';

</script>
<template>
    <Button variant="link" as-child class="text-background cursor-pointer hover:no-underline">
        <router-link to="/">
            Home
        </router-link>
    </Button>
    <Button variant="link" as-child class="text-background cursor-pointer hover:no-underline">
        <router-link to="/auth">
            Start Demo
        </router-link>
    </Button>
    <Button variant="link" class="text-background cursor-pointer hover:no-underline">
        <router-link to="/contact">
            Contact
        </router-link>
    </Button>
    <Button variant="link" class="text-background cursor-pointer hover:no-underline">
        <router-link to="/about">
            About
        </router-link>
    </Button>
</template>