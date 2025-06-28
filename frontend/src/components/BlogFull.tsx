import type { Blog } from "../hooks";

export function BlogFull({blog}:{blog:Blog}){
    const options = { year: "numeric", month: "long", day: "numeric" } as const;
    return <div className="grid grid-cols-12 px-20 pt-10">
        <div className="col-span-8 flex flex-col gap-2">
            <div className="text-5xl font-extrabold">
                {blog.title}
            </div>
            <div className="font-light text-slate-400">
                {new Date(blog.publishedDate).toLocaleDateString('en-US', options)}
            </div>
            <div className="font-light text-slate-700">
                {blog.content}
            </div>
        </div>
        <div className="col-span-4 px-5 flex flex-col gap-3">
            <div className="font-semibold text-md">Author</div>
            <div className="flex gap-4">
                <div className="flex flex-col pt-5">
                    <div className="h-7 w-7 rounded-full bg-gray-300"/>
                </div>
                <div className="flex flex-col">
                    <div className="font-bold text-2xl">{blog.author.name}</div>
                    <div className="font-light text-slate-400">Master of mirth, purveyor of puns, and the funniest person in the kingdom</div>
                </div>
            </div>
        </div>
    </div>
}