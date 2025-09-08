"use client";
import { Checkbox } from "@/registry/new-york/checkbox";
import { Separator } from "@/registry/new-york/separator"
import { Skeleton } from "@/registry/new-york/skeleton"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { Progress } from "@/registry/new-york/progress"
import { Slider } from "@/registry/new-york/slider"
import { Switch } from "@/registry/new-york/switch"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
} from "@/registry/new-york/alert-dialog";
import { Alert, AlertDescription, AlertTitle } from "@/registry/new-york/alert";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york/avatar";
import { Button } from "@/registry/new-york/button";
import { CheckCircle2Icon, Cross, Edit, Save, Share2, X } from "lucide-react";
import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/registry/new-york/card";
import { Input } from "@/registry/new-york/input";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/registry/new-york/accordion";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york/dialog";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  type Checked = DropdownMenuCheckboxItemProps["checked"]


  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)
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
        <Button size="default" variant="outline">
          <Share2 /> Share
        </Button>
        <Button size="default" variant="outline">
          <Save /> Save
        </Button>
        <Button size="default" variant={"default"}>
          <Edit /> Edit Lead
        </Button>
      </div>
      <div className="flex flex-row gap-5 mb-5">
        <Button size="circular" variant="outline">
          <X />
        </Button>
        <Button size="circular" variant="secondary">
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
        <Button variant={"outline"} className="bg-card">Open</Button>
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
              variant="secondary"
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
              <Button variant="outline">Open Dialog</Button>
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
                  <Button variant="outline" className="dark:bg-[#121212]">
                    Cancel
                  </Button>
                </DialogClose>
                <Button
                  type="submit"
                  variant={"secondary"}
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
      <Input type="email" id="email"  />
    </div>
 

 
</div>

<h3 className="m-3 text-center">---------------Progress-----------------</h3>
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
<Switch />

</div>


</div>




    
  );
}
