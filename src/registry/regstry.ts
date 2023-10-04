import { Registry } from "./schema";

const ui: Registry = [
  {
    name: "button",
    type: "components:ui",
    dependencies: ["@radix-ui/react-slot"],
    files: ["ui/button.tsx"],
  },
  {
    name: "button",
    type: "components:ui",
    dependencies: ["@radix-ui/react-slot"],
    files: ["ui/button.tsx"],
  },
];

const example: Registry = [
  {
    name: "button-demo",
    type: "components:example",
    registryDependencies: ["button"],
    files: ["example/button-demo.tsx"],
  },
];

export const registry: Registry = [...ui, ...example];
