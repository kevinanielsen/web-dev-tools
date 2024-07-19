"use server";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default async function Home() {
  const tools = await import("@/tools.json");

  const categoriesList = tools.default.map(t => t.category)
  const categories = categoriesList.filter((v, i, a) => a.indexOf(v) === i);

  return (
    <main className="max-w-5xl py-8">
      <div id="top" />
      <h1>Web development tools</h1>
      <p>A collection of web development tools</p>
      {categories.map((category) => (
        <div className="mt-8 flex flex-col gap-4">
        <h2 className="font-bold capitalize">{category}</h2>
      <div className="grid gap-4 grid-cols-3 w-full justify-between">
        {tools.default.filter(t => t.category === category).map((tool) => (
          <Card className="bg-colors-primary/5 w-full flex flex-col justify-between">
            <CardHeader>
              <div className="flex gap-2 items-center">
                <img src={tool.image} alt={tool.name} className="w-8 h-8" />
                <CardTitle>{tool.name}</CardTitle>
              </div>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={tool.url} target="_blank" className={buttonVariants({ variant: "default" })}>{tool.name}</Link>
            </CardContent>
          </Card>
        ))}
      </div>
      </div>
      ))}
    </main>
  );
}
