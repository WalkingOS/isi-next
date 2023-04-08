"use client"

import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Link from 'next/link';

interface PriceProps {
  heading: string;
  price: number;
  services: string[];
  termin?: string;
}

export const PriceCard = ({heading, price, services, termin}: PriceProps) => {
	return (
		<div className="flex relative flex-col justify-between h-min-8 h-full bg-[#f6f6f6] p-4 relative rounded-xl shadow-lg  object-center overflow-hidden">
			<div>
				<h4 className="text-center mb-2 font-bold text-isi">{heading}</h4>
				<hr className="m-2"></hr>
				<p className="text-center font-bold">{price} €</p>
				<hr className="m-2"></hr>
				{!!services && (
					<ul>
						{services.map((service) => {
							return (
								<>
									<li>
                    <TaskAltIcon className="text-isi pr-2" />{service}
									</li>
								</>
							);
						})}
					</ul>
				)}
			</div>
			{termin ? (
				<Link
					href={termin}
					className=" text-white text-center py-3 mt-4 block font-bold py-3text-center bg-isi rounded-xl shadow-lg hover:shadow-xl ease-in-out duration-300 overflow-hidden hover:scale-[1.01] active:scale-[1]"
				>
					Online Termin buchem
				</Link>
			) : (
				<Link
					href="/kontakt"
					className=" text-white text-center py-3 mt-4 block font-bold py-3text-center bg-isi rounded-xl shadow-lg hover:shadow-xl ease-in-out duration-300 overflow-hidden hover:scale-[1.01] active:scale-[1]"
				>
					Termin via Anruf
				</Link>
			)}
		</div>
	);
};
