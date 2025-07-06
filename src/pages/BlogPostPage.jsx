// src/pages/BlogPostPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blog'; // Importiramo podatke
import { FiExternalLink } from 'react-icons/fi';

export default function BlogPostPage() {
  const { postId } = useParams();
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="pt-32 text-center h-screen">
        <h1 className="text-4xl font-bold">Blog post not found!</h1>
        <Link to="/" className="text-orange-500 mt-4 inline-block hover:underline">
          &larr; Back to Homepage
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="h-[50vh] relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative h-full flex items-end p-8 md:p-12 text-white">
          <div>
            <p className="text-orange-400 font-semibold">{post.category}</p>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mt-2">{post.title}</h1>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <p className="text-gray-700 text-xl leading-relaxed whitespace-pre-line">
            {post.fullContent}
          </p>
          <a 
            href={post.externalLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            {post.linkText}
            <FiExternalLink className="ml-2" />
          </a>
        </div>
      </div>
    </>
  );
}