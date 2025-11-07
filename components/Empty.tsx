/**
 * Copyright (c) 2025 favewa
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

export default function Empty({ path }: any) {
	return (
		<>
			<a href="/">← go back</a>
			<br /> <br />
			<div style={{ color: "var(--theme-foreground-alt)" }}>
				<span>
					at@localhost<strong></strong>:<strong>~/reports</strong>$ ls
				</span>
				<p>
					ls: cannot access <strong>'{path}'</strong>: No such file or directory
				</p>
			</div>
		</>
	);
}
