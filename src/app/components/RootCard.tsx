import Image from "next/image";

const RootCard = ({
  img,
  title,
  price,
}: {
  img: string;
  title: string;
  price: number;
}) => {
  return (
    <div className={" flex flex-col items-center rounded-md shadow "}>
      <div>
        <Image src={img} alt={"image"} width={100} height={100} />
      </div>
      <div>
        <p>{title}</p>
      </div>
      <div>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default RootCard;
