import { manrope, unbounded } from '@/app/fonts';

interface InfoBlockProps {
  title: string;
  text: string;
  dimensions?: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ title, text, dimensions }) => {
  return (
    <div className={`border rounded-3xl p-4 bg-ejfBlue text-white`}>
      <div className="mb-4 lg:mt-4 lg:mx-5 lg:mb-14">
        <div className="border-[1.5px] border-white rounded-2xl lg:rounded-3xl py-2 px-3 lg:px-7 lg:py-7  inline-block">
          <h2 className={`${unbounded.className} text-xl font-bold text-[20px] lg:text-[32.5px]`}>
            {title}
          </h2>
        </div>
        <p className={`${manrope.className} mt-6 font-light text-[14px] lg:text-[18px]`}>{text}</p>
      </div>
    </div>
  );
};

export default InfoBlock;
