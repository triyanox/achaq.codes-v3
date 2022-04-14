import type { NextPage, GetStaticProps } from "next";
import React from "react";
import Layout from "../themes/Layout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import BlogPrev from "../components/BlogPrev";

interface PostsProps {
  posts: {
    slug: string;
    frontMatter: {
      title: string;
      description: string;
      thumbnailUrl: string;
      date: string;
      readTime: number;
    };
  }[];
}

const Blog: NextPage<PostsProps> = ({ posts }) => {
  return (
    <Layout
      pageTitle="Blog - Mohamed Achaq"
      siteName="achaq.codes"
      description="Full Stack Developer"
      preview="blog"
    >
      {" "}
      <section
        id="Blog"
        className="px-2  md:px-12 justify-center items-center "
      >
        <div className="w-full text-black dark:text-white pt-24 text-center">
          <h1 className="text-center text-3xl font-semibold animate-gradient-x text-transparent bg-clip-text bg-gradient-to-r from-[#6E44FF] to-[#EB5160]">
            Blog
          </h1>
          <h2 className="text-xl md:text-2xl font-medium  px-8 md:px-0  text-gray-800 dark:text-gray-200 mt-8">
            My thoughts on the web, programming, and life.
          </h2>
        </div>
        <div className=" flex justify-start items-center flex-col pt-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-4 md:mx-8 lg:mx-12 mt-8 justify-center items-start  ">
            {posts
              .sort(
                (
                  a: { frontMatter: { date: string | number | Date } },
                  b: { frontMatter: { date: string | number | Date } }
                ) =>
                  Number(new Date(b.frontMatter.date)) -
                  Number(new Date(a.frontMatter.date))
              )
              .map(
                (
                  post: {
                    slug: string;
                    frontMatter: {
                      title: string;
                      description: string;
                      thumbnailUrl: string;
                      date: string;
                      readTime: number;
                    };
                  },
                  index: React.Key | null | undefined
                ) => (
                  <Link href={"/blog/" + post.slug} passHref key={index}>
                    <a>
                      <BlogPrev
                        title={post.frontMatter.title}
                        description={post.frontMatter.description}
                        image={post.frontMatter.thumbnailUrl}
                        date={post.frontMatter.date}
                        readTime={post.frontMatter.readTime}
                      />
                    </a>
                  </Link>
                )
              )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
};
