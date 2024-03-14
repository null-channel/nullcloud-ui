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
    <Button @click="toggleThemeMode" variant="ghost">
        <Icon icon="radix-icons:moon"
            class="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground" />
        <Icon icon="radix-icons:sun"
            class="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground" />
        <span class="sr-only">Toggle theme</span>
    </Button>
</template>