import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Achaq from "../../assets/achaq.png";
import BlogLayout from "../../themes/BlogLayout";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import Imagecomponent from "../../components/ImageComponent";
import CodeBlock from "../../components/CodeBlock";

const components = {
  pre: CodeBlock,
  Imagecomponent,
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

type Params = {
  params: {
    slug: string;
  };
};
export const getStaticProps = async ({ params: { slug } }: Params) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeHighlight],
    },
  });

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

interface PostProps {
  frontMatter: {
    link: string;
    tags: string;
    thumbnailUrl: string;
    title: string;
    description: string;
    date: string | number | Date;
    author: string;
    readTime: number;
  };
  params: {
    slug: string;
  };
  mdxSource: MDXRemoteSerializeResult;
}

const PostPage: React.FC<PostProps> = ({
  frontMatter: {
    link,
    tags,
    thumbnailUrl,
    title,
    description,
    date,
    author,
    readTime,
  },
  mdxSource,
}) => {
  return (
    <BlogLayout
      pageTitle={title}
      description={description}
      siteName="Achaq Codes"
      thumbnailUrl={thumbnailUrl}
      title={title}
      author={author}
      tags={tags}
      link={`https://achaq.codes/blog/${link}`}
      date={new Date(date).toISOString()}
    >
      <article className="mx-auto px-8 lg:px-2 mb-20 prose prose-md lg:prose-lg dark:prose-invert prose-pre:bg-gray-200 dark:prose-pre:bg-zinc-900 prose-pre:shadow-md prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-zinc-900 prose-pre:rounded-xl prose-code:rounded-lg">
        <div className="flex flex-col items-start pt-28">
          <h1 className="text-xl md:text-2xl text-black dark:text-white font-semibold">
            {title}
          </h1>
          <div className="text-xs md:text-sm text-satrt text-black dark:text-gray-100 mb-12 flex justify-between gap-8 w-full px-2">
            <div className="flex flex-row justify-center">
              <span>
                <Image
                  className="rounded-full aspect-square"
                  src={Achaq}
                  width={20}
                  height={20}
                  alt="Mohamed Achaq"
                />
              </span>

              <span className="text-satrt text-black dark:text-white ml-4">
                {author}
              </span>
            </div>
            <div>
              <span className=" text-satrt text-black dark:text-white ">
                {date}
              </span>
              <span className="text-satrt text-black dark:text-white ml-4">
                {readTime + " min read"}
              </span>
            </div>
          </div>
        </div>
        <MDXRemote {...mdxSource} components={components as any} />
      </article>
    </BlogLayout>
  );
};

export default PostPage;
