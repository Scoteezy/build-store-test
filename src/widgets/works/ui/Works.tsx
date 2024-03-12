
import { Work } from "@/entities";
import { Work as WorkType, mockWorks} from "@/shared";

const Works = () => {
  const posts:WorkType[] = mockWorks;

  return (
    <section className="wrapper mb-[112px]">
      <h2 className="text-[22px] text-dark text-normal mt-3 mb-5 flex-center md:block">Featured works</h2>
      <div className="hidden md:flex flex-col w-full gap-8">
        {posts.map((post) =><Work key={post.id} {...post}/>)}
      </div>
      <div className="w-full">
        <Work {...posts[0]}/>
      </div>
    </section>
  );
};

export default Works;