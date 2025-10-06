"use client";

export const Label = ({ text, className }: { text: string, className?: string }) => {
    return (
        <div className={`flex gap-4 items-center justify-center rounded-full bg-orange-500 bg-opacity-20 text-orange-500 py-2 px-6 w-fit ${className}`}>
            <p className="text-sm font-medium">{text}</p>
        </div>
    )
}