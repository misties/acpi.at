/**
 * Copyright (c) 2025 favewa
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { Report } from "../utils/atproto.ts";

export interface ReportsProps {
	reports: Report[];
}

export default function Reports({ reports }: ReportsProps) {
	return (
		<>
			<header>
				<h1>$reports</h1>
				<h2>thoughts, ramblings, and occasional coherence</h2>
			</header>

			<ul class="reports">
				{reports.map((report) => (
					<li key={report.rkey}>
						<a href={`/reports/${report.rkey}`} class="report">
							<span class="date">{report.createdAt}</span>
							<h3>{report.title}</h3>
							<p class="excerpt">{report.excerpt}</p>
							{report.tags && (
								<div class="tags">
									{report.tags.map((tag) => (
										<span key={tag} class="tag">{tag}</span>
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
