<script setup lang="ts">
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Icon } from "@iconify/vue"
import Button from '@/components/ui/button/Button.vue';
import { ref } from 'vue'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Application } from '@/components/table/data/schema';
import { applicationTypes } from '@/components/table/data/data';

interface DataColumnProps {
    application: Application
}
const props = defineProps<DataColumnProps>()
const rotated = ref(false)
const isOpen = ref(false)
const Logo = () => {
    const type = applicationTypes.find(
        (appType) => appType.value === props.application.type
    );
    return type?.icon
}
</script>
<template>
    <Card class="w-full">
        <CardHeader class="flex flex-row space-x-4">
            <div class="m-auto p-2 text-background bg-foreground rounded-full">
                <component :is="Logo" class="w-8 h-8 " />
            </div>
            <div class="space-y-2 flex-grow">
                <CardTitle>{{ props.application.name }}</CardTitle>
                <CardDescription class="flex space-x-6 ">
                    <div class="flex flex-col w-full space-y-2">
                        <a :href="props.application.gitRepo" class="flex items-center space-x-1">
                            <span class="text-background bg-foreground rounded-full p-1">
                                <Icon icon="radix-icons:github-logo" class="w-4 h-4"></Icon>
                            </span>
                            <span>
                                {{ props.application.gitRepo }}
                            </span>
                        </a>
                        <div v-if="props.application?.image != undefined" class="flex space-x-1">
                            <div class="text-background bg-foreground rounded-full p-1">
                                <Icon icon="simple-icons:docker" class="w-4 h-4">
                                </Icon>
                            </div>
                            <span>
                                {{ props.application?.image }}
                            </span>
                        </div>
                    </div>
                    <div class="flex space-x-4 items-center  w-full">
                        <h3 class="flex flex-col text-base text-muted-foreground font-semibold">
                            Status : <span class="text-green-500">
                                Running
                            </span>
                        </h3>
                        <h3 class="flex flex-col text-base text-muted-foreground font-semibold">
                            Last Build : <span class="text-foreground font-normal">
                                1 day ago
                            </span>
                        </h3>
                    </div>
                </CardDescription>
            </div>
            <div class="flex flex-row space-x-2">
                <Button variant="destructive" class="bg-rose-600 hover:bg-rose-500">
                    <Icon icon="radix-icons:stop" class="mr-2 h-4 w-4" />
                    Stop
                </Button>
                <Button>
                    <Icon icon="radix-icons:play" class="mr-2 h-4 w-4" />
                    Start
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <Button variant="ghost" class="flex w-8 p-0 data-[state=open]:bg-muted">
                            <Icon icon="radix-icons:dots-vertical" class="h-4 w-4" />
                            <span class="sr-only">Open menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" class="w-[160px]">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>
                            Delete
                            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </CardHeader>
        <CardContent>
            <Collapsible v-model:open="isOpen" class="border border-border rounded-lg p-2">
                <CollapsibleTrigger @click="() => rotated = !rotated" class="flex flex-row-reverse w-full">
                    <Icon icon="radix-icons:chevron-down" class="transform transition-transform duration-300"
                        :class="{ 'rotate-180': rotated }" />
                </CollapsibleTrigger>
                <CollapsibleContent class="space-y-2">
                    <div class="grid grid-cols-3">
                        <div class="p-2 space-x-2 flex items-center border rounded-lg w-fit border-border m-auto ">
                            <span class="font-semibold">
                                CPU:
                            </span>
                            <Icon icon="ph:cpu" />
                            <span>
                                {{ props.application.cpu }} cpu
                            </span>
                        </div>
                        <div class="p-2 space-x-2 flex items-center border rounded-lg w-fit border-border m-auto ">
                            <span class="font-semibold">
                                Memory:
                            </span>
                            <Icon icon="clarity:memory-solid" />
                            <span>
                                {{ props.application.memory }}
                            </span>
                        </div>
                        <div class="p-2 space-x-2 flex items-center border rounded-lg w-fit border-border m-auto ">
                            <span class="font-semibold">
                                Storage:
                            </span>
                            <Icon icon="ic:baseline-sd-storage" />
                            <span>
                                {{ props.application.storage }}
                            </span>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <h2 class="font-semibold">
                            Logs:
                        </h2>
                        <p class="p-8 border ">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            <br />
                            Commodi quibusdam molestias quis,
                            <br />
                            assumenda impedit ex architecto harum voluptas molestiae delectus eaque perferendis quia
                            <br />
                            corrupti ratione deserunt atque eligendi nihil! Enim?
                        </p>
                    </div>
                </CollapsibleContent>
            </Collapsible>
        </CardContent>
        <CardFooter class="flex justify-between px-6 pb-6">
        </CardFooter>
    </Card>
</template>@/components/CustomTable/data/schema./data/data