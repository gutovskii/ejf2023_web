import { unbounded } from '@/app/fonts';

export interface StandProps {
  text: string;
  size: 'sm' | 'lg';
  device: 'laptop' | 'mobile';
  rotate: '0' | '90' | '-90';
  isActive: boolean;
}

const Stand: React.FC<StandProps> = ({ text, size, device, rotate, isActive }) => {
  const getHeight = () => {
    let height = '40px';
    if (size === 'sm' && device === 'laptop') {
      return '40px';
    } else if (size === 'sm' && device === 'mobile') {
      return '20px';
    } else if (size === 'lg' && device === 'laptop') {
      return '40px';
    } else if (size === 'lg' && device === 'mobile') {
      return '20px';
    }
    return height;
  };
  const getWidth = () => {
    let width = '80px';
    if (size === 'sm' && device === 'laptop') {
      return '80px';
    } else if (size === 'sm' && device === 'mobile') {
      return '45px';
    } else if (size === 'lg' && device === 'laptop') {
      return '110px';
    } else if (size === 'lg' && device === 'mobile') {
      return '65px';
    }
    return width;
  };
  const getBorder = () => {
    let border = '1px solid #000';
    if (isActive && device === 'laptop') {
      return '5px solid #FF104B';
    } else if (isActive && device === 'mobile') {
      return '3px solid #FF104B';
    }
    return border;
  };
  return (
    <div
      className={`${unbounded.className}`}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: getBorder(),
        borderRadius: device === 'laptop' ? '5px' : '3px',
        fontSize: device === 'laptop' ? '14px' : '7px',
        background: size === 'sm' ? '#0019FF' : '#21AFFF',
        transform: `rotate(${rotate}deg)`,
        height: getHeight(),
        width: getWidth(),
        textShadow: isActive ? '0px 0px 15px #E8D5E2' : '',
        lineHeight: '7.5px',
      }}
    >
      {text}
    </div>
  );
};

export default Stand;
