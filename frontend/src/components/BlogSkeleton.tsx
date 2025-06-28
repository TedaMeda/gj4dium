export function BlogFullSkeleton() {
    return (
        <div className="grid grid-cols-12 px-20 pt-10 animate-pulse">
            {/* Left Section: Title + Content */}
            <div className="col-span-8 flex flex-col gap-4">
                {/* Title */}
                <div className="h-12 w-3/4 bg-slate-300 rounded"></div>

                {/* Date */}
                <div className="h-4 w-40 bg-slate-300 rounded"></div>

                {/* Content */}
                <div className="space-y-2 mt-4">
                    <div className="h-4 w-full bg-slate-300 rounded"></div>
                    <div className="h-4 w-11/12 bg-slate-300 rounded"></div>
                    <div className="h-4 w-10/12 bg-slate-300 rounded"></div>
                    <div className="h-4 w-9/12 bg-slate-300 rounded"></div>
                    <div className="h-4 w-8/12 bg-slate-300 rounded"></div>
                    <div className="h-4 w-10/12 bg-slate-300 rounded"></div>
                    <div className="h-4 w-8/12 bg-slate-300 rounded"></div>
                    <div className="h-4 w-8/12 bg-slate-300 rounded"></div>
                    <div className="h-4 w-10/12 bg-slate-300 rounded"></div>
                    <div className="h-4 w-8/12 bg-slate-300 rounded"></div>
                    <div className="h-4 w-8/12 bg-slate-300 rounded"></div>
                    <div className="h-4 w-10/12 bg-slate-300 rounded"></div>
                    <div className="h-4 w-8/12 bg-slate-300 rounded"></div>
                    <div className="h-4 w-10/12 bg-slate-300 rounded"></div>
                    <div className="h-4 w-8/12 bg-slate-300 rounded"></div>
                    <div className="h-4 w-8/12 bg-slate-300 rounded"></div>
                </div>
            </div>

            {/* Right Section: Author Info */}
            <div className="col-span-4 px-5 flex flex-col gap-4">
                <div className="h-5 w-24 bg-slate-300 rounded"></div>
                <div className="flex gap-4 items-start">
                    <div className="h-10 w-10 rounded-full bg-slate-300"></div>
                    <div className="flex flex-col gap-2">
                        <div className="h-6 w-32 bg-slate-300 rounded"></div>
                        <div className="h-4 w-56 bg-slate-300 rounded"></div>
                        <div className="h-4 w-48 bg-slate-300 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
