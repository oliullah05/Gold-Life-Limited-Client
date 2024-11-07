export interface TBlog {
    id: string;
    title: string;
    author: string;
    authorImage: string;
    authorTItle: string;
    content: string;
    date: Date;
    image: string;
    tags: string[];
    totalLike: number;
    totalComment: number
}