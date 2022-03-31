interface Props {
  readTime: number;
  date: string;
  description: string;
  title: string;
  image: string;
}
const BlogPrev = (props: Props) => {
  return (
    <div className="flex justify-start items-center md:h-56 active:scale-90 rounded-xl w-full h-48 gap-4 hover:bg-gradient-to-r from-[#6E44FF]  to-[#6EE7B7] dark:from-[#EB5160] dark:to-[#3B82F6] animate-gradient-x hover:shadow-2xl dark:shadow-[#EB5160] transition-all duration-300 ease-in-out select-none">
      <div className="relative flex justify-center flex-col  p-2 bg-white dark:bg-black rounded-xl w-full h-full gap-2 bg-opacity-70 dark:bg-opacity-70 backdrop-filter backdrop-blur-3xl dark:backdrop-blur-3xl transition-all duration-300 ease-in-out">
        <div className="flex flex-col gap-2 p-2">
          <h1 className="text-lg md:text-2xl text-black dark:text-white font-medium mb-2">
            {props.title}
          </h1>
          <div className="flex flex-row justify-between mb-2 ">
            <div className="text-xs text-black dark:text-white">
              {props.date}
            </div>
            <div className="text-xs text-black dark:text-white">
              {props.readTime + " min read"}
            </div>
          </div>
          <h3 className="text-sm md:text-md text-black dark:text-white">
            {props.description}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BlogPrev;
