import { h } from "vue";
import { Icon } from "@iconify/vue";

export const applicationTypes = [
  {
    value: "Go",
    label: "Go",
    icon: h(Icon, { icon: "simple-icons:go" }),
  },
  {
    value: "Python",
    label: "Python",
    icon: h(Icon, { icon: "simple-icons:python" }),
  },
  {
    value: "NodeJS",
    label: "NodeJS",
    icon: h(Icon, { icon: "simple-icons:nodedotjs" }),
  },
  {
    value: "Rust",
    label: "Rust",
    icon: h(Icon, { icon: "simple-icons:rust" }),
  },
  {
    value: "Docker",
    label: "Docker",
    icon: h(Icon, { icon: "simple-icons:docker" }),
  },
];
