/**
 * Copyright (c) 2025 miwa
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

export interface ReadingTimeOptions {
	wordsPerMinute?: number;
	imageTime?: number;
	codeBlockTime?: number;
	chineseKoreanReadingSpeed?: number;
}

export interface ReadingTimeResult {
	minutes: number;
	words: number;
	images: number;
	codeBlocks: number;
}

export function formatReadingTime(input: ReadingTimeResult) {
	return `${input.words} words · ${
		input.images ? `${input.images} images · ` : ""
	}${
		input.codeBlocks ? `${input.codeBlocks} code blocks · ` : ""
	}${input.minutes} minutes`;
}

export function calculateReadingTime(
	input: string,
	options: ReadingTimeOptions = {},
): ReadingTimeResult {
	const {
		wordsPerMinute = 200,
		imageTime = 12,
		codeBlockTime = 15,
		chineseKoreanReadingSpeed = 260,
	} = options;

	let images = 0, preBlocks = 0, codeBlocks = 0;

	const text = input
		.replace(/<img[^>]*>/gi, () => (images++, ""))
		.replace(/<pre[^>]*>[\s\S]*?<\/pre>/gi, () => (preBlocks++, ""))
		.replace(/<code[^>]*>[\s\S]*?<\/code>/gi, () => (codeBlocks++, ""));

	const cjkRegex = /[\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]/g;
	const cjkMatches = text.match(cjkRegex);
	const cjkCharacters = cjkMatches?.length ?? 0;

	const textWithoutCJK = cjkCharacters ? text.replace(cjkRegex, " ") : text;
	const words = textWithoutCJK.trim().split(/\s+/).reduce(
		(n, w) => n + (w && /\w/.test(w) ? 1 : 0),
		0,
	);

	const totalMinutes = Math.ceil(
		words / wordsPerMinute +
			cjkCharacters / chineseKoreanReadingSpeed +
			(images * imageTime + (preBlocks + codeBlocks) * codeBlockTime) / 60,
	);

	return {
		minutes: Math.max(totalMinutes || 2, 2),
		words: words + cjkCharacters,
		images,
		codeBlocks: preBlocks + codeBlocks,
	};
}
