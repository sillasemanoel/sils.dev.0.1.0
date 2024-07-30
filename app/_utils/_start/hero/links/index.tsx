import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  FigmaLogoIcon,
  DiscordLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";

import { FaXTwitter } from "react-icons/fa6";

const iconMap: Record<string, JSX.Element> = {
  linkedin: <LinkedInLogoIcon className="w-6 h-6 hover:text-primary" />,
  github: <GitHubLogoIcon className="w-6 h-6 hover:text-primary" />,
  figma: <FigmaLogoIcon className="w-6 h-6 hover:text-primary" />,
  discord: <DiscordLogoIcon className="w-6 h-6 hover:text-primary" />,
  x: <FaXTwitter className="w-6 h-6 hover:text-primary" />,
  instagram: <InstagramLogoIcon className="w-6 h-6 hover:text-primary" />,
};

export function getIcon(name: string): JSX.Element {
  return iconMap[name.toLowerCase()] || <span className="w-6 h-6">?</span>;
}
