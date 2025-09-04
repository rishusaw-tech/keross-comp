import { Alert, AlertDescription, AlertTitle } from "@/registry/new-york/alert";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york/avatar";
import { Button } from "@/registry/new-york/button";
import { CheckCircle2Icon, Cross, Edit, Save, Share2, X } from "lucide-react";

export default function Home() {
  return (
    <div className="m-5 flex flex-col">
      <div className="mb-2">Alert</div>
      <div className="w-xl mb-5">
        <Alert>
          <CheckCircle2Icon />
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is an alert with icon, title and description.
          </AlertDescription>
        </Alert>
      </div>

      <div className="mb-2">Avatar</div>
      <div className="flex flex-row gap-5 mb-5">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>AP</AvatarFallback>
        </Avatar>
      </div>

      <div className="mb-2">Buttons</div>
      <div className="flex flex-row gap-5 mb-2">
        <Button size="default" variant="outline">
          <Share2 /> Share
        </Button>
        <Button size="default" variant="outline">
          <Save /> Save
        </Button>
        <Button size="default" variant="secondary">
          <Edit /> Edit Lead
        </Button>
      </div>
      <div className="flex flex-row gap-5 mb-2">
        <Button size="circular" variant="outline">
          <X />
        </Button>
        <Button size="circular" variant="secondary">
          <X />
        </Button>
      </div>
    </div>
  );
}
