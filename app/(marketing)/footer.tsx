import { Button } from "@/components/ui/button";
import Image from "next/image";

type Flags = {
  src: string;
  label: string;
}

const flags: Flags[] = [{
  src: "hr",
  label: "Croatian",
},
{
  src: "es",
  label: "Spanish",
},
{
  src: "fr",
  label: "Frensh",
},
{
  src: "it",
  label: "Italian",
},
{
  src: "jp",
  label: "Japanese",
},
];

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        {flags.map((value) => (
          <Button key={value.label} size="lg" variant="ghost" className="w-full">
            <Image
              src={`/${value.src}.svg`}
              alt={value.label}
              height={32}
              width={40}
              className="mr-4 rounded-md"
            />
            {value.label}
          </Button>
        ))}
      </div>
    </footer>
  );
}
