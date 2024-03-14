<script setup lang="ts">
import MainLayout from "@/layout/main/main.vue"
import Navbar from '@/components/navbar/main.vue';


</script>

<template>
    <MainLayout>
        <template #header>
            <Navbar></Navbar>
        </template>
        <div class="container pb-80">
            <RouterView />
        </div>
    </MainLayout>

</template>