import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/case-studies/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Markdown file not found");
        return res.text();
      })
      .then(setContent)
      .catch((err) => {
        setContent("# Error\nCould not load project details.");
        console.error(err);
      });
  }, [slug]);

  return (
    <section className="max-w-3xl mx-auto py-16 px-4 prose prose-neutral dark:prose-invert">
      {/* Navigation links */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4 text-sm text-accent font-medium">
        <Link
          to="/"
          className="hover:underline hover:text-primary transition duration-200"
        >
          ← Home
        </Link>
        <Link
          to="/projects"
          className="hover:underline hover:text-primary transition duration-200"
        >
          ← All Projects
        </Link>
      </div>

      {/* Case Study Content */}
      <ReactMarkdown>{content}</ReactMarkdown>
    </section>
  );
};

export default ProjectDetail;
