import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
}

function Imagecomponent(props: Props) {
  return (
    <Image
      className="rounded-2xl"
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  );
}
export default Imagecomponent;
