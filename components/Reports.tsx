/**
 * Copyright (c) 2025 miwa
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { Report } from "../utils/atproto.ts";
import { formatReadingTime } from "../utils/blog.ts";

export interface ReportsProps {
	reports: Report[];
}

export default function Reports({ reports }: ReportsProps) {
	return (
		<>
			<header>
				<h1 id="reports-header">
					$reports
					<a href="/rss.xml" class="rss">
						[rss
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M4 11a9 9 0 0 1 9 9" />
							<path d="M4 4a16 16 0 0 1 16 16" />
							<circle cx="5" cy="19" r="1" />
						</svg>
						]
					</a>
				</h1>
				<h2>thoughts, ramblings, and occasional coherence</h2>
			</header>

			<ul class="reports">
				{reports.map((report) => (
					<li key={report.rkey}>
						<a href={`/reports/${report.rkey}`} class="report">
							<span class="date">
								{report.createdAt} · {formatReadingTime(report.readingTime)}
							</span>
							<h3>{report.title}</h3>
							<p class="excerpt">{report.excerpt}</p>
							{report.tags && (
								<div class="tags">
									{report.tags.map((tag) => (
										<span key={tag} class="tag">
											{tag}
										</span>
									))}
								</div>
							)}
							<span class="arrow">→</span>
						</a>
					</li>
				))}
			</ul>
		</>
	);
}
