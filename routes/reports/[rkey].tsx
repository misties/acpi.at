/**
 * Copyright (c) 2025 favewa
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { PageProps } from "fresh";
import { getCachedReports } from "@/utils/atproto.ts";
import Empty from "@/components/Empty.tsx";
import "@/assets/report.css";

export default function PostPage(props: PageProps) {
	const { rkey } = props.params;
	const post = getCachedReports().find((rep) =>
		rep.rkey === rkey.toLowerCase()
	);

	if (!post) {
		return <Empty path={`/reports/${rkey}`} />;
	}

	return (
		<>
			<a href="/reports">← exit this report</a>

			<article>
				<header>
					<div class="meta">
						<time datetime={post?.createdAt}>{post?.createdAt}</time>
					</div>
					<h1>{post.title}</h1>
					{post.tags && (
						<div class="tags">
							{post.tags.map((tag) => <span key={tag} class="tag">{tag}</span>)}
						</div>
					)}
				</header>
				<div
					class="content typewriting"
					dangerouslySetInnerHTML={{ __html: post.content }}
				/>
				<footer>
					<a href="/">
						← You reached the end of the page. It is now safe to turn off your
						computer.
					</a>
				</footer>
			</article>
		</>
	);
}
