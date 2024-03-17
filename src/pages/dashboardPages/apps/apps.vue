<script setup lang="ts">
import applications from '@/components/table/data/applications.json'
import DataTable from '@/components/table/dataTable.vue'
import { columns } from '@/components/table/columns'
import CustomTable from "@/components/table/table.vue"
</script>

<template>
    <div class="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div class="flex items-center justify-between space-y-2 text-foreground">
            <h2 class="text-xl md:text-3xl font-bold tracking-tight">
                Applications
            </h2>

        </div>
        <div class="text-foreground">
            <CustomTable :data="applications" />
            <!-- <DataTable :data="applications" :columns="columns" /> -->
        </div>

    </div>
</template>