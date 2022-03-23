interface Props {
  readTime: number;
  date: string;
  description: string;
  title: string;
  image: string;
}
const BlogPrev = (props: Props) => {
  return (
    <div className="relative flex w-full h-40 md:h-56 justify-center flex-col  active:scale-90 p-2 hover:bg-gray-200 dark:hover:bg-zinc-800 rounded-lg shadow-sm  hover:scale-110 transition-all duration-300">
      <div className="flex flex-col gap-2 p-2">
        <h1 className="text-xl md:text-2xl text-black dark:text-white font-semibold mb-2">
          {props.title}
        </h1>
        <div className="flex flex-row justify-between mb-2 ">
          <div className="text-sm text-black dark:text-white">{props.date}</div>
          <div className="text-sm text-black dark:text-white">
            {props.readTime + " min read"}
          </div>
        </div>
        <h3 className="text-sm md:text-md text-black dark:text-white">
          {props.description}
        </h3>
      </div>
    </div>
  );
};

export default BlogPrev;
