import Link from "next/link";
const GeneralCourses = () => {
  const general = [
    {
      href: "/",
      image: "/images/notes/5.png",
      title: "Cos 101: Artificail Intelligence",
      hint: "Explore the world of database",
      author: "/images/notes/author.png",
      name: "Dr M.C Okoronkwo ",
      pages: "122",
    },
    {
      href: "/",
      image: "/images/notes/2.png",
      title: "Cos 101: Data management",
      hint: "Explore the world of database",
      author: "/images/notes/author.png",
      name: "Dr M.C Okoronkwo ",
      pages: "122",
    },
    {
      href: "/",
      image: "/images/notes/3.png",
      title: "Cos 101: Data Structures",
      hint: "Explore the world of database",
      author: "/images/notes/author.png",
      name: "Dr M.C Okoronkwo ",
      pages: "122",
    },
  ];
  return (
    <div className="m-5">
      <h1 className="text-[2rem] font-medium pt-5">General Courses</h1>
      <div className=" lg:grid lg:grid-cols-4 gap-10">
      {general.map(({ href, image, title, hint, author, name, pages }) => (
        <div className="mt-10">
          <Link href={href} className=" items-center">
            <div className="p-[3rem] bg-white w-full shadow-xl hover:shadow-none">
              <img src={image} alt="" className="w-full" />
              <h1 className="text-[2rem] font-medium pt-5">{title}</h1>
              <p className="text-xl py-3 "> {hint}</p>
              <div className="flex justify-between items-center pt-7 text-[#737373] text-xl">
                <div className="flex items-center gap-3">
                  <img src={author} alt="" />
                  {name}
                </div>
                <div>{pages}</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
      </div>
    
    </div>
  );
};

export default GeneralCourses;
