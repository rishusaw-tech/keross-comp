"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Building2, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "./dropdown-menu";
import { Button } from "./button";
export function ThemeToggleBtn() {
    const { theme, setTheme } = useTheme();
    return (_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", size: "icon", children: [theme === "light" && (_jsx(Sun, { className: "h-[1.2rem] w-[1.2rem] transition-all" })), theme === "dark" && (_jsx(Moon, { className: "h-[1.2rem] w-[1.2rem] transition-all" })), theme === "keross" && (_jsx(Building2, { className: "h-[1.2rem] w-[1.2rem] transition-all" })), _jsx("span", { className: "sr-only", children: "Toggle theme" })] }) }), _jsxs(DropdownMenuContent, { align: "end", children: [_jsx(DropdownMenuItem, { onClick: () => setTheme("light"), children: "Light" }), _jsx(DropdownMenuItem, { onClick: () => setTheme("dark"), children: "Dark" }), _jsx(DropdownMenuItem, { onClick: () => setTheme("keross"), children: "Keross" })] })] }));
}
