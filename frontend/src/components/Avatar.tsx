export function Avatar({ name, size="small"}: { name: string, size?: "small" | "large" }) {
    return <div className={`relative inline-flex items-center justify-center ${size=="small"?"w-7 h-7":"w-10 h-10"} overflow-hidden bg-gray-300 rounded-full`}>
        <span className={`font-medium ${size=="small"?"text-sm":"text-xl"} text-gray-600`}>{name[0]}</span>
    </div>
}