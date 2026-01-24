import { cn } from "@/lib/utils";
import Image from "next/image";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    image?: string;
    className?: string;
}

export function PageHeader({ title, subtitle, image, className }: PageHeaderProps) {
    return (
        <div className={cn("relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-zinc-900 text-white mt-[88px] md:mt-[96px]", className)}>
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0" aria-hidden="true">
                {image ? (
                    <Image
                        src={image}
                        alt=""
                        fill
                        className="object-cover opacity-50"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                ) : (
                    <div className="absolute inset-0 bg-zinc-900" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/20" />
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6 text-center">
                <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
                    <div className="inline-block h-1 w-20 bg-primary mb-2" />
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
