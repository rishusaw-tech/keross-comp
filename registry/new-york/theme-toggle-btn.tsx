"use client"

import * as React from "react"
import { Building2, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function ThemeToggleBtn() {
  const { theme, setTheme } = useTheme()

  return (
   
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" size="icon">
      {theme === "light" && (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      {theme === "dark" && (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      {theme === "keross" && (
        <Building2 className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  </DropdownMenuTrigger>

  <DropdownMenuContent align="end">
    <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
    <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
    <DropdownMenuItem onClick={() => setTheme("keross")}>Keross</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
  )
}
