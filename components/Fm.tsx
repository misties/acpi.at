/**
 * Copyright (c) 2025 favewa
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { tracks } from "../utils/fm.ts";

export function Fm() {
	if (!tracks) return;

	const content = tracks().slice(0, 4);

	return (
		<>
			<section id="media">
				<h2>Recently listened</h2>
				<ul class="fm-recent-tracks">
					{content.map((track) => (
						<li class="fm-recent" key={track.artist + track.name}>
							{track.cover && <img class="cover" src={track.cover} alt="" />}

							<div class="meta">
								<strong class="title">{track.name}</strong>
								<span>{track.artist}</span>
								{track.loved && <span class="loved">❤</span>}
							</div>
						</li>
					))}
					<a class="fm-more" href="https://last.fm/user/favewa">
						Check out more on Last.fm
					</a>
				</ul>
			</section>
		</>
	);
}
