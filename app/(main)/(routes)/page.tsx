import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const state = true;

export default function Home() {
  return (
    <div className="flex flex-col ">
      <UserButton afterSignOutUrl="/" />
      <ModeToggle /> 
    </div>
  );
}
