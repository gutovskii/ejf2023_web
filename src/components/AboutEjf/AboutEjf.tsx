import BotInformation from '../BotInformation';
import InfoBlock from '../InfoBlock';

export default function AboutEjf() {
  const aboutProject =
    'Це подія, яка відбуватиметься в університеті "Львівська Політехніка" та триватиме 2 дні. Безліч студентів, що зацікавлені у розвитку; стенди компаній, де представники можуть поділитися своїми знаннями та досвідом – це все знаходитиметься в одному місці. Активності, які ми пропонуємо, зроблять ваш досвід на Ярмарку незабутнім!';
  const aboutProjectTitle = 'ПРО ПРОЄКТ';

  const ejfGoal =
    'Надати можливість компаніям розповісти про себе та покращити впізнаваність свого бренду серед студентів, а також створити сприятливе середовище для знайомства та живої комунікації між лідерами ринку України та студентами, де вони зможуть реалізувати свій потенціал, обмінятися ідеями й вдосконалити свої навички у різних сферах.';
  const ejfGoalTitle = 'ЦІЛЬ';

  return (
    <div className="mb-8">
      <div className="grid lg:grid-cols-2 gap-4 mx-[3%]">
        <InfoBlock title={aboutProjectTitle} text={aboutProject} />
        <InfoBlock title={ejfGoalTitle} text={ejfGoal} />
      </div>
      <BotInformation />
    </div>
  );
}
