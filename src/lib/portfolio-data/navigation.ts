export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const projectCategories = [
  "All",
  "Web Dev",
  "UI/UX",
  "Research",
  "Business",
  "Infrastructure",
] as const;

export type ProjectFilterCategory = (typeof projectCategories)[number];
