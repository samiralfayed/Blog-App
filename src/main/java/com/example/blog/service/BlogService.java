package com.example.blog.service;

import com.example.blog.model.Blog;
import java.util.List;
import java.util.Optional;

public interface BlogService {
    Blog createBlog(Blog blog);
    List<Blog> getAllBlogs();
    Optional<Blog> getBlogById(Long id);
    Blog updateBlog(Long id, Blog updatedBlog);
    void deleteBlog(Long id);
}