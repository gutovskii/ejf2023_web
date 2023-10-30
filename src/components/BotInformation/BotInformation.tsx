import { manrope, unbounded } from '@/app/fonts';
import Image from 'next/image';
import RobotSVG from '../../../public/images/bot.svg';
import LinkBtn from '../LinkBtn';

export default function BotInformation() {
  const our = 'НАШ';
  const bot = 'БОТ';
  const firstPart =
    ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';
  const secondPart =
    '  Duis aute    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.';
  return (
    <div
      className="bg-black text-white border-white border-[1.5px] rounded-3xl
          mt-4 mx-[3%] relative"
    >
      <div className="space-y-6 xl:space-y-12 xl:p-16 lg:p-12 md:py-12 py-8 px-5 xl:max-w-[50%]">
        <div className="grid">
          <span
            className={`${unbounded.className} text-[25px] font-[250px] 
                  md:text-[28px]  lg:text-[40px] xl:text-[40px] xl:font-normal leading-none`}
          >
            {our}
          </span>
          <span
            className={`${unbounded.className} font-black text-[50px] lg:text-[82px] md:text-[56px] xl:text-[96px] xl:font-black leading-none`}
          >
            {bot}
          </span>
        </div>
        <p
          className={`${manrope.className} text-[15px] hidden xl:block min-h-[165px] xl:text-[18px] xl:font-medium max-w-[50%] xl:min-w-[700px]`}
        >
          {firstPart}
          {secondPart}
        </p>
        <div
          className={`${manrope.className} xl:hidden block text-[14px] md:text-[14px] lg:text-[18px] max-w-[90%] md:max-w-[60%]`}
        >
          <p>{firstPart}</p>
          <br />
          <p className="max-w-[50%]">{secondPart}</p>
        </div>

        <LinkBtn text="Перейти" href="https://neal.fun/asteroid-launcher" />

        <div className="flex justify-center items-center absolute bottom-0 right-0">
          <Image
            className="max-w-[230px] max-h-[175px] md:max-w-[400px] md:max-h-[300px] lg:max-w-[500px] lg:max-h-[400px] xl:max-w-[750px] xl:max-h-[600px]"
            src={RobotSVG}
            alt="robot"
          />
        </div>
      </div>
    </div>
  );
}
