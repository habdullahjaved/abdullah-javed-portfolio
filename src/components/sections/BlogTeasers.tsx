const posts = [
  {
    title: "SEO for Frontend Developers",
    summary: "How to make client-side apps SEO friendly",
    slug: "seo-for-frontend",
  },
  {
    title: "Tailwind Tips for Clean UI",
    summary: "Practical techniques for better design",
    slug: "tailwind-ui-tips",
  },
];

export default function BlogTeasers() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto" id="blog">
      <h2 className="text-3xl font-bold mb-8 text-center">Latest Articles</h2>
      <div className="space-y-6">
        {posts.map((post, idx) => (
          <a
            href={`/blog/${post.slug}`}
            key={idx}
            className="block border-b pb-4 hover:text-green-700 transition"
          >
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-600">{post.summary}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
