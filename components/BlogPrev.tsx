interface Props {
  readTime: number;
  date: string;
  description: string;
  title: string;
  image: string;
}
const BlogPrev = (props: Props) => {
  return (
    <div className="relative flex w-full h-40 md:h-56 justify-center flex-col gap-y-16  hover:-translate-y-1 hover:translate-y-3 active:scale-90 transition-all duration-300 ">
      <div className="flex flex-col p-2">
        <div className="flex flex-row justify-between mb-2 ">
          <div className="text-xs text-black dark:text-white">{props.date}</div>
          <div className="text-xs text-black dark:text-white">
            {props.readTime + " min read"}
          </div>
        </div>
        <h1 className="text-3xl  tracking-tight text-[#6320EE] dark:text-[#FF6B6B] mb-2">
          {props.title}
        </h1>
        <h3 className=" text-lg text-black dark:text-white">
          {props.description}
        </h3>
      </div>
    </div>
  );
};

export default BlogPrev;
