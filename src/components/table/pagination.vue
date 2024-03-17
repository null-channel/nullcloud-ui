<script setup lang="ts">
// import type { Application, applicationSchema } from './data/schema'
// import ChevronLeftIcon from '~icons/radix-icons/chevron-left'
// import ChevronRightIcon from '~icons/radix-icons/chevron-right'
// import DoubleArrowLeftIcon from '~icons/radix-icons/double-arrow-left'
// import DoubleArrowRightIcon from '~icons/radix-icons/double-arrow-right'
import { Icon } from "@iconify/vue"

import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

interface TablePaginationProps {
    table: any
}
defineProps<TablePaginationProps>()
</script>

<template>
    <div class="flex items-center justify-between px-2">
        <div class="flex-1 text-sm text-muted-foreground">
            {{ table.currentDataLength }} of
            {{ table.totalDataLength }} row(s) selected.
        </div>
        <div class="flex items-center space-x-6 lg:space-x-8">
            <div class="flex items-center space-x-2">
                <p class="text-sm font-medium">
                    Rows per page
                </p>
                <Select :model-value="`${table.getPageSize()}`" @update:model-value="table.setPageSize">
                    <SelectTrigger class="h-8 w-[70px]">
                        <SelectValue class="text-foreground" :placeholder="`${table.getPageSize()}`" />
                    </SelectTrigger>
                    <SelectContent side="top">
                        <SelectItem v-for="pageSize in [10, 20, 30, 40, 50]" :key="pageSize" :value="`${pageSize}`">
                            {{ pageSize }}
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div class="flex w-[100px] items-center justify-center text-sm font-medium">
                Page {{ table.currentPage }} of
                {{ table.pageCount }}
            </div>
            <div class="flex items-center space-x-2">
                <Button variant="outline" class="hidden h-8 w-8 p-0 lg:flex" :disabled="!table.canPreviousPage()"
                    @click="table.setPageIndex(0)">
                    <span class="sr-only">Go to first page</span>
                    <Icon icon="radix-icons:double-arrow-left" class="h-4 w-4" />
                </Button>
                <Button variant="outline" class="h-8 w-8 p-0" :disabled="!table.canPreviousPage()"
                    @click="table.previousPage()">
                    <span class="sr-only">Go to previous page</span>
                    <Icon icon="radix-icons:chevron-left" class="h-4 w-4" />
                </Button>
                <Button variant="outline" class="h-8 w-8 p-0" :disabled="!table.canNextPage()"
                    @click="table.nextPage()">
                    <span class="sr-only">Go to next page</span>
                    <Icon icon="radix-icons:chevron-right" class="h-4 w-4" />

                </Button>
                <Button variant="outline" class="hidden h-8 w-8 p-0 lg:flex" :disabled="!table.canNextPage()"
                    @click="table.setPageIndex(table.pageCount - 1)">
                    <span class="sr-only">Go to last page</span>
                    <Icon icon="radix-icons:double-arrow-right" class="h-4 w-4" />
                </Button>
            </div>
        </div>
    </div>
</template>