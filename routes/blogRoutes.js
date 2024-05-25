import express from "express";
import { createBlog,getUserBlog,checkBookMark,getSelectedBlog,Bookmark,checkIfLike,updateBlog,deleteBlog,getSingleBlog,LikedOrDisliked,createComment,getComment,deleteComment} from "../controllers/blog-controllers.js";
import middlewareAuth from "../controllers/MiddlewareAuth.js";
const blogRoutes = express.Router();

blogRoutes.route('/liked/:blogId')
.get(middlewareAuth,checkIfLike)
.post(middlewareAuth,LikedOrDisliked);

blogRoutes.route('/bookmark/:blogId')
.get(middlewareAuth,checkBookMark)
.post(middlewareAuth,Bookmark);

blogRoutes.route('/comment/:blogId')
.get(middlewareAuth,getComment)
.delete(middlewareAuth,deleteComment)
.post(middlewareAuth,createComment);

blogRoutes.route('/blog/:blogId')
.get(middlewareAuth,getSingleBlog)
.put(middlewareAuth,updateBlog)
.delete(middlewareAuth,deleteBlog);

blogRoutes.route('/userblog/:userId')
.post(middlewareAuth,createBlog)
.get(middlewareAuth,getUserBlog);

blogRoutes.route('/blogs/:type')
.get(getSelectedBlog);

export default blogRoutes;