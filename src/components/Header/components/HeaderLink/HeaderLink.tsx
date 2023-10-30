import Image from 'next/image';
import Link from 'next/link';
import headerStyles from '../../Header.module.scss';

interface Props {
  href: string;
  text: string;
  isActive?: boolean;
}

interface MobileProps extends Props {
  iconSrc: string;
  iconAlt: string;
}

export function HeaderLink({ href, text, isActive = false }: Props) {
  return (
    <Link
      href={href}
      className={`${headerStyles.header_link} ${isActive ? headerStyles.header_link_active : ''}`}
    >
      {text}
    </Link>
  );
}

export function MobileHeaderLink({ href, text, isActive, iconSrc, iconAlt }: MobileProps) {
  return (
    <div
      className={`flex w-[100%] pl-[15px] pt-[13px] pb-[12px] items-center ${headerStyles.header_mobile_link_block}`}
    >
      <div className="w-[20%] flex justify-center">
        <Image
          src={iconSrc}
          alt={iconAlt}
          height={20}
          width={0}
          sizes="100vw"
          style={{ width: 'auto' }}
          className="mr-[10px]"
        />
      </div>
      <HeaderLink href={href} text={text} isActive={isActive} />
    </div>
  );
}
