import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config/config";

export interface Blog {
    "id":string,
    "title": string,
    "content": string,
    "publishedDate": string,
    "author": {
        "name": string,
    }
}
export function useBlogs() {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                "Authorization": "Bearer "+localStorage.getItem("jwt")
            }
        }).
            then((res) => {
                console.log(res.data);
                setBlogs(res.data.blogs);
                setLoading(false);
            })
    }, []);

    return {
        loading,
        blogs
    }
}


export function useBlog({id}:{id: string}) {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{
                "Authorization": "Bearer "+localStorage.getItem("jwt")
            }
        }).
            then((res) => {
                setBlog(res.data.blog);
                setLoading(false);
            })
    }, [id]);

    return {
        loading,
        blog
    }
}