
import { Post as PostType } from "@/shared";

const Post = ({title,description, date, feat}:PostType) => {
  return (
    <div className="shadow-md max-w-[418px] bg-white w-full p-5">
      <h3 className="text-[26px] font-bold text-dark">{title}</h3>
      <div className="flex gap-4 text-lg text-dark font-normal mt-4">
        <p>{date}</p>
        <div className="w-[1px] bg-black h-[22px]"></div>
        <p>{feat}</p>
      </div>
      <div className="w-full mt-3">
        {description}
      </div>
    </div>
  );
};

export default Post;