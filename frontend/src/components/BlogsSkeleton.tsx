export function BlogsSkeleton() {
    return (
        <div className="p-3 min-w-xl animate-pulse">
            <div className="flex flex-col gap-2 border-b border-slate-300 pb-4">
                {/* Avatar and Author Info */}
                <div className="flex gap-2 items-center">
                    <div className="w-8 h-8 bg-slate-300 rounded-full"></div>
                    <div className="h-4 w-24 bg-slate-300 rounded"></div>
                    <div className="h-2 w-2 bg-slate-300 rounded-full"></div>
                    <div className="h-4 w-20 bg-slate-300 rounded"></div>
                </div>

                {/* Title */}
                <div className="h-6 w-3/4 bg-slate-300 rounded"></div>

                {/* Content snippet */}
                <div className="space-y-2">
                    <div className="h-4 w-full bg-slate-300 rounded"></div>
                    <div className="h-4 w-5/6 bg-slate-300 rounded"></div>
                </div>

                {/* Read time */}
                <div className="h-3 w-24 bg-slate-300 rounded"></div>
            </div>
        </div>
    );
}
