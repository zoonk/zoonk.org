import Image from "next/image";
import { Button } from "./Button";

interface CardProps {
  title: string;
  description: string;
  image?: { src: string; alt: string };
  action?: { href: string; label: string };
}

export default function Card({ title, description, image, action }: CardProps) {
  return (
    <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 flex-col sm:p-6">
      {image && (
        <Image src={image.src} height={24} unoptimized alt={image.alt} />
      )}

      <div className="flex h-full flex-col">
        <h3 className="font-semibold text-gray-900">{title}</h3>

        <p className="mt-1 flex-1 text-gray-600">{description}</p>

        {action && (
          <Button href={action.href} color="primary" className="mt-4 w-fit">
            {action.label}
          </Button>
        )}
      </div>
    </div>
  );
}
