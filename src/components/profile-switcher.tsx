/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/383XDV95mXF
 */
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";

export function ProfileSwitcher() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex items-center gap-2">
           <ProfileIcon className="h-6 w-6 text-gra-" />
          <span className="mr-2">Default</span>
          <ArrowDownIcon className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 bg-gray-800">
        <DropdownMenuLabel>Profile Switcher</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex justify-between w-full">
            <div className="flex items-center justify-between gap-2">
              <span>Default Profile</span>
            </div>
            <Button className="ml-auto" size="icon" variant="outline">
              <FileEditIcon className="h-4 w-4" />
            </Button>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button className="w-full" variant="outline">
            <PlusIcon className="mr-2 h-4 w-4" />
            Add Profile
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ArrowDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}

function FileEditIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function ProfileIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        stroke="none"
        d="M0 0h24v24H0z"
        fill="none"
      />
      <circle cx="12" cy="7" r="4" />
      <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
    </svg>
  );
}
