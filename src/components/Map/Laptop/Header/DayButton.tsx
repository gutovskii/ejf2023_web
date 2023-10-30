import { useStore } from '@/components/Partners/store';
import { Variants, motion } from 'framer-motion';
import './DayButton.scss';
import { unbounded } from '@/app/fonts';
interface DayButtonProps {
  dayNum: number;
}

const DayButton: React.FC<DayButtonProps> = ({ dayNum }) => {
  const [state, actions] = useStore();

  const dayBtnVariants: Variants = {
    hover: {
      backgroundColor: '#004CFF',
      scale: 1.03,
      transition: {
        duration: 0.15,
      },
    },
    tap: {
      backgroundColor: '#001CE3',
      scale: 0.98,
      transition: {
        duration: 0.15,
      },
    },
    focus: {
      backgroundColor: '#001CD9',
      border: '2px solid #FFF',
      scale: 1.03,
      fontWeight: 600,
      transition: {
        duration: 0.15,
      },
    },
  };

  return (
    <motion.div
      className={`${unbounded.className} daybtn`}
      variants={dayBtnVariants}
      animate={state.day === dayNum ? 'focus' : ''}
      whileHover={'hover'}
      whileFocus={'focus'}
      whileTap={'tap'}
      onClick={() => actions.changeDay(dayNum)}
    >
      <p className="daybtn-text">{dayNum} день</p>
    </motion.div>
  );
};

export default DayButton;
