"use client";
import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react"

import { Badge } from "../components/registry/new-york/badge";

import { Checkbox } from "../components/registry/new-york/checkbox";
import { Separator } from "../components/registry/new-york/separator";
import { Skeleton } from "../components/registry/new-york/skeleton";
import { Progress } from "../components/registry/new-york/progress";
import { Slider } from "../components/registry/new-york/slider";
import { Switch } from "../components/registry/new-york/switch";
import { RadioGroup, RadioGroupItem } from "../components/registry/new-york/radio-group";
import { ScrollArea } from "../components/registry/new-york/scroll-area";
import { toast } from "sonner";
import { Workflow  } from "../components/registry/new-york/workflow1";
import { WorkflowStep } from "./types";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "../components/registry/new-york/navigation-menu";


import { WorkflowStep as wks } from "./workflow"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/registry/new-york/table";

import { Tooltip, TooltipContent, TooltipTrigger } from "../components/registry/new-york/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../components/registry/new-york/hover-card";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/registry/new-york/dropdown-menu";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/registry/new-york/alert-dialog";

import { Alert, AlertDescription, AlertTitle } from "../components/registry/new-york/alert";
import { Avatar, AvatarFallback, AvatarImage } from "../components/registry/new-york/avatar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../components/registry/new-york/command";
import { Button } from "../components/registry/new-york/button";
import { Calendar } from "../components/registry/new-york/calendar";
import { Label } from "../components/registry/new-york/label";
import { Popover, PopoverContent, PopoverTrigger } from "../components/registry/new-york/popover";

import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
} from "../components/registry/new-york/card";

import { Input } from "../components/registry/new-york/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/registry/new-york/tabs";
import { Textarea } from "../components/registry/new-york/textarea";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/registry/new-york/accordion";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/registry/new-york/dialog";



import { DateRangePicker } from "../components/registry/new-york/date-range-picker";

// Utilities
import { cn } from "../components/registry/new-york/utils";

