export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "JCC Cares",
  description:
    "A platform to create suggestions, report issues, and track progress for the JCC Cares program.",
  navItems: [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Teams",
      href: "/teams",
    },
    {
      label: "Reports",
      href: "/reports",
    },
    {
      label: "Modules",
      href: "/modules",
    },
    {
      label: "Tools",
      href: "/tools",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
