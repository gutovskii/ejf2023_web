import { manrope, unbounded } from '@/app/fonts';
import Image from 'next/image';
import { useStore } from '../Partners/store';
import './BlogItem.scss';
import { blogItemsConfig } from './blog-items.config';

interface BlogItemProps {
  blogItemId: string;
}

export default function BlogItem({ blogItemId }: BlogItemProps) {
  const [state, actions] = useStore();

  return (
    <div
      onClick={() => actions.chooseBlogItem(blogItemId)}
      className="blog-item w-[100%] sm:w-[100%] md:w-[50%] lg:w-[50%] p-1"
    >
      <div className="flex justify-between gap-3 items-center h-[100%] w-[100%] border rounded-[25px] p-5 cursor-pointer">
        <div>
          <h4 className={`${unbounded.className} font-bold text-[36px]`}>
            {blogItemsConfig[blogItemId].title}
          </h4>
          <p className={`${manrope.className} text-[16px]`}>
            {blogItemsConfig[blogItemId].description}
          </p>
        </div>
        <div>
          <Image
            src={blogItemsConfig[blogItemId].logoSrc}
            alt={blogItemsConfig[blogItemId].title}
            width={130}
            height={50}
          />
        </div>
      </div>
    </div>
  );
}
