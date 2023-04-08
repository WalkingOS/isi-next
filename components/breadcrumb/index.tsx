"use client";

import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import link from "next/link";

interface breadLink {
	label: string;
	href: string;
}

export const Breadcrumb = ({
	links,
	children,
	className = "",
}: {
	links?: breadLink[];
	children: JSX.Element;
	className?: string;
}) => {
	return (
		<Breadcrumbs
			className={className}
			aria-label="breadcrumb"
			separator={<NavigateNextIcon fontSize="small" />}
		>
			<Link className="hover:text-isi" href="/">
				Start
			</Link>
			{links && links[0] && (
				<Link className="hover:text-isi" href={links[0].href}>
					{links[0].label}
				</Link>
			)}
			<span className="font-bold">{children}</span>
		</Breadcrumbs>
	);
};
