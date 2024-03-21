<script setup>
import { h } from 'vue'
import { format } from 'date-fns'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { Icon } from '@iconify/vue'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { toast } from '@/components/ui/toast'
import Input from '@/components/ui/input/Input.vue'
import { useColorMode } from '@vueuse/core'

const formSchema = toTypedSchema(z.object({
  firstName:z.string(
    {
    required_error: 'A First name is required.',
    }
  ).min(1),
  lastName:z.string(
    {
    required_error: 'A Last name is required.',
    }
  ).min(1),
  dob: z.date({
    required_error: 'A date of birth is required.',
  }),
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})
const mode = useColorMode()

const onSubmit = handleSubmit((values) => {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
})
</script>

<template>
  <div class="relative bg-background flex flex-col w-full h-full min-h-screen justify-center">
    <img src="@assets/img/mecha-left.png" class="absolute" />
    <img src="@assets/img/mecha.png" class="absolute right-0" />

    <main class="flex text-foreground flex-col w-[800px] my-auto container justify-center space-y-4">
      <header class="w-full">
        <h1 class="font-bold text-xl">
          You are almost there.
        </h1>
        <h2 class="text-muted-foreground">
          Join an army of productive Software Developper. 
        </h2>
      </header>
      <form class="space-y-8" @submit="onSubmit">
        <div class="grid grid-cols-2 gap-3">
          <FormField v-slot="{ componentField }" class="grid" name="firstName">
            <FormItem class="flex flex-col">
              <FormLabel>First name <span class="text-destructive">*</span></FormLabel>
              <FormControl>
                <Input type="text" placeholder="John" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" class="grid" name="lastName">
            <FormItem class="flex flex-col">
              <FormLabel>Last name <span class="text-destructive">*</span></FormLabel>
              <FormControl>
                <Input type="text" placeholder="Doe" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>
        <FormField v-slot="{ componentField, value }" name="dob">
          <FormItem class="flex flex-col">
            <FormLabel>Date of birth <span class="text-destructive">*</span></FormLabel>
            <Popover>
              <PopoverTrigger as-child>
                <FormControl>
                  <Button variant="outline" :class="cn('ps-3 text-start font-normal',!value && 'text-muted-foreground',)">
                    <span>{{ value ? format(value, "PPP") : "Pick a date" }}</span>
                    <Icon  icon="lucide:calendar" class="ms-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent class="p-0">
                <Calendar v-bind="componentField" />
              </PopoverContent>
            </Popover>
            <FormDescription>
              Your date of birth is used to calculate your age.
            </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </main>

  </div>
</template>