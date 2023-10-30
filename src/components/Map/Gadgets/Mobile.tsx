import MHeader from '../Mobile/MHeader/MHeader';
import MTimetable from '../Mobile/MTimetable/MTimetable';

const Mobile: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: '100px auto 0',
        padding: '0 20px',
        maxWidth: '450px',
      }}
    >
      <MHeader />
      <MTimetable />
    </div>
  );
};

export default Mobile;
