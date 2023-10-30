import { unbounded } from '@/app/fonts';
import { useStore } from '@/components/Partners/store';
import MButton from './MButton';
import './MHeader.scss';
import MMap from './MMap';

const MHeader: React.FC = () => {
  const [, actions] = useStore();

  return (
    <div className="mheader">
      <h4 className={`${unbounded.className} mheader-map`}>Карта Ярмарку</h4>
      <div className="mheader-btns">
        <div className="mheader-btns-items">
          {[1, 2].map((num, i) => (
            <MButton num={num} onClick={() => actions.changeDay(num)} stateProp="day" key={i} />
          ))}
        </div>
      </div>
      <MMap />
    </div>
  );
};

export default MHeader;
