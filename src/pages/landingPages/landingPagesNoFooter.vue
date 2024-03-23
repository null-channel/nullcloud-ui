<script setup lang="ts">
import MainLayout from "@/layout/main/main.vue"
import NavBar from "@/components/navbar/navbar.vue"

</script>

<template>
    <MainLayout>
        <template #header>
            <NavBar></NavBar>
        </template>
        <div class="container">
            <RouterView />
        </div>
        <template #footer>
        </template>
    </MainLayout>
    
</template>

<style scoped></style>