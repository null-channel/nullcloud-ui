<script setup lang="ts">

import { useClerk } from 'vue-clerk';
import { AvatarImage, Avatar } from '../ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { useUser } from 'vue-clerk'
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router';


const { user } = useUser()
const router = useRouter()

const { signOut,openUserProfile } = useClerk();
const logout = () => {
    signOut()
    router.push({ name: 'home' })
}
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger class="flex items-center justify-center">
            <Avatar class="w-8 h-8">
                <AvatarImage :src="user?.profileImageUrl ?? ''" :alt="user?.fullName" />
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent :align="'end'" class="w-56">
            <DropdownMenuLabel>
                <div class="flex flex-col space-y-1">
                    <p class="text-sm font-medium leading-none">
                        {{ user?.fullName || user?.emailAddresses[0].emailAddress.split('@')[0] }}
                    </p>
                    <p class="text-xs leading-none text-muted-foreground">
                        {{ user?.emailAddresses[0].emailAddress }}
                    </p>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="openUserProfile">
                <Icon icon="lucide:user" class="mr-2 h-4 w-4" />
                <span>Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem @click="$router.push('billing')">
                <Icon icon="lucide:credit-card" class="mr-2 h-4 w-4" />
                <span>Billing</span>
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem @click="$router.push('apps')">
                <Icon icon="lucide:cloudy" class="mr-2 h-4 w-4" />
                <span>Applications</span>
                <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="logout">
                <Icon icon="fe:logout" class="mr-2 h-4 w-4" />
                <span>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>