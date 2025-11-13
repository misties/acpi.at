/**
 * Copyright (c) 2025 miwa
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

#!/usr/bin/env -S deno run --allow-net --allow-write
/**
 * Copyright (c) 2025 miwa
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { getPosts, type Report } from "../utils/atproto.ts";

function escapeXml(unsafe: string): string {
	return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");
}

function stripHtml(html: string): string {
	return html
		.replace(/<[^>]+>/g, " ")
		.replace(/\s+/g, " ")
		.trim();
}

function generateRSSItem(report: Report): string {
	const link = `https://acpi.at/reports/${report.rkey}`;
	const description = report.excerpt ||
		stripHtml(report.content).substring(0, 200);

	return [
		`    <item>`,
		`      <title>${escapeXml(report.title)}</title>`,
		`      <link>${link}</link>`,
		`      <guid>${link}</guid>`,
		`      <pubDate>${report.date.toUTCString()}</pubDate>`,
		`      <description>${escapeXml(description)}</description>`,
		`    </item>`,
	].join("\n");
}

async function generateRSS() {
	const reports = await getPosts();
	const items = reports.map(generateRSSItem);
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<rss version="2.0">`,
		`  <channel>`,
		`    <title>$reports - acpi.at</title>`,
		`    <link>https://acpi.at/reports</link>`,
		`    <description>thoughts, ramblings, and occasional coherence</description>`,
		items.join("\n"),
		`  </channel>`,
		`</rss>`,
	].join("\n");
	await Deno.writeTextFile("./static/rss.xml", xml);
	console.log("done");
}

if (import.meta.main) {
	await generateRSS();
}
