import Image from "next/image"
import { TBlog } from "../../types/blog/blog.type"
import { GrView } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const BlogCard : React.FC <TBlog> = ({id, title, content, tags, date, totalLike, totalComment, author, image, authorImage, authorTItle}) => {
  return (
    <div className=" mx-auto w-full transition-all duration-300 hover:shadow-xl shadow-lg rounded-lg cursor-pointer" >
      <div className="relative h-64 overflow-hidden">
        <Image className="transition-transform duration-1000 ease-in-out transform hover:scale-110 rounded-lg" src={image} alt="" layout="fill" objectFit="cover"/>
      </div>

      {/* icons */}
      <div className="px-4 py-8">
        <div className="flex gap-10">
          <div className="flex items-center">
            <GrView />
            <span className="ml-2 text-sm text-gray-500">5</span>
          </div>

          <div className="flex items-center">
            <FcLike />
            <span className="ml-2 text-sm text-gray-500">{totalLike}</span>
          </div>

          <div className="flex items-center">
            <FaComment />
            <span className="ml-2 text-sm text-gray-500">{totalComment}</span>
          </div>

          <div className="flex items-center">
            <MdDateRange />
            <span className="ml-2 text-sm text-gray-500">{date.toLocaleDateString()}</span>
          </div>
        </div>

        {/* Blog tags */}
        <div className="mt-5 mb-5">
          {tags.map(tag => {
            return <span key={tag} className="text-sm text-gray-600 px-2 py-1 bg-gray-200 rounded-full mr-2"># {tag}</span>
          })}
        </div>

          {/* blog info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{content.split(" ", 20).join(" ")}...</p>
        </div>

        <Link href={`/blog/${id}`}><Button >Read more</Button></Link>

        {/* Author info */}
        <div className="flex items-center mt-10">
          <div>
            <Image className="w-10 h-10 rounded-full object-cover" src={authorImage} alt={authorTItle} height={200} width={200} />
          </div>
          <div className="ml-4">
            <h4 className="text-sm font-semibold">{author}</h4>
            <p className="text-gray-500 text-sm">{authorTItle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
