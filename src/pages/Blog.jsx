import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { blogPosts } from '../data/blog-posts';
import { businessInfo } from '../data/seo-data';

const Blog = () => {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Pryceless Solutions Blog",
    "description": "Web design tips, guides, and insights for small businesses in Indiana",
    "url": `${businessInfo.url}/blog`,
    "publisher": {
      "@type": "Organization",
      "name": businessInfo.name
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      }
    }))
  };

  return (
    <>
      <SEOHead
        title="Blog"
        description="Web design tips, pricing guides, and digital marketing insights for Indiana small businesses. Learn how to build and grow your online presence."
        keywords="web design blog, website tips, small business marketing, Indiana business blog"
        canonical="/blog"
        schema={blogSchema}
      />

      <main className="pt-20 min-h-screen bg-slate-900">
        {/* Hero */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Web Design <span className="text-sky-400">Blog</span>
            </h1>
            <p className="text-xl text-gray-300">
              Tips, guides, and insights to help your business succeed online
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="bg-slate-800 rounded-xl overflow-hidden group hover:ring-2 hover:ring-sky-500 transition-all"
                >
                  <div className="aspect-video bg-slate-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-600/30 to-purple-600/30 flex items-center justify-center">
                      <span className="text-6xl opacity-50">
                        {post.category === 'Pricing' ? '💰' : post.category === 'Strategy' ? '📈' : '🍽️'}
                      </span>
                    </div>
                    {post.featured && (
                      <span className="absolute top-3 left-3 bg-sky-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-sm">
                      <span className="text-sky-400">{post.category}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-500">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{post.author}</span>
                      <span className="text-gray-500">
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-300 mb-8">
              Let&apos;s turn these tips into reality for your business.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-semibold transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
