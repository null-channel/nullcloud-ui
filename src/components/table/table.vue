<script setup lang="ts">
import { Application } from '@/components/table/data/schema';
import Column from '@/components/table/column.vue';
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Icon } from "@iconify/vue"
import { useTableHandler } from '@/core/composabels/table';
import Pagination from './pagination.vue';
import Filter from './filter.vue';
import { ref } from 'vue';
import { applicationTypes } from './data/data';
interface DataTableProps {
    data: Application[]
}
const props = defineProps<DataTableProps>()
const table = useTableHandler<Application>(props.data)
const selectedLang = ref(new Set([]))
</script>

<template>
    <div class="flex flex-col space-y-5 w-full">
        <div class="flex space-x-4">
            <Button>
                <Icon icon="radix-icons:plus-circled" class="mr-2 h-4 w-4" />
                Create
            </Button>
            <Filter v-model:selected-values="selectedLang" v-model:table="table" title="type"
                :options="applicationTypes" />
        </div>
        <div class="p-2 h-[700px] border rounded-lg border-border">
            <ScrollArea class=" h-[700px]">
                <Column v-for="col in table.paginatedData.value" :application="col" />
            </ScrollArea>
        </div>
        <Pagination v-model:table="table" />
    </div>
</template>