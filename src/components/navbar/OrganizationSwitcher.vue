<script setup lang="ts">
import { ref } from 'vue'

import { cn } from '@/lib/utils'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Icon } from '@iconify/vue'

const groups = [
    {
        label: 'Personal Account',
        organizations: [
            {
                label: 'Atnomoverflow',
                value: 'personal',
            },
        ],
    },
    {
        label: 'organizations',
        organizations: [
            {
                label: 'NullCloud tester.',
                value: 'null-cloud-tester',
            },
            {
                label: 'Admins.',
                value: 'admin',
            },
        ],
    },
]

type organization = (typeof groups)[number]['organizations'][number]

const open = ref(false)
const showNeworganizationDialog = ref(false)
const selectedorganization = ref<organization>(groups[0].organizations[0])
</script>

<template>
    <Dialog v-model:open="showNeworganizationDialog">
        <Popover v-model:open="open">
            <PopoverTrigger as-child>
                <Button variant="outline" role="combobox" aria-expanded="open" aria-label="Select a organization"
                    :class="cn('w-[200px] justify-between', $attrs.class ?? '')">
                    <Avatar class="mr-2 h-5 w-5">
                        <AvatarImage :src="`https://avatar.vercel.sh/${selectedorganization.value}.png`"
                            :alt="selectedorganization.label" />
                        <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    {{ selectedorganization.label }}
                    <Icon icon="radix-icons:caret-sort" class="ml-auto h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent class="w-[200px] p-0">
                <Command :filter-function="(list, term) => list.filter(i => i.label?.toLowerCase()?.includes(term))">
                    <CommandList>
                        <CommandInput placeholder="Search organization..." />
                        <CommandEmpty>No organization found.</CommandEmpty>
                        <CommandGroup v-for="group in groups" :key="group.label" :heading="group.label">
                            <CommandItem v-for="organization in group.organizations" :key="organization.value"
                                :value="organization" class="text-sm" @select="() => {
        selectedorganization = organization
        open = false
    }">
                                <Avatar class="mr-2 h-5 w-5">
                                    <AvatarImage :src="`https://avatar.vercel.sh/${organization.value}.png`"
                                        :alt="organization.label" class="grayscale" />
                                    <AvatarFallback>SC</AvatarFallback>
                                </Avatar>
                                {{ organization.label }}
                                <Icon icon="radix-icons:check" :class="cn('ml-auto h-4 w-4',
        selectedorganization.value === organization.value
            ? 'opacity-100'
            : 'opacity-0',
    )" />
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                    <CommandSeparator />
                    <CommandList>
                        <CommandGroup>
                            <DialogTrigger as-child>
                                <CommandItem value="create-organization" @select="() => {
        open = false
        showNeworganizationDialog = true
    }">
                                    <Icon icon="radix-icons:plus-circled" class="mr-2 h-5 w-5" />
                                    Create an Organization
                                </CommandItem>
                            </DialogTrigger>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
        <DialogContent class="text-foreground">
            <DialogHeader>
                <DialogTitle>Create organization</DialogTitle>
                <DialogDescription>
                    Add a new organization to manage products and customers.
                </DialogDescription>
            </DialogHeader>
            <div>
                <div class="space-y-4 py-2 pb-4 ">
                    <div class="space-y-2">
                        <Label for="name">organization name</Label>
                        <Input id="name" placeholder="Acme Inc." />
                    </div>
                    <div class="space-y-2">
                        <Label for="plan">Subscription plan</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a plan" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="free">
                                    <span class="font-medium">Free</span> -
                                    <span class="text-muted-foreground">
                                        Trial for two weeks
                                    </span>
                                </SelectItem>
                                <SelectItem value="pro">
                                    <span class="font-medium">Pro</span> -
                                    <span class="text-muted-foreground">
                                        $9/month per user
                                    </span>
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
            <DialogFooter>
                <Button variant="outline" @click="showNeworganizationDialog = false">
                    Cancel
                </Button>
                <Button type="submit">
                    Continue
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>