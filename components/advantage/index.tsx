
interface IAdvantage {
  title: string;
  subtitle?: string;
  description: string;
  number?:number;
}


export const Advantage = ({ title, description, number }: IAdvantage) => (
  <div className="relative pt-[2em]">
    <div className="bg-white relative z-[2]">
      <h3 className="font-bold text-[16px]">{title}</h3>
      <p className="text-[14px]">{description}</p>
    </div>
    <span className="absolute font-bold text-[58px] text-isi top-[-18px] z-0">{number}</span>
  </div>
);
