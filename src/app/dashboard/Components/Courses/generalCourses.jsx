"use client"
import Link from "next/link";
const GeneralCourses = () => {
  const downloadFileAtURL = (url,event) =>{
    event.preventDefault()
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href =url
    aTag.setAttribute('download',fileName)
    document.body.appendChild (aTag)
    aTag.click();
    aTag.remove();
}
  const generalNotes = [
    {
      href: "/",
      image: "/images/notes/5.png",
      title: "Cos 101: Artificail Intelligence",
      hint: "Explore the world of database",
      author: "/images/notes/author.png",
      name: "Dr M.C Okoronkwo ",
      COS232 : "https://drive.google.com/uc?export=download&id=1qMZ1kYYW-qQv20JsMdm7LReQ83HPjQVh",
      download:"/images/sidebar/icons/download.svg",
    },
    {
      href: "/",
      image: "/images/notes/2.png",
      title: "Cos 101: Data management",
      hint: "Explore the world of database",
      author: "/images/notes/author.png",
      name: "Dr M.C Okoronkwo ",
      COS232 : "https://drive.google.com/uc?export=download&id=1qMZ1kYYW-qQv20JsMdm7LReQ83HPjQVh",
      download:"/images/sidebar/icons/download.svg",
    },
    {
      href: "/",
      image: "/images/notes/3.png",
      title: "Cos 101: Data Structures",
      hint: "Explore the world of database",
      author: "/images/notes/author.png",
      name: "Dr M.C Okoronkwo ",
      COS232 : "https://drive.google.com/uc?export=download&id=1qMZ1kYYW-qQv20JsMdm7LReQ83HPjQVh",
      download:"/images/sidebar/icons/download.svg",
    },
  ];
  return (
    <div>
      <h1 className="text-[2rem] font-medium pt-20">General Courses</h1>
      <div className="block lg:grid lg:grid-cols-4 gap-10">
        {generalNotes.map(({ href, image, title, hint, author, name, download,COS232 }) => (
          <div className="mt-10">
            <Link href={href} className=" items-center">
              <div className="p-[3rem] bg-white w-full shadow-xl hover:shadow-none">
                <img src={image} alt="" className="w-full" />
                <h1 className="text-[2rem] font-medium pt-5 truncate">
                  {title}
                </h1>
                <p className="text-xl py-3 "> {hint}</p>
                <div className="flex justify-between items-center pt-7 text-[#737373] text-xl">
                  <div className="flex items-center gap-3">
                    <img src={author} alt="" />
                    {name}
                  </div>
                  <div>
                  </div>
                  <button onClick={(event)=>{downloadFileAtURL(COS232,event)}}> <img src={download} alt="download" className="w-8/12"/></button>
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