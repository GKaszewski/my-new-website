import React from "react";

interface Props {
	label: string;
}

export default function ChipComponent(props: Props) {
	return (
		<p className="text-base text-center rounded-2xl font-semibold tracking-tight text-black shadow-lg bg-yellow-400 p-2 min-w-[4rem]">
			{props.label}
		</p>
	);
}
