/**
 * Copyright (c) 2025 miwa
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

export default function Links(props: {
	selected: "home" | "about" | "reports" | "misc";
}) {
	return (
		<nav>
			<ul>
				<li class={props.selected === "home" ? "selected" : ""}>
					<a href="/">home</a>
				</li>{" "}
				<li class={props.selected === "about" ? "selected" : ""}>
					<a href="/about">about</a>
				</li>
				<li class={props.selected === "reports" ? "selected" : ""}>
					<a href="/reports">reports</a>
				</li>
				{/* <li class={props.selected === "misc" ? "selected" : ""}> */}
				{/*   <a href="/misc">misc</a> */}
				{/* </li> */}
			</ul>
		</nav>
	);
}
