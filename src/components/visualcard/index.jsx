import { Download } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";


export function VisualCard({ className, ...props }) {
  return (
    <Card
      key={props.key}
      className={cn("w-[380px]  flex  flex-col justify-between", className)}
      {...props}
    >
      <CardHeader className="gap-2">
        <Avatar className="border border-muted p-1">
          <AvatarImage src={props.data.icon_url} />
          <AvatarFallback>{props.data.title.slice(0, 2)}</AvatarFallback>
        </Avatar>

        <CardTitle>{props.data.title}</CardTitle>
        <CardDescription>{props.data.description}</CardDescription>
        <div className="flex gap-1 flex-wrap ">
          {props.data.categories.map((cat, idx) => {
            return (
              <Badge
                className="h-fit w-fit p-1 rounded-sm"
                key={idx}
                variant={"outline"}
              >
                {cat.Title}
              </Badge>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center flex-col  rounded-md border p-4">
          <div className="flex gap-1 justify-between w-full items-center">
            <p className="text-sm text-muted-foreground">Votes</p>
            <p className="text-sm font-medium leading-none">
              {props.data.votes}
            </p>
          </div>
          <div className="flex gap-1 justify-between w-full items-center">
            <p className="text-sm text-muted-foreground">Version</p>
            <p className="text-sm font-medium leading-none">
              {props.data.version}
            </p>
          </div>
          <div className="flex gap-1 justify-between w-full items-center">
            <p className="text-sm text-muted-foreground">Rating</p>
            <p className="text-sm font-medium leading-none">
              {Math.floor(parseInt(props.data.rating), 2)}
            </p>
          </div>
          <div className="flex gap-1 justify-between w-full items-center">
            <p className="text-sm text-muted-foreground">Date Released</p>
            <p className="text-sm font-medium leading-none">
              {props.data.date_released.split("T")[0]}
            </p>
          </div>
          <div className="flex gap-1 justify-between w-full items-center">
            <p className="text-sm text-muted-foreground">Last Updated</p>
            <p className="text-sm font-medium leading-none">
              {props.data.last_updated.split("T")[0]}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Download className="mr-2 h-4 w-4" />
          <a href={props.data.url} download>
            Download
          </a>
        </Button>
      </CardFooter>

      <div className="flex justify-center gap-4 mb-5">
        <a className="muted underline text-xs " href={props.data.privacy}>
          Privacy Policy
        </a>
        <a className="muted underline text-xs " href={props.data.support}>
          Support
        </a>
        <a className="muted underline text-xs " href={props.data.license}>
          License
        </a>
      </div>
    </Card>
  );
}
