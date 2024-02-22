// Navbar.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import logo from './logoblack.png';

interface Component {
    title: string;
    href: string;
    description: string;
}

const components: Component[] = [
    {
        title: "How to Compete",
        href: "/docs/primitives/alert-dialog",
        description:
            "Coming soon",
    },
    {
        title: "Resources",
        href: "/docs/primitives/hover-card",
        description:
            "Coming soon",
    },
    {
        title: "Awards",
        href: "/docs/primitives/progress",
        description:
            "Coming soon",
    },
    {
        title: "Results",
        href: "/docs/primitives/scroll-area",
        description: "Coming soon",
    },
    {
        title: "SignUp",
        href: "/docs/primitives/tabs",
        description:
            "Coming soon",
    },
    {
        title: "SignUp to portal",
        href: "/docs/primitives/tooltip",
        description:
            "Coming soon",
    },
];

interface ListItemProps {
    href: string;
    title: string;
    children: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
    ({ href, title, children, ...props }, ref) => (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    href={href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
);

ListItem.displayName = 'ListItem';

const Navbar: React.FC = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white hidden py-5 lg:flex flex-row font-horus">
            <div className="md:mx-60 mx-5 flex flex-row justify-between content-center items-center w-full">
                <Link href="/" passHref>
                    <Image
                        className="cursor-pointer hover:scale-105 transition-transform duration-300"
                        src={logo}
                        alt="NOI 24"
                        width={130}
                        height={50}
                    />
                </Link>
                <div>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>NOI - 24</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                    href="https://portal.noi.lk/" target="_blank"
                                                >

                                                    <div className="mb-2 mt-4 text-lg font-medium">
                                                        Portal Login
                                                    </div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        Continue to the moodle
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <ListItem href="/docs" title="Timeline">
                                            Coming soon
                                        </ListItem>
                                        <ListItem href="/docs/installation" title="Awards">
                                            Coming soon
                                        </ListItem>
                                        <ListItem href="/docs/primitives/typography" title="Title 3">
                                            Coming soon
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Competition</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/register" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Register Now
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
