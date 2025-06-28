import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

interface BlogCardProps {
    id: string,
    authorName: string,
    title: string,
    content: string,
    publishedDate: Date
}
export function BlogCard({
    id,
    authorName,
    title,
    content,
    publishedDate,
}: BlogCardProps) {
    const options = { year: "numeric", month: "long", day: "numeric" } as const;
    return <Link to={`/blog/${id}`}>
        <div className="p-3 min-w-xl">
            <div className="flex flex-col gap-2 border-b border-slate-300 pb-4">
                <div className="flex gap-1 justify-start items-center">
                    <Avatar name={authorName} />
                    <div className="font-light">
                        {authorName}
                    </div>
                    <div className="font-extralight text-slate-300">&#x2022;</div>
                    <div className="font-thin text-slate-500">
                        {publishedDate.toLocaleDateString('en-US', options)}
                    </div>
                </div>
                <div className="font-semibold text-xl">
                    {title}
                </div>
                <div className="font-light text-md text-slate-700">
                    {content.slice(0, 100) + '...'}
                </div>
                <div className="font-extralight text-sm text-slate-600">
                    {`${Math.ceil(content.length / 100)} min read`}
                </div>
            </div>
        </div>
    </Link>
}

