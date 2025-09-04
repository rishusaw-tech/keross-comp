import HelloWorld from "@/registry/new-york/helloWorld";

export default function Home() {
  return (
    <div className="p-5">
      <div className="my-5">Shadcn Install link: npx shadcn@latest add https://custom-components-sable.vercel.app/r/hello-world.json</div>

      <HelloWorld/>
    
    </div>
  );
}
