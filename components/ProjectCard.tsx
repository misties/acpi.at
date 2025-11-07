/**
 * Copyright (c) 2025 favewa
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

export interface ProjectCardProps {
	name: string;
	author: string;
	url: string;
	description: string;
	languageColor?: string;
	languageName?: string;
}

export default function ProjectCard({
	name,
	author,
	url,
	description,
	languageColor,
	languageName,
}: ProjectCardProps) {
	return (
		<a
			href={url}
			class="project-card"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span class="external-icon" aria-label="Open externally">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<title>Open Externally</title>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
					<path d="M11 13l9 -9" />
					<path d="M15 4h5v5" />
				</svg>
			</span>

			<div class="author">
				<strong>{author}</strong>/{name}
			</div>

			<p class="description">{description}</p>

			<div class="info">
				{languageColor && (
					<span
						class="language"
						style={{ "--lang-color": languageColor } as any}
					/>
				)}
				{languageName}
			</div>
		</a>
	);
}
