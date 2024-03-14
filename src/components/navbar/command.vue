<script setup lang="ts">
import { useMagicKeys } from '@vueuse/core'

import { ref, watch } from 'vue'
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from '@/components/ui/command'

const open = ref(false)

const { Meta_J, Ctrl_J } = useMagicKeys({
    passive: false,
    onEventFired(e) {
        if (e.key === 'j' && (e.metaKey || e.ctrlKey))
            e.preventDefault()
    },
})

watch([Meta_J, Ctrl_J], (v) => {
    if (v[0] || v[1])
        handleOpenChange()
})

function handleOpenChange() {
    open.value = !open.value
}
</script>

<template>
    <div>
        <CommandDialog v-model:open="open">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                    <CommandItem value="profile">
                        Profile
                    </CommandItem>
                    <CommandItem value="billing">
                        Billing
                    </CommandItem>
                    <CommandItem value="Apps">
                        Apps
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    </div>
</template>