// Types
import type { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import type { DateRange } from "react-day-picker";

// React and icons
import React, { useState } from "react";
import {
  CheckCircle2Icon,
  ChevronDownIcon,
  ChevronsUpDown,
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  Edit,
  Link,
  LucideCalendar,
  Save,
  Share2,
  X,
} from "lucide-react";

import { WorkflowAction } from "../app/workflow";

export default function Home() {
  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];

 const steps: WorkflowStep[] = [
  { id: "1", title: "Won", status: "OUTSTANDING" },
  {
    id: "2",
    title: "Client Review",
    status: "IN PROGRESS", // must match StepStatus exactly
    dropdownOptions: [
      { label: "Won", value: "won" },
      { label: "Lost", value: "lost" },
      { label: "Lost", value: "lost" },
      { label: "Lost", value: "lost" },
      { label: "Lost", value: "lost" },
    ],
    selectedOption: "won",
  },
  { id: "3", title: "Quotation", status: "COMPLETED" },
  { id: "4", title: "Product", status: "COMPLETED" },
  { id: "5", title: "Deal", status: "COMPLETED" },
   { id: "5", title: "Deal", status: "COMPLETED" },
    { id: "5", title: "Deal", status: "COMPLETED" },
];

  const [open, setOpen] = React.useState(false);
  const [oopen, setOOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  type Checked = DropdownMenuCheckboxItemProps["checked"];

  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];

  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  const handleUpdate = ({ range }: { range: DateRange }) => {
    setDateRange(range);
    console.log("Main Range:", range);
  };

  // Removed duplicate setValue function declaration

  return (
    <div className="flex flex-col w-1/2 mx-auto">
      {/* ------------------------------------ Accordion ------------------------------------ */}
      <div className="mb-2 text-2xl">Accordion</div>
      <div className="mb-5">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>Yes, it is accessible</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styles</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>Yes, it is styled</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>Yes, it is animated</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* ------------------------------------ Alert ------------------------------------ */}
      <div className="mb-2 text-2xl">Alert</div>
      <div className="mb-5">
        <Alert>
          <CheckCircle2Icon />
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is an alert with icon, title and description.
          </AlertDescription>
        </Alert>
      </div>

      {/* ------------------------------------ Avatar ------------------------------------ */}
      <div className="mb-2 text-2xl">Avatar</div>
      <div className="flex flex-row gap-5 mb-5">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>AP</AvatarFallback>
        </Avatar>
      </div>

      {/* ------------------------------------ Buttons ------------------------------------ */}
      <div className="mb-2 text-2xl">Buttons</div>
      <div className="flex flex-row gap-5 mb-2">
        <Button size="default" variant="secondary">
          <Share2 /> Share
        </Button>
        <Button size="default" variant="secondary">
          <Save /> Save
        </Button>
        <Button size="default" variant={"default"}>
          <Edit /> Edit Lead
        </Button>
      </div>
      <div className="flex flex-row gap-5 mb-5">
        <Button size="circular" variant="secondary">
          <X />
        </Button>
        <Button size="circular" variant="outline">
          <X />
        </Button>
      </div>

      {/* ------------------------------------ Alert Box ------------------------------------ */}
      <div className="mb-2 text-2xl">Alert Box</div>
      <div className="flex flex-row gap-5 mb-5">
        <AlertDialog>
          <Button variant={"outline"}>
            <AlertDialogTrigger>Open</AlertDialogTrigger>
          </Button>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {/* ------------------------------------ Calandar ------------------------------------ */}
      <Label htmlFor="date" className="mb-2 text-2xl">
        Date of birth
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="secondary"
            id="date"
            className="w-48 justify-between font-normal mb-2 dark:bg-card"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto overflow-hidden p-0"
          align="start"
        ></PopoverContent>
      </Popover>

      <Calendar
        mode="single"
        className="rounded-md border shadow-sm mb-5"
        captionLayout="dropdown"
      />

      {/* ------------------------------------ Checkbox ------------------------------------ */}
      <div className="mb-2 text-2xl">Checkbox</div>
      <div className="flex flex-col gap-6 mb-5">
        <div className="flex items-center gap-3">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Recent</Label>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox id="terms-2" defaultChecked />
          <div className="grid gap-2">
            <Label htmlFor="terms-2">Home</Label>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox id="terms-2" defaultChecked />
          <div className="grid gap-2">
            <Label htmlFor="terms-2">Applications</Label>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox id="terms-2" defaultChecked />
          <div className="grid gap-2">
            <Label htmlFor="terms-2">Desktop</Label>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox id="terms-2" defaultChecked />
          <div className="grid gap-2">
            <Label htmlFor="terms-2">Downloads</Label>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox id="toggle" disabled />
          <Label htmlFor="toggle">Enable notifications</Label>
        </div>
      </div>

      <div className="mb-4 h-[250px]">
        {/* ------------------------------------ Dropdown ------------------------------------ */}
        <div className="mb-2 text-2xl">Dropdown</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"} className="bg-card">
              Open
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={showStatusBar}
              onCheckedChange={setShowStatusBar}
            >
              Status Bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showActivityBar}
              onCheckedChange={setShowActivityBar}
              disabled
            >
              Activity Bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showPanel}
              onCheckedChange={setShowPanel}
            >
              Panel
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* ------------------------------------ Card ------------------------------------ */}
      <div className="mb-2 text-2xl">Card</div>
      <div className="flex flex-row gap-5 mb-5">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardDescription>Login to your account</CardDescription>
            <CardTitle>
              Enter your email below to login to your account
            </CardTitle>
            <CardAction>
              <Button variant="link">Sign Up</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              type="submit"
              variant={"outline"}
              className="w-full dark:bg-[#121212]"
            >
              Login
            </Button>
            <Button
              variant="default"
              className="w-full dark:bg-primary dark:text-background"
            >
              Login with Google
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* ------------------------------------ Dialogue ------------------------------------ */}
      <div className="mb-2 text-2xl">Dialogue</div>
      <div className="flex flex-row gap-5 mb-5">
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button variant="secondary">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  <p>Make changes to your profile here. </p>
                  <p>Click save when you are done.</p>
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="name-1">Name</Label>
                  <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="username-1">Username</Label>
                  <Input
                    id="username-1"
                    name="username"
                    defaultValue="@peduarte"
                  />
                </div>
              </div>
              <DialogFooter className="w-auto">
                <DialogClose asChild>
                  <Button variant="secondary" className="dark:bg-[#121212]">
                    Cancel
                  </Button>
                </DialogClose>
                <Button
                  type="submit"
                  variant={"default"}
                  className="dark:bg-primary dark:text-background"
                >
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>

      <h2>-----------------Input----------------</h2>
      <div>
        <div className="grid w-full max-w-sm items-center gap-3 mb-5">
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="email">Name</Label>
          <Input type="email" id="email" placeholder="m@example.com" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-3 mt-3">
          <Label htmlFor="email">Username</Label>
          <Input type="email" id="email" />
        </div>
      </div>

      <h3 className="m-3 text-center">
        ---------------Progress-----------------
      </h3>
      <div className="m-4">
        <Progress value={33} />
      </div>

      <div>
        <h3 className="mb-2">---------Seperator---------------</h3>
        <Separator className="my-3" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>hellooooo</div>

          <Separator orientation="vertical" />
          <div>hellooooo</div>
          <Separator orientation="vertical" />
          <div>hellooooo</div>
          <Separator orientation="vertical" />
          <div>hellooooo</div>
          <Separator orientation="vertical" />
          <div>hellooooo</div>
        </div>

        <Separator className="my-3" />
      </div>

      <div>
        <h3 className="m-4">-------------skeleton--------------------</h3>

        <div className="flex flex-col space-y-3 m-5">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div>

      <div className="m-5">
        <h2 className="m-5 text-center">--------Slider-----------</h2>

        <Slider defaultValue={[33]} max={100} step={1} />
      </div>

      <div className="m-5">
        <h2 className="m-5 text-center">--------Switch-----------</h2>

        <Switch />
      </div>

      <div className="m-5 h-[400px]">
        <h2 className="m-5 text-center">--------Popover-----------</h2>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="leading-none font-medium">Dimensions</h4>
                <p className="text-muted-foreground text-sm">
                  Set the dimensions for the layer.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">Width</Label>
                  <Input
                    id="width"
                    defaultValue="100%"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxWidth">Max. width</Label>
                  <Input
                    id="maxWidth"
                    defaultValue="300px"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="height">Height</Label>
                  <Input
                    id="height"
                    defaultValue="25px"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxHeight">Max. height</Label>
                  <Input
                    id="maxHeight"
                    defaultValue="none"
                    className="col-span-2 h-8"
                  />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="m-5">
        <h2 className="m-5 text-center">--------Tab-----------</h2>

        <Tabs
          defaultValue="account"
          className="w-[400px] h-[400px] border border-white"
        ></Tabs>
      </div>

      <div className="m-5">
        <h2 className="m-5 text-center">--------TextArea-----------</h2>

        <div className="grid w-full gap-3">
          <Label htmlFor="message-2">Your Message</Label>
          <Textarea placeholder="Type your message here." id="message-2" />
          <p className="text-muted-foreground text-sm">
            Your message will be copied to the support team.
          </p>

          <Label htmlFor="message-2">Your Message</Label>
          <Textarea placeholder="Type your message here." id="message-2" />
          <p className="text-muted-foreground text-sm">
            Your message will be copied to the support team.
          </p>

          <Button>Send Message</Button>
        </div>
      </div>

      <div className="grid w-full gap-3 m-5">
        <h2 className="m-5 text-center">--------Tooltip-----------</h2>

        <Tooltip>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="grid w-full gap-3 m-5">
        <HoverCard>
          <HoverCardTrigger>@Keross</HoverCardTrigger>
          <HoverCardContent>
            @Keross
            <br />
            Step into the future of colobaration with our AI workspace
            <br />
            <div className="flex gap-2 mt-2">
              <LucideCalendar />
              <p>Opened December 2007</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className="m-5">
        <h2 className="m-5 text-center">--------Radio group-----------</h2>

        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Comfortable</Label>
          </div>

          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-three" id="option-two" />
            <Label htmlFor="option-three">Compact</Label>
          </div>

          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option" id="option-two" disabled checked />
            <Label htmlFor="option">Comfortable</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="m-5">
        <h2 className="m-5 text-center">--------Scroll Area-----------</h2>

        <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit corporis hic pariatur ipsa saepe. Consectetur
          voluptatibus quo reprehenderit blanditiis quasi qui alias quod
          voluptas vel iusto similique ducimus consequuntur nesciunt soluta
          totam, magnam ratione, voluptate quia laborum beatae? Molestias,
          repellat consectetur facilis a labore dignissimos soluta nam quo
          laudantium quasi.
          {/* Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king's pillow, in his
          soup, even in the royal toilet. The king was furious, but he couldn't
          seem to stop Jokester. And then, one day, the people of the kingdom
          discovered that the jokes left by Jokester were so funny that they
          couldn't help but laugh. And once they started laughing, they couldn't
          stop. */}
        </ScrollArea>
      </div>

      <div className="m-5">
        <h2 className="m-5 text-center">---------------Table-------------</h2>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="m-5">
        <h2 className="m-5 text-center">
          -----------------Combobox----------------
        </h2>
        <Popover open={oopen} onOpenChange={setOOpen}>
          <PopoverTrigger asChild>
            <Button variant="secondary" className="w-[200px] justify-start">
              Select framework
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-[300px] p-0">
            <Command>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>

                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>

                <CommandItem>Profile</CommandItem>
                <CommandItem>Billing</CommandItem>
                <CommandItem>Settings</CommandItem>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <div className="mb-4 h-[250px]">
        {/* ------------------------------------ Dropdown ------------------------------------ */}
        <h2 className="m-5 text-center">
          -----------------Filtering Dropdown----------------
        </h2>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"secondary"}>
              filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuCheckboxItem
              checked={showStatusBar}
              onCheckedChange={setShowStatusBar}
            >
              Status
            </DropdownMenuCheckboxItem>

            <DropdownMenuCheckboxItem
              checked={showActivityBar}
              onCheckedChange={setShowActivityBar}
            >
              Email
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showPanel}
              onCheckedChange={setShowPanel}
            >
              Panel
            </DropdownMenuCheckboxItem>

            <DropdownMenuCheckboxItem
              checked={showStatusBar}
              onCheckedChange={setShowStatusBar}
            >
              Amount
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Date Range Picker</h1>
        <div className="h-[300px]">
          <DateRangePicker
            onUpdate={handleUpdate}
            initialDateFrom={new Date("2024-01-01")}
            initialDateTo={new Date("2024-01-31")}
          />
        </div>
        <div className="mt-6 p-4 border rounded-lg">
          <p>
            Selected Range :
            {dateRange?.from ? dateRange.from.toLocaleDateString() : "N/A"} -
            {dateRange?.to ? dateRange.to.toLocaleDateString() : "N/A"}
          </p>
        </div>
      </div>

      <div className="m-5">
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">Sub Item 1</Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">Sub Item 2</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">Button</Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">Card</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">Getting Started</Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">API Reference</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>List</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">Item A</Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">Item B</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">One</Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">Two</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="flex items-center gap-2">
                        <CircleHelpIcon />
                        Backlog
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="flex items-center gap-2">
                        <CircleIcon />
                        To Do
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="flex items-center gap-2">
                        <CircleCheckIcon />
                        Done
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

<div>
<Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>

</div>




    <div className="flex flex-col items-center gap-2 m-5">
      <div className="flex w-full flex-wrap gap-2">
        <Badge variant="verified">Verified</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>

    </div>
  
            <div>
      <Workflow title="Deal Workflow" steps={steps} />
    </div>


    </div>
  );
}
