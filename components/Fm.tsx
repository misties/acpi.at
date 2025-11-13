/**
 * Copyright (c) 2025 miwa
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
							<a href={track.url}>
								<img
									class="cover"
									src={track.cover ||
										"https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png"}
									alt=""
								/>

								<div class="meta">
									<strong class="title">{track.name}</strong>
									<span>{track.artist}</span>
									{track.playing
										? (
											<span class="loved" title="Now playing">
												▷
											</span>
										)
										: (
											track.loved && (
												<span class="loved" title="Loved">
													❤
												</span>
											)
										)}
								</div>
							</a>
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
