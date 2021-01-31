import Image from "next/image";

interface Props {
  src: string;
  description?: string;
  width: number;
  height: number;
}

export default function PictureFrame(props: Props) {
  return (
    <div className="bg-white p-4 flex flex-col justify-center items-center gap-2">
      <Image
        src={props.src}
        alt="Picture of me"
        width={props.width}
        height={props.height}
      />
      <p className="text-black">{props.description}</p>
    </div>
  );
}
