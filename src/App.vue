<script setup lang="ts">
import MainLayout from "@/layout/main/main.vue"
import NavBar from "@/components/navbar/navbar.vue"
import Footer from "@/components/footer/footer.vue"
import { Toaster } from "./components/ui/toast";
</script>

<template>
    <MainLayout>
        <template #header>
            <NavBar></NavBar>
        </template>
        <RouterView />
        <Toaster />
        <template #footer>
            <Footer></Footer>
        </template>
    </MainLayout>
</template>

<style scoped></style>