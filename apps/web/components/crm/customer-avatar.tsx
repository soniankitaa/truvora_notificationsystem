import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface CustomerAvatarProps {
  name: string;
}

export function CustomerAvatar({
  name,
}: CustomerAvatarProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Avatar className="h-10 w-10">
      <AvatarFallback>
        {initials}
      </AvatarFallback>
    </Avatar>
  );
}