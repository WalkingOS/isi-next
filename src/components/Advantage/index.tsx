
interface IAdvantage {
  title: string;
  subtitle: string;
  number:number;
}


export const Advantage = ({ title, subtitle, number }: IAdvantage) => (
  <div className="relative pt-[2em]">
    <span className="absolute font-bold text-[58px] text-isi top-[-8px] z-[-2]">{number}</span>
    <div className="bg-white">
      <h3 className="font-bold text-[16px]">{title}</h3>
      <p className="text-[14px]">{subtitle}</p>
    </div>
  </div>
);