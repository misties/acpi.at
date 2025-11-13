/**
 * Copyright (c) 2025 miwa
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import Reports from "@/components/Reports.tsx";
import Links from "@/components/Links.tsx";
import { getCachedReports } from "@/utils/atproto.ts";
import "@/assets/report.css";
import { Head } from "fresh/runtime";

export default function Page() {
	return (
		<>
			<Head>
				<title>$reports - acpi.at</title>
				<meta
					name="description"
					content="Thoughts, ramblings, and occasional coherence. A collection of personal essays on stuff that randomly come across my mind."
				/>
				<meta
					name="keywords"
					content="personal blog, essays, mental health, philosophy, linguistics, life writing, reflections"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="$reports - acpi.at" />
				<meta
					name="og:description"
					content="Thoughts, ramblings, and occasional coherence. A collection of personal essays on stuff that randomly come across my mind."
				/>
				<meta
					name="twitter:description"
					content="Thoughts, ramblings, and occasional coherence. A collection of personal essays on stuff that randomly come across my mind."
				/>
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content="$reports - acpi.at" />
				<meta property="og:image" content="https://acpi.at/bnuy.webp" />
				<meta property="og:url" content="https://acpi.at/reports" />
				<meta property="og:locale" content="en_US" />
				<meta name="theme-color" content="#a0bdfc" />
				<meta
					name="theme-color"
					media="(prefers-color-scheme: dark)"
					content="#1a1a2e"
				/>
				<link rel="canonical" href="https://acpi.at/reports" />
				<meta name="robots" content="index, follow" />
				<link
					rel="alternate"
					type="application/rss+xml"
					title="acpi.at - $reports"
					href="https://acpi.at/rss.xml"
				/>
			</Head>
			<Links selected="reports" />
			<Reports reports={getCachedReports()} />
		</>
	);
}
