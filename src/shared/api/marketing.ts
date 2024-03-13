import { toast } from "@/components/ui/toast";
import { Icon } from "@iconify/vue/dist/iconify.js";
import { h } from "vue";

export const subscribe = async (values: any) => {
  try {
    await window.$axios.post("http://localhost:9000/api/v1/marketing/email", {
      email: values.email,
    });
    toast({
      title: "Thank you",
      description: h(
        "p",
        {
          class:
            "flex w-full items-center justify-center text-foreground gap-2 text-xs md:text-base",
        },
        [
          "Thank you for joining the News letter",
          h(Icon, {
            icon: "heroicons:heart-solid",
            class: "text-rose-600 w-8 h-8",
          }),
        ]
      ),
    });
  } catch (err) {
    console.log(err);
    toast({
      title: "Somthing went wrong :-(",
      description: h(
        "p",
        {
          class:
            "flex w-full items-center justify-center text-foreground gap-2 text-xs md:text-base",
        },
        ["Please try again later"]
      ),
    });
  }
};
