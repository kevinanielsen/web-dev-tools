"use server";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import tools from "@/tools.json"
import Link from "next/link";

export default async function Home() {
  return (
    <main className="max-w-5xl py-8">
      <h1>Web development tools</h1>
      <p>A collection of web development tools</p>
      <div className="mt-8 flex flex-wrap gap-4 w-full justify-between">
        {tools.map((tool) => (
          <Card className="bg-colors-primary/5 max-w-80 w-full flex flex-col justify-between">
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
    </main>
  );
}
