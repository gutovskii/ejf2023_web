import { useStore } from '../Partners/store';
import { blogItemsConfig } from './blog-items.config';

export default function BlogText() {
  const [state, actions] = useStore();

  return (
    <div
      className="lg:p-11 md:p-8 sm:p-3 p-5"
      dangerouslySetInnerHTML={{ __html: blogItemsConfig[state.currentBlogItemId].textHtml }}
    ></div>
  );
}
