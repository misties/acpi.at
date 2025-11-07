/**
 * Copyright (c) 2025 favewa
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { LastClient } from "@musicorum/lastfm";
import { withInterval } from "./temp.ts";

interface Track {
	name: string;
	artist: string;
	loved: boolean;
	cover?: string;
}

const secret = Deno.env.get("FM_SECRET");
export let tracks: (() => Track[]) | undefined;

if (secret) {
	const client = new LastClient(secret);

	tracks = await withInterval(async () => {
		const { tracks: raw } = await client.user.getRecentTracks("favewa", {
			limit: 5,
			extended: true,
		});

		return raw?.filter((x) => !x.nowPlaying).map((track) => ({
			artist: track.artist.name,
			name: track.name,
			loved: "loved" in track ? track.loved as boolean : false,
			cover: track.images.pop()?.url,
		}));
	}, 60);
}
