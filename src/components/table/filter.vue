<script setup lang="ts">
import type { Component } from 'vue'
import type { Application } from './data/schema'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command'
import { Icon } from "@iconify/vue"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

interface DataTableFacetedFilter {
    table?: any
    title: string
    options: {
        label: string
        value: string
        icon?: Component
    }[]
}
const selectedValues = defineModel<Set<any>>('selectedValues', { required: true })

const props = defineProps<DataTableFacetedFilter>()
const filterFn = (option: any) => {
    const isSelected = selectedValues.value.has(option)
    if (isSelected) {
        selectedValues.value.delete(option)
        props.table.removeFilterData(props.title)
    }
    else {
        selectedValues.value.add(option.value)
    }
    if (selectedValues.value.size == 0) {
        props.table.removeFilterData(props.title)
        return
    }
    props.table.setFilterData(props.title, function (val: Application) {
        return selectedValues.value.has(val[props.title as keyof Application])
    })
}
</script>

<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button variant="outline" class="border-dashed">
                <Icon icon="radix-icons:plus-circled" class="mr-2 h-4 w-4" />
                {{ title }}
                <template v-if="selectedValues.size > 0">
                    <Separator orientation="vertical" class="mx-2 h-4" />
                    <Badge variant="secondary" class="rounded-sm px-1 font-normal lg:hidden">
                        {{ selectedValues.size }}
                    </Badge>
                    <div class="hidden space-x-1 lg:flex">
                        <Badge v-if="selectedValues.size > 2" variant="secondary" class="rounded-sm px-1 font-normal">
                            {{ selectedValues.size }} selected
                        </Badge>

                        <template v-else>
                            <Badge v-for="option in options
                    .filter((option) => selectedValues.has(option.value))" :key="option.value" variant="secondary"
                                class="rounded-sm px-1 font-normal">
                                {{ option.label }}
                            </Badge>
                        </template>
                    </div>
                </template>
            </Button>
        </PopoverTrigger>
        <PopoverContent class="w-[200px] p-0" align="start">
            <Command :filter-function="(list: string[] | Record<string, any>[] | number[] | false[] | true[], term: string) => {
                    if (Array.isArray(list)) {
                        (list as Record<string, any>).filter((i: any) => i.label?.toLowerCase()?.includes(term))
                    } else {
                        // Handle other types appropriately
                        return list; // Or perform some other filtering/conversion
                    }
                }">
                <CommandInput :placeholder="title" />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup>
                        <CommandItem v-for="option in options" :key="option.value" :value="option" @select="filterFn">
                            <div :class="cn(
                    'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                    selectedValues.has(option.value)
                        ? 'bg-primary text-primary-foreground'
                        : 'opacity-50 [&_svg]:invisible',
                )">
                                <Icon icon="radix-icons:check" :class="cn('h-4 w-4')" />
                            </div>
                            <component :is="option.icon" v-if="option.icon"
                                class="mr-2 h-4 w-4 text-muted-foreground" />
                            <span>{{ option.label }}</span>

                        </CommandItem>
                    </CommandGroup>

                    <template v-if="selectedValues.size > 0">
                        <CommandSeparator />
                        <CommandGroup>
                            <CommandItem :value="{ label: 'Clear filters' }" class="justify-center text-center" @select="() => {
                    selectedValues.clear()
                    table.removeFilterData(title)
                }">
                                Clear filters
                            </CommandItem>
                        </CommandGroup>
                    </template>
                </CommandList>
            </Command>
        </PopoverContent>
    </Popover>
</template>