import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogsSkeleton } from "../components/BlogsSkeleton";
import { useBlogs } from "../hooks";

export function Blogs() {
    const { blogs, loading } = useBlogs();

    if (loading) {
        return <div className="flex justify-center py-15">
            <div className="max-w-xl">
                <BlogsSkeleton/>
                <BlogsSkeleton/>
                <BlogsSkeleton/>
                <BlogsSkeleton/>
            </div>
        </div>
    }

    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="max-w-xl">
                {blogs.map(blog => <BlogCard id={blog.id} authorName={blog.author.name} publishedDate={new Date(blog.publishedDate)} title={blog.title} content={blog.content} />)
                }
            </div>
        </div>
    </div>
}