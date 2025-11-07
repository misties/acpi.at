/**
 * Copyright (c) 2025 favewa
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

export default function Meow() {
	return (
		<button
			type="button"
			id="muxiepuff"
			onClick={() =>
				navigator.clipboard.writeText(
					'<a href="https://acpi.at"><img src="https://acpi.at/88x31.gif" title="favewa" alt="acpi.at" /></a>',
				)}
		>
			<img
				src="/88x31.gif"
				title="favewa (Click to copy to clipboard!)"
				alt="acpi.at"
			/>
		</button>
	);
}
