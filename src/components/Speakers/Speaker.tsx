import { manrope, unbounded } from '@/app/fonts';
import Image from 'next/image';
import { SpeakerData } from './speakers.config';

export default function Speaker({ speaker }: { speaker: SpeakerData }) {
  return (
    <div className="flex flex-col items-center relative min-h-[425px] w-[250px] py-5">
      <div className="absolute bottom-0 w-[120%] h-[75%] bg-white rounded-3xl z-[1]"></div>
      <div className="relative flex flex-col items-center z-[2]">
        <div className="mb-5">
          <Image src={speaker.imgSrc} alt={speaker.name} width={200} height={200} />
        </div>
        <div
          className={`${manrope.className} absolute text-xs top-[50%] uppercase bg-black rounded-[30px] px-3 py-1`}
        >
          {speaker.position}
        </div>
        <div
          className={`${unbounded.className} text-[20px] font-black uppercase leading-[24px] text-center text-black mb-3`}
        >
          <p>{speaker.name.split(' ')[0]}</p>
          <p>{speaker.name.split(' ')[1]}</p>
        </div>
        <div className={`${manrope.className} flex flex-col gap-3`}>
          {speaker.characteristics.map((c) => (
            <div className="w-[100%] flex flex-row gap-2 items-center">
              <div className="w-[5%]">
                <div className="bg-[#888888] h-2 w-2 rounded-[30px]"></div>
              </div>
              <div className="w-[95%] text-[14px] text-gray-600">{c}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
