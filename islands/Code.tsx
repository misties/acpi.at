/**
 * Copyright (c) 2025 miwa
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { ComponentChildren } from "preact";

interface CodeProps {
	children: ComponentChildren;
	[key: string]: any;
}

export default function Code({ children, ...props }: CodeProps) {
	const handleClick = () => {
		const element = (children as any)?.props?.children[0];
		element && navigator.clipboard.writeText(element);
	};

	return (
		<button
			class="inline-code"
			onClick={handleClick}
			title="Click to copy"
			{...props}
		>
			<span>{children}</span>
		</button>
	);
}
