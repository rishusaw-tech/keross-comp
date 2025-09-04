import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function HelloWorld() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Hello World</CardTitle>
          <CardDescription>Have a nice day</CardDescription>
        </CardHeader>
      </Card>
    </>
  );
}

export default HelloWorld;
