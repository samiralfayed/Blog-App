package com.example.blog.service;

import com.example.blog.model.Blog;
import java.util.List;

public interface BlogService {
    Blog createBlog(Blog blog);
    List<Blog> getAllBlogs();
    Blog getBlogById(Long id);
    void deleteBlog(Long id);
}