import { Alert, AlertDescription, AlertTitle } from "@/registry/new-york/alert";
import { CheckCircle2Icon } from "lucide-react";


export default function Home() {
  return (
    <div className="m-5 flex flex-col">
      <div className="mb-2">Alert</div>
      <Alert className="w-2xl mb-5">
        <CheckCircle2Icon />
        <AlertTitle>Success! Your changes have been saved</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
      </Alert>    
    </div>
  );
}
