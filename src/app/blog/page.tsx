/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, Tag, ChevronRight } from "lucide-react";
import { blogPosts, blogCategories } from "@/lib/blog-posts";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-12">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
              Jewelry Tips & Guides
            </h1>
            <p className="text-xl text-muted-foreground mb-2 font-bengali">
              জুয়েলারি টিপস এবং গাইড
            </p>
            <p className="text-lg text-muted-foreground">
              Expert advice on handmade jewelry, resin crafts, Bengali wedding accessories, 
              and thoughtful gift ideas from Bangladesh's premier handmade jewelry experts.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-foreground hover:bg-secondary border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-card rounded-xl shadow-card overflow-hidden hover:shadow-soft transition-shadow duration-300 group border border-border"
              >
                {/* Featured Image */}
                <Link href={`/blog/${post.slug}`} className="block relative h-56 overflow-hidden">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishDate).toLocaleDateString('en-GB', { 
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>

                  {/* Title */}
                  <Link href={`/blog/${post.slug}`} className="block">
                    <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    {post.titleBn && (
                      <p className="text-sm text-muted-foreground mt-1 font-bengali">
                        {post.titleBn}
                      </p>
                    )}
                  </Link>

                  {/* Excerpt */}
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-xs text-primary bg-secondary px-2 py-1 rounded-full"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group"
                  >
                    Read Full Article
                    <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* No Posts Message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No blog posts found in this category. Check back soon!
              </p>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center text-primary-foreground shadow-soft">
            <h2 className="text-3xl font-bold mb-4 font-display">
              Ready to Shop Our Collection?
            </h2>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Browse 118+ handmade resin jewelry pieces with free delivery in Dhaka. 
              From ৳80 keychains to ৳1000 premium photo frames.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-card text-foreground font-bold rounded-lg hover:bg-secondary transition-colors shadow-lg"
            >
              Browse All Products
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
