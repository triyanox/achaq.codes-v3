interface Props {
  readTime: number;
  date: string;
  description: string;
  title: string;
  image: string;
}
import Image from "next/image";
const BlogPrev = (props: Props) => {
  return (
    <div className="flex justify-start items-center  active:scale-90 rounded-[30px] w-full gap-4 bg-white dark:bg-black transition-all duration-300 ease-in-out select-none hover:scale-105">
      <div className="relative flex justify-center flex-col  p-2 bg-white dark:bg-black rounded-[12px] w-full h-full gap-2  group">
        <div className="flex flex-col gap-2 p-2">
          <div>
            <Image
              src={props.image}
              width={1920}
              height={1080}
              alt={props.title}
              className="rounded-xl "
              property="cover"
            />
          </div>
          <div className="flex flex-row justify-between p-1 ">
            <div className="text-md text-black dark:text-white">
              {props.date}
            </div>
            <div className="text-md text-black dark:text-white">
              {props.readTime + " min read"}
            </div>
          </div>
          <h1 className="text-lg md:text-2xl text-black dark:text-white font-medium mb-2 p-1 group-hover:text-[#6E44FF] dark:group-hover:text-[#EB5160]">
            {props.title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BlogPrev;
