import BlogCard from "../../components/blog/BlogCard"
import { CiSearch } from "react-icons/ci";
import BlogSearch from "../../components/blog/BlogSearch";


const page = () => {
  const blogPost = [
    {
      title: "5 Tips for a Healthy Lifestyle from Our Doctors",
      author: "Dr. Sarah Thompson",
      authorTitle: "Senior Health Specialist",
      authorImage: "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip",
      content: "Maintaining a healthy lifestyle is crucial for long-term well-being. Here are 5 essential tips from our doctors to help you stay active, eat well, and keep stress at bay...",
      date: new Date("2024-11-01"),
      image: "https://wps03-media.cdn.ihealthspot.com/wp-content/uploads/sites/13/2024/01/iStock-1461330630-2.jpg",
      tags: ["Health", "Lifestyle", "Well-being"],
      totalLike: 5,
      totalComment: 7
    },
    {
      title: "Understanding the Importance of Annual Health Screenings",
      author: "Dr. Mark Collins",
      authorTitle: "Preventive Medicine Specialist",
      authorImage: "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip",
      content: "Annual health screenings can detect health issues early, making them easier to treat. Learn about the benefits of regular check-ups and the types of screenings available...",
      date: new Date("2024-10-28"),
      image: "https://wps03-media.cdn.ihealthspot.com/wp-content/uploads/sites/13/2024/01/iStock-1461330630-2.jpg",
      tags: ["Health Screenings", "Prevention", "Wellness"],
      totalLike: 2,
      totalComment: 3
    },
    {
      title: "Managing Chronic Pain: Options and Resources",
      author: "Dr. Emily Foster",
      authorTitle: "Pain Management Specialist",
      authorImage: "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip",
      content: "Chronic pain can impact your quality of life. Our experts discuss different pain management strategies and resources that can help you manage pain effectively...",
      date: new Date("2024-10-15"),
      image: "https://wps03-media.cdn.ihealthspot.com/wp-content/uploads/sites/13/2024/01/iStock-1461330630-2.jpg",
      tags: ["Chronic Pain", "Pain Management", "Well-being"],
      totalLike: 1,
      totalComment: 9
    },
    {
      title: "Nutrition Essentials for Recovery after Surgery",
      author: "Dr. Alex Wright",
      authorTitle: "Nutrition Specialist",
      authorImage: "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip",
      content: "Proper nutrition can play a significant role in recovery post-surgery. Discover essential nutrients and dietary tips to support your healing process...",
      date: new Date("2024-10-10"),
      image: "https://wps03-media.cdn.ihealthspot.com/wp-content/uploads/sites/13/2024/01/iStock-1461330630-2.jpg",
      tags: ["Nutrition", "Recovery", "Surgery"],
      totalLike: 10,
      totalComment: 11
    },
    {
      title: "Mental Health Awareness: Breaking the Stigma",
      author: "Dr. Sophia Lee",
      authorTitle: "Mental Health Specialist",
      authorImage: "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip",
      content: "Mental health is as important as physical health. In this article, we discuss the importance of mental health awareness, signs to look out for, and how to seek help...",
      date: new Date("2024-09-20"),
      image: "https://wps03-media.cdn.ihealthspot.com/wp-content/uploads/sites/13/2024/01/iStock-1461330630-2.jpg",
      tags: ["Mental Health", "Awareness", "Well-being"],
      totalLike: 6,
      totalComment: 7
    }
  ]
  
  return (
    <div className="w-full">
      <div className="border-b shadow">
        <h1 className="primary-container mx-auto text-4xl font-semibold p-5 text-gray-900">Health and wellness blog</h1>
      </div>

      <div className="mt-10">
        <BlogSearch />
      </div>

      <div className="primary-container mx-auto py-10 grid sm:grid-cols-2 md:grid-cols-3 justify-between gap-5 p-5 rounded-5">
        {blogPost.map((post, index) => (
          <BlogCard key={index} author={post.author} title={post.title} content={post.content} image={post.image} tags={post.tags} date={post.date} totalLike={post.totalLike} totalComment={post.totalComment} authorImage={post.authorImage} authorTItle={post.authorTitle} />
        ))}
      </div>
    </div>
  )
}

export default page
