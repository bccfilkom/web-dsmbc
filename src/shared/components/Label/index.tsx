"use client";

export const Label = ({ text, className }: { text: string, className?: string }) => {
    return (
        <div className={`flex gap-4 items-center justify-center rounded-full py-2 px-6 w-fit ${className}`}>
            <p className={`font-medium ${className}`}>{text}</p>
        </div>
    )
}