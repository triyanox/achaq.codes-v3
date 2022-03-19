interface Props {
  readTime: number;
  date: string;
  description: string;
  title: string;
  image: string;
}
const BlogPrev = (props: Props) => {
  return (
    <div className="relative flex w-full h-40 md:h-56 justify-center flex-col hover:border-2 border-[#6320EE] dark:border-[#FF6B6B] active:scale-90 transition-all duration-100 rounded-xl p-2">
      <div className="flex flex-col gap-2 p-2">
        
        <h1 className="text-2xl md:text-3xl  tracking-tight text-[#6320EE] dark:text-[#FF6B6B] mb-2">
          {props.title}
        </h1>
        <div className="flex flex-row justify-between mb-2 ">
          <div className="text-xs text-black dark:text-white">{props.date}</div>
          <div className="text-xs text-black dark:text-white">
            {props.readTime + " min read"}
          </div>
        </div>
        <h3 className="text-md md:text-lg text-black dark:text-white">
          {props.description}
        </h3>
      </div>
    </div>
  );
};

export default BlogPrev;
