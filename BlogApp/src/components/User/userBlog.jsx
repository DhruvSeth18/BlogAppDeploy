import { useEffect, useState } from "react";
import { userBlogs } from "../api/api";
import ShowBlog from "../Blog/showBlogs";
const UserBlog = ()=>{
    const [blog,setBlog] = useState([]);
    useEffect(()=>{  
        const getUserBlog = async () =>{
            const response = await userBlogs();
            if(response.status === 'success'){
                setBlog(response.blogs);
            }
        }
        getUserBlog();
    },[]);
    return (<>
        <ShowBlog blog={blog} />
    </>)
}
export default UserBlog;