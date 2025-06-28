import { useState, type ChangeEvent } from "react";
import { Appbar } from "../components/Appbar";
import { Button } from "../components/Button";
import axios from "axios";
import { BACKEND_URL } from "../config/config";
import { useNavigate } from "react-router-dom";

export function Publish() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    async function handlePublish(){
        const res = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
            title: title,
            content: content 
        },{
            headers:{
                "Authorization": "Bearer "+localStorage.getItem("jwt")
            }
        });
        navigate(`/blog/${res.data.id}`)
    }
    return <div>
        <Appbar />
        <div className="flex justify-center pt-10">
            <div className="w-full max-w-3xl flex flex-col gap-6">
                <input onChange={(e)=>setTitle(e.target.value)} type="text" className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5" placeholder="Title" required />
                <TextEditor onChange={(e)=>setContent(e.target.value)}/>
                <div>
                    <Button lable={"Publish post"} onClick={handlePublish} />
                </div>
            </div>
        </div>
    </div>
}

function TextEditor({onChange}:{onChange: (e:ChangeEvent<HTMLTextAreaElement>)=>void}) {
    return <div>
        <div className="w-full p-4 border border-gray-200 rounded-lg bg-gray-50">
            <textarea id="editor" rows={8} onChange={onChange} className="block w-full px-0 text-sm text-gray-800 bg-gray-50 focus:outline-none" placeholder="Write an article..." required ></textarea>
        </div>
    </div>

}