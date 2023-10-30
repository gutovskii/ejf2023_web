import { manrope, unbounded } from '@/app/fonts';
import Image from 'next/image';
import { SpeakerData } from './speakers.config';

export default function Speaker({ speaker }: { speaker: SpeakerData }) {
  return (
    <div className="flex flex-col items-center relative h-[100%] w-[250px] p-5">
      <div className="absolute bottom-0 w-[120%] h-[75%] bg-white rounded-3xl z-[1]"></div>
      <div className="flex flex-col items-center z-[2]">
        <div className="mb-5">
          <Image src={speaker.imgSrc} alt={speaker.name} width={200} height={200} />
        </div>
        <div
          className={`${unbounded.className} font-black uppercase text-[26px] text-center text-black mb-3 leading-8`}
        >
          {speaker.name}
        </div>
        <div
          className={`${manrope.className} font-bold uppercase text-[12px] p-3 text-white bg-black py-1 px-3 rounded-[100px]`}
        >
          {speaker.description}
        </div>
      </div>
    </div>
  );
}
