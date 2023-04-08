import Link from "next/link";
import type { Post } from "~/models/post";


const PostList = ({ services, serviceType }: { services: any[]; serviceType: "beauty" | "esthetics" | "hair" }) => (
			<>
				<ul>
					{services?.map((service: any) => {
						return (
							<li className="mb-6 last:mb-0" key={service.title}>
								<Link
									href={`/${serviceType}/${service.slug.current}`}
									className="bg-[#f6f6f6] p-4 relative block w-full min-h-[80px] rounded-xl shadow-lg hover:shadow-xl ease-in-out duration-300 object-center overflow-hidden hover:scale-[1.01]"
								>
									<div className="flex justify-between">
										<div className="">
											<h3 className="font-bold mb-2 text-isi-dark">{`${service.title}`}</h3>
											<p className="line-clamp-2">{`${service.description}`}</p>
										</div>
									</div>
								</Link>
							</li>
						);
					})}
				</ul>
			</>
);

export default PostList;
