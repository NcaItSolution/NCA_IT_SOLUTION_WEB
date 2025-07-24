import React, { useRef, useEffect } from "react";

// Example tech blog data
const blogs = [
  {
    title: "Next.js 14 Released",
    summary: "A look at the groundbreaking features in Next.js 14.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    url: "#",
  },
  {
    title: "AI Trends in 2025",
    summary: "How AI is changing the landscape for developers.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    url: "#",
  },
  {
    title: "WebAssembly for JavaScript Devs",
    summary: "Speed up your apps with modern WebAssembly techniques.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    url: "#",
  },
  {
    title: "State of CSS 2025",
    summary: "The new utility classes and best practices in CSS.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    url: "#",
  },
  {
    title: "React Server Components",
    summary: "Decoding RSC and its impact on modern web.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    url: "#",
  },
  {
    title: "Rust for Node.js Developers",
    summary: "Bringing performance and safety to JS stacks.",
    image: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=400&q=80",
    url: "#",
  },
  {
    title: "Cloud-Native DevOps",
    summary: "Best practices for deploying apps at scale.",
    image: "https://images.unsplash.com/photo-1467987506553-8f3916508521?auto=format&fit=crop&w=400&q=80",
    url: "#",
  },
  {
    title: "Quantum Computing Basics",
    summary: "How quantum algorithms could change cryptography.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    url: "#",
  },
  {
    title: "TypeScript in 2025",
    summary: "Advanced types & tools for safer JavaScript.",
    image: "https://images.unsplash.com/photo-1522202195461-5addfbf2ff6f?auto=format&fit=crop&w=400&q=80",
    url: "#",
  },
  {
    title: "The Rise of Edge Computing",
    summary: "Processing data closer to the source.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=400&q=80",
    url: "#",
  },
  {
    title: "The Promise of WebGPU",
    summary: "WebGPU brings serious graphics to the browser.",
    image: "https://images.unsplash.com/photo-1464820453369-31d2c0b651af?auto=format&fit=crop&w=400&q=80",
    url: "#",
  },
  {
    title: "Secure Frontend with CSP",
    summary: "Modern content security policies and React.",
    image: "https://images.unsplash.com/photo-1485218128980-9ce1ecb701a4?auto=format&fit=crop&w=400&q=80",
    url: "#",
  },
];

// Utility to chunk blogs into columns for multi-row effect
const ROWS_PER_COL = 2;
function chunkBlogs(arr, rowsPerCol) {
  const res = [];
  for (let i = 0; i < arr.length; i += rowsPerCol) {
    res.push(arr.slice(i, i + rowsPerCol));
  }
  return res;
}

const Blogs = () => {
  const sliderRef = useRef(null);

  // Prepare enough columns for smooth infinite loop
  const columns = chunkBlogs(blogs, ROWS_PER_COL);
  const allColumns = [...columns, ...columns, ...columns];

  useEffect(() => {
    const slider = sliderRef.current;
    let start = null;
    let animationId = null;
    let scrollAmount = 0;
    let lastTimestamp = null;

    // Hide scrollbar via JS for complete cross-browser support
    if (slider) {
      slider.style.scrollbarWidth = "none";
      slider.style.msOverflowStyle = "none";
    }

    // Animate via transform translateX for perfectly smooth, uncontrolled loop (no scrollbars)
    function step(now) {
      if (start === null) {
        start = now;
      }
      if (!lastTimestamp) lastTimestamp = now;
      // Adjust speed here (pixels/frame via time delta)
      const speed = 0.12 * (now - lastTimestamp);
      scrollAmount -= speed;
      // When at end of list, reset for infinite loop
      const totalWidth = slider.scrollWidth / 3; // one set of columns
      if (Math.abs(scrollAmount) >= totalWidth) scrollAmount = 0;

      // Update transform
      slider.style.transform = `translateX(${scrollAmount}px)`;

      lastTimestamp = now;
      animationId = requestAnimationFrame(step);
    }
    animationId = requestAnimationFrame(step);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      // Reset transform in cleanup
      if (slider) slider.style.transform = "";
    };
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-b from-black via-zinc-900 to-black py-10 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">
        Latest Tech Blogs
      </h2>
      <div className="relative">
        {/* Fade overlays for edge effect */}
        <div className="pointer-events-none absolute z-20 top-0 left-0 h-full w-16 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute z-20 top-0 right-0 h-full w-16 bg-gradient-to-l from-black to-transparent" />
        {/* Actual animated slider */}
        <div
          ref={sliderRef}
          className="flex w-full whitespace-nowrap"
          style={{
            transition: "none",
            willChange: "transform",
            overflow: "visible",
          }}
        >
          {allColumns.map((column, colIdx) => (
            <div
              key={colIdx}
              className="flex flex-col gap-6 mx-3 md:mx-5"
              style={{ minWidth: 300, maxWidth: 350 }}
            >
              {column.map((blog, idx) => (
                <a
                  href={blog.url}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-tr from-zinc-900 to-zinc-800 shadow-xl rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105"
                >
                  <div className="relative">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-44 object-cover transition-opacity duration-300 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg md:text-xl text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors duration-200">
                      {blog.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{blog.summary}</p>
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Mobile/Responsive stacking override */}
      <style>{`
        @media (max-width: 800px) {
          .w-full > div > div.flex { min-width: 92vw !important; max-width: 92vw !important; }
        }
        @media (max-width: 600px) {
          .w-full > div > div.flex { min-width: 98vw !important; max-width: 98vw !important; }
        }
      `}</style>
    </div>
  );
};

export default Blogs;
