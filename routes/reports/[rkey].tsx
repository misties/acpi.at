/**
 * Copyright (c) 2025 miwa
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { PageProps } from "fresh";
import { getCachedReports } from "@/utils/atproto.ts";
import Empty from "@/components/Empty.tsx";
import "@/assets/report.css";
import { formatReadingTime } from "../../utils/blog.ts";
import { Head } from "fresh/runtime";

export default function PostPage(props: PageProps) {
	const { rkey } = props.params;
	const post = getCachedReports().find(
		(rep) => rep.rkey === rkey.toLowerCase(),
	);

	if (!post) {
		return <Empty path={`/reports/${rkey}`} />;
	}

	return (
		<>
			<Head>
				<title>{post.title} - acpi.at</title>
				<meta name="title" content={`${post.title} - acpi.at`} />
				<meta name="description" content={post.excerpt} />
				<meta name="author" content="acpi.at" />
				{post.tags && <meta name="keywords" content={post.tags.join(", ")} />}
				<meta name="theme-color" content="#a0bdfc" />
				<meta
					name="theme-color"
					media="(prefers-color-scheme: dark)"
					content="#1a1a2e"
				/>
				<meta property="og:type" content="article" />
				<link rel="canonical" href={`https://acpi.at/reports/${post.rkey}`} />
				<meta name="robots" content="index, follow" />
				<meta property="og:type" content="article" />
				<meta property="og:site_name" content="acpi.at" />
				<meta property="og:title" content={post.title} />
				<meta property="og:description" content={post.excerpt} />
				<meta property="og:image" content="" />
				<meta
					property="og:url"
					content={`https://acpi.at/reports/${post.rkey}`}
				/>
				<meta property="article:published_time" content={post.createdAt} />
				<meta property="article:author" content="acpi.at" />
				{post.tags &&
					post.tags.map((tag) => (
						<meta key={tag} property="article:tag" content={tag} />
					))}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content={post.title} />
				<meta name="twitter:description" content={post.excerpt} />
				<meta name="twitter:image" content="" />
			</Head>
			<a href="/reports">← exit this report</a>
			<br />
			<article>
				<header>
					<h1>{post.title}</h1>
					<div class="meta">
						<time datetime={post.createdAt}>{post.createdAt}</time> ·{" "}
						{formatReadingTime(post.readingTime)}
					</div>
					{post.tags && (
						<div class="tags">
							{post.tags.map((tag) => (
								<span key={tag} class="tag">
									{tag}
								</span>
							))}
						</div>
					)}
				</header>
				<div
					class="content typewriting"
					dangerouslySetInnerHTML={{ __html: post.content }}
				/>
			</article>
			<footer>
				<a href="/" style="color: var(--theme-foreground-alt)">
					← You reached the end of the page. It is now safe to turn off your
					computer.
				</a>
			</footer>
		</>
	);
}
