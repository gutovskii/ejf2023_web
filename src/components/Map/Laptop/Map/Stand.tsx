import { unbounded } from '@/app/fonts';

export interface StandProps {
  text: string;
  size: 'sm' | 'lg';
  device: 'laptop' | 'mobile';
  rotate: '0' | '90' | '-90';
}

const Stand: React.FC<StandProps> = ({ text, size, device, rotate }) => {
  const getHeight = () => {
    let height = '40px';
    if (size === 'sm' && device === 'laptop') {
      return '50px';
    } else if (size === 'sm' && device === 'mobile') {
      return '20px';
    } else if (size === 'lg' && device === 'laptop') {
      return '50px';
    } else if (size === 'lg' && device === 'mobile') {
      return '20px';
    }
    return height;
  };
  const getWidth = () => {
    let width = '80px';
    if (size === 'sm' && device === 'laptop') {
      return '110px';
    } else if (size === 'sm' && device === 'mobile') {
      return '45px';
    } else if (size === 'lg' && device === 'laptop') {
      return '140px';
    } else if (size === 'lg' && device === 'mobile') {
      return '60px';
    }
    return width;
  };
  return (
    <div
      className={`${unbounded.className}`}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        border: '1px solid #000',
        borderRadius: device === 'laptop' ? '5px' : '3px',
        fontSize: device === 'laptop' ? '16px' : '7px',
        background: size === 'sm' ? '#0019FF' : '#21AFFF',
        transform: `rotate(${rotate}deg)`,
        height: getHeight(),
        width: getWidth(),
        lineHeight: device === 'laptop' ? '16.5px' : '7.5px',
      }}
    >
      {text}
    </div>
  );
};

export default Stand;
