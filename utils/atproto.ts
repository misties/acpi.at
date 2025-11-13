/**
 * Copyright (c) 2025 miwa
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { calculateReadingTime, ReadingTimeResult } from "./blog.ts";
import { withInterval } from "./temp.ts";

export interface Report {
	rkey: string;
	cid: string;
	title: string;
	excerpt: string;
	content: string;
	createdAt: string;
	tags?: string[];
	visibility: string;
	readingTime: ReadingTimeResult;
	date: Date;
}

async function xrpc(
	method: string,
	params: Record<string, string>,
): Promise<any> {
	const url = new URL(`https://blacksky.app/xrpc/${method}`);

	Object.entries(params).forEach(([key, value]) => {
		url.searchParams.set(key, value);
	});

	const response = await fetch(url.toString());

	if (!response.ok) {
		throw new Error(`XRPC call failed: ${response.statusText}`);
	}

	return await response.json();
}

const rkey = (input: string) => input.slice(input.lastIndexOf("/") + 1 || 0);

export const getCachedReports: () => Report[] = await withInterval(
	getPosts,
	300,
);

export async function getPosts(cursor?: string): Promise<Report[]> {
	const params: Record<string, string> = {
		collection: "com.whtwnd.blog.entry",
		repo: "acpi.at",
	};
	if (cursor) params.cursor = cursor;

	const response = await xrpc("com.atproto.repo.listRecords", params);
	if (!response) return [];

	const reports = (response.records as Record<string, any>[]).map((
		{ cid, uri, value },
	) => ({
		...value,
		rkey: rkey(uri),
		date: new Date(value.createdAt),
		readingTime: value.content ? calculateReadingTime(value.content) : 1,
		createdAt: new Date(value.createdAt).toISOString().slice(0, 10).replace(
			/-/g,
			".",
		),
		cid,
	} as Report)).filter((r) => r.visibility === "author").sort((a, b) =>
		b.date as any - (a.date as any)
	);

	return reports;
}

export async function retrieveReport(rkey: string): Promise<Report | null> {
	const response = await xrpc("com.atproto.repo.getRecord", {
		collection: "com.whtwnd.blog.entry",
		repo: "acpi.at",
		rkey,
	});

	if (!response) return null;

	return {
		...response.value,
		readingTime: response.value.content
			? calculateReadingTime(response.value.content)
			: 1,
		cid: response.cid,
		rkey,
	} as Report;
}
