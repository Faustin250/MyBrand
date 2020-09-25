import express from 'express';
import Blog from '../models/blog';
import blogsController from '../controllers/blogsController';
const router = express.Router();
// Update blog
router.patch('/:id', getBlog, blogsController.updateOne);
// Get One middleware
async function getBlog(req, res, next) {
    let blog;
    try{
     blog = await Blog.findById(req.params.id);
     if(blog == null){
         return res.status(404).json({message: 'Blog not found'});
     }
    } catch(err) {
        return res.status(500).json({
            message: err.message,
        });
    }
    res.blog = blog;
    next();
}
module.exports = router;