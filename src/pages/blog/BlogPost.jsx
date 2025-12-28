import { useParams, Link, Navigate } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { getBlogPost, getRecentPosts } from '../../data/blog-posts';
import { businessInfo } from '../../data/seo-data';

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogPost(slug);
  const recentPosts = getRecentPosts(3).filter(p => p.slug !== slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": businessInfo.name,
      "url": businessInfo.url
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${businessInfo.url}/blog/${post.slug}`
    }
  };

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        keywords={post.keywords.join(', ')}
        canonical={`/blog/${post.slug}`}
        schema={articleSchema}
      />

      <main className="pt-20 min-h-screen bg-slate-900">
        {/* Hero */}
        <section className="py-12 px-4 bg-slate-800">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="text-sky-400 hover:text-sky-300 text-sm mb-4 inline-block">
              ← Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-4 text-sm">
              <span className="text-sky-400">{post.category}</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">{post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-white font-medium">{post.author}</p>
                <p className="text-gray-500 text-sm">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none
                          prose-headings:text-white prose-headings:font-bold
                          prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                          prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                          prose-h4:text-lg prose-h4:mt-4 prose-h4:mb-2
                          prose-p:text-gray-300 prose-p:leading-relaxed
                          prose-li:text-gray-300
                          prose-strong:text-white
                          prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline
                          prose-table:text-gray-300
                          prose-th:text-white prose-th:bg-slate-700 prose-th:px-4 prose-th:py-2
                          prose-td:px-4 prose-td:py-2 prose-td:border-slate-700">
              <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>').replace(/#{4}\s(.+)/g, '<h4>$1</h4>').replace(/#{3}\s(.+)/g, '<h3>$1</h3>').replace(/#{2}\s(.+)/g, '<h2>$1</h2>').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/- (.+)/g, '<li>$1</li>') }} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-300 mb-6">
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-semibold transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href={`tel:${businessInfo.phone}`}
                className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors"
              >
                Call {businessInfo.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {recentPosts.length > 0 && (
          <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">More Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {recentPosts.slice(0, 2).map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="bg-slate-800 rounded-xl p-6 hover:ring-2 hover:ring-sky-500 transition-all"
                  >
                    <span className="text-sky-400 text-sm">{relatedPost.category}</span>
                    <h3 className="text-lg font-bold text-white mt-2 mb-2">{relatedPost.title}</h3>
                    <p className="text-gray-400 text-sm">{relatedPost.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default BlogPost;
