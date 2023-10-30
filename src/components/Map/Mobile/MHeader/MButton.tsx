import { unbounded } from '@/app/fonts';
import { State, useStore } from '@/components/Partners/store';
import { motion, Variants } from 'framer-motion';
import './MButton.scss';

interface MButtonProps {
  num: number;
  onClick: () => void;
  stateProp: keyof State;
}

const MButton: React.FC<MButtonProps> = ({ num, onClick, stateProp }) => {
  const [state] = useStore();

  const mbuttonVariants: Variants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.15,
      },
    },
    tap: {
      backgroundColor: '#000',
      scale: 0.95,
      transition: {
        duration: 0.15,
      },
    },
    focus: {
      backgroundColor: '#001CBA',
      border: '2px solid #FFF',
      fontWeight: 700,
      scale: 0.95,
      transition: {
        duration: 0.15,
      },
    },
  };

  return (
    <motion.button
      className={`${unbounded.className} mbutton`}
      variants={mbuttonVariants}
      animate={state[stateProp] === num ? 'focus' : ''}
      whileHover={'hover'}
      whileFocus={'focus'}
      whileTap={'tap'}
      onClick={() => onClick()}
    >
      {num} день
    </motion.button>
  );
};

export default MButton;
