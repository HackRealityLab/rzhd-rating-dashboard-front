import Image from "next/image";
import Button from "./Button";
import Card from "./Card";

import ArrowRightImg from "@/public/arrow-right-img.svg";

const CardWithMoreInfo = () => {
  return (
    <div className="flex items-center">
      <Card>*название подразделения*</Card>
      <Button
        className="flex gap-4 items-center border border-[--red] rounded-2xl px-5 py-3.5"
        href="/"
      >
        <span>Подробнее</span>
        <Image
          src={ArrowRightImg}
          alt="Подробнее"
          width={20}
          height={20}
        ></Image>
      </Button>
    </div>
  );
};

export default CardWithMoreInfo;
