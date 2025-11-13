/**
 * Copyright (c) 2025 miwa
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { define } from "@/utils/index.ts";

export default define.page(function App({ Component }) {
	return (
		<html>
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" type="image/png" href="/favicon.png" />
				<meta property="og:site_name" content="acpi.at" />
				<meta property="og:type" content="profile" />
				<meta
					property="og:description"
					content="one of the girls of all time"
				/>
				<meta property="og:image" content="https://acpi.at/bnuy.webp" />
				<meta property="og:title" content="random corner" />
				<meta name="theme-color" content="#a0bdfc" />
				<title>acpi.at</title>
			</head>
			<body>
				<Component />
			</body>
		</html>
	);
});
