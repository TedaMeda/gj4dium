import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { Appbar } from "../components/Appbar";
import { BlogFull } from "../components/BlogFull";
import { BlogFullSkeleton } from "../components/BlogSkeleton";

export function Blog(){
    const { id } = useParams();
    const {blog, loading} = useBlog({id: id||""});
    if(loading){
        return <div className="py-15">
            <BlogFullSkeleton/>
        </div>
    }
    return(
        <div>
            <Appbar/>
            {
                blog
                ?<BlogFull blog={blog}/>
                :<div className="font-light text-7xl flex justify-center pt-20">
                    Blog to laaiv dofa
                </div>
            }
        </div>
    )
}