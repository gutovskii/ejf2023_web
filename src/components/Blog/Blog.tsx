'use client';
import { unbounded } from '@/app/fonts';
import BlogItem from './BlogItem';
import BlogText from './BlogText';
import { blogItemsConfig } from './blog-items.config';
import './blogs/blog-style.scss';

export default function Blog() {
  return (
    <div>
      <div className="flex text-center flex-col px-[35px] pb-4 mb-5">
        <div>
          <h2 className={`${unbounded.className} text-[50px] uppercase font-black`}>Блог</h2>
        </div>
      </div>
      <div className="flex w-[100%] flex-wrap">
        {Object.keys(blogItemsConfig).map((key) => (
          <BlogItem blogItemId={key} key={key} />
        ))}
      </div>
      <div className="">
        <BlogText />
      </div>
    </div>
  );
}
