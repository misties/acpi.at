/**
 * Copyright (c) 2025 favewa
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { Fm } from "@/components/Fm.tsx";
import { Header } from "@/components/Header.tsx";
import Links from "@/components/Links.tsx";
import ProjectCard from "@/components/ProjectCard.tsx";
import Code from "@/islands/Code.tsx";
import Meow from "@/islands/Meow.tsx";
import "@/assets/home.css";

export default function Home() {
	return (
		<>
			<Links selected="home" />
			<Header class="home" />
			<section id="about">
				<h2>About</h2>
				<p>
					Advocate for open access to information and knowledge and aspiring
					electrical engineer with complementary interests in systems
					programming and linguistics.
				</p>
				<p>
					On the side, I maintain a modest FreeBSD server where I self-host this
					website and various services. This is nothing particularly impressive,
					just a growing curiosity about systems administration.
				</p>
			</section>
			<section id="links">
				<h2>Links</h2>
				<p>
					Feel free to reach out through any of the platforms listed above. For
					email correspondence, you can reach me at{" "}
					<Code>base64 -d &lt;&lt;&lt; bXV4QGFjcGkuYXQK</Code>.
				</p>
				<p>
					Psst! When discussing sensitive matters over email or other insecure
					communication channels, I'd really appreciate it if you could encrypt
					your message with my <a href="/pgp-key.asc">PGP key</a> (fingerprint:
					{" "}
					<Code>AC14 9A39 5013 C572 CA74 8799 BCD2 117C 99E6 9817</Code>).
				</p>
				<div class="griddy">
					<div class="column">
						<h3>Social</h3>
						<ul>
							<li>
								<a title="Bluesky" href="https://bsky.app/profile/acpi.at">
									at://acpi.at
								</a>
							</li>
							<li>
								<a
									title="Discord"
									href="https://discord.com/users/797566974024351745"
								>
									@favewa on Discord
								</a>
							</li>
							<li>
								<a title="Telegram" href="https://t.me/favewa">
									@favewa on Telegram
								</a>
							</li>
						</ul>
					</div>
					<div class="column">
						<h3>Code</h3>
						<ul>
							<li>
								<a title="GitHub" href="https://github.com/misties">
									misties on GitHub
								</a>
							</li>
							<li>
								<a title="Forĝejo" href="https://git.acpi.at/w">
									kyu.re/~«repo»
								</a>
							</li>
							<li>
								<a title="Codeberg" href="https://codeberg.org/ex">
									ex on Codeberg
								</a>
							</li>
						</ul>
					</div>
					<div class="column">
						<h3>Services</h3>
						<ul>
							<li>sowwy, none for now~ :&lt;</li>
						</ul>
					</div>
				</div>
			</section>
			<section id="projects">
				<h2>Projects</h2>
				<ul>
					<li>
						<ProjectCard
							author="favewa"
							name="cobweb"
							description="a lightweight, tiny web framework for deno tailored for dynamic no-js applications"
							url="http://github.com/misties/cobweb"
							languageColor="#3178c6"
							languageName="TypeScript"
							license="BSD-3-Clause"
						/>
					</li>
					<li>
						<ProjectCard
							author="w"
							name="acpi.at"
							description="personal website"
							url="http://kyu.re/~web"
							languageColor="#3178c6"
							languageName="TypeScript"
							license="AGPL-3.0-or-later"
						/>
					</li>
					<li>
						<ProjectCard
							author="w"
							name="wildcat"
							description="lightweight, minimal, crossplatform, and straightforward opengl-based rendering and windowing libraries"
							url="http://kyu.re/~wildcat"
							languageColor="#555"
							languageName="C"
							license="BSD-3-Clause"
						/>
					</li>
				</ul>
			</section>
			<Fm />
			<section id="donation">
				<h2>Piggy bank</h2>
				<p>
					If you enjoy throwing money at people on the internet, please consider
					me! It keeps the server alive, fuels my tinkering with esoteric
					technology, and helps me navigate some rough financial patches and
					stay afloat while things are tight.
				</p>
				<div class="silly-table">
					<div class="row">
						<span class="key">WEB</span>
						<code class="value">
							<a href="https://ko-fi.com/west">west@ko-fi</a>
							<a href="https://github.com/sponsors/misties">misties@github</a>
						</code>
					</div>
					<div class="row">
						<span class="key">XMR</span>
						<code class="value">
							456tmp4CU158sV95Pjh75QfMcANNsRCFTdpmc86G31eKg9urvcYunnuBVyUmazAbuihUXwRDVojkhFTbzg6X2GuAJ7t3MCT
						</code>
					</div>
					<div class="row">
						<span class="key">LTC</span>
						<code class="value">
							ltc1ql30jtr2r0pkr0wshspf465rdupvlpmwacql7wp
						</code>
					</div>
					<div class="row">
						<span class="key">BTC</span>
						<code class="value">
							bc1qj3l6cpxz604vlfz5zqlnhzr7g0aq7xlslnmzcm
						</code>
					</div>
					<div class="row">
						<span class="key">BCH</span>
						<code class="value">
							bitcoincash:qrs8y70dwzvz2kvxnv30c9k4pxa0vatzvudle5aaa3
						</code>
					</div>
					<div class="row">
						<span class="key">XNO</span>
						<code class="value">
							nano_1qbbwrzxnutw53kuykdo6zcwteawf3befpbf95zrz66b33yxpz5ans6wrw4w
						</code>
					</div>
					<div class="row">
						<span class="key">ETH</span>
						<code class="value">
							0x9bb671035Dde19C674769592AbC20E63f36b5Aa9
						</code>
					</div>
				</div>
			</section>
			<section id="friends">
				<h2>Friends</h2>
				<p>
					Precious friendships; from the bottom of my heart, I am genuinely
					grateful for their existence~
				</p>
				<div class="buttons">
					<Meow />
					<a href="https://worf.win">
						<img src="https://worf.win/images/worfwin.gif" alt="worf" />
					</a>
					<a href="https://codeberg.org/paige">
						<img src="/88x31/paige.gif" alt="paige" />
					</a>
					<a href="https://mugman.tech">
						<img src="https://mugman.tech/88x31/me.gif" alt="mugman" />
					</a>
					<a href="https://f.dog">
						<img src="https://x86.pet/~strawberry/june_88x31.png" alt="june" />
					</a>
					<a
						rel="noopener"
						referrerpolicy="strict-origin"
						href="https://rushii.dev"
					>
						<img
							src="https://rushii.dev/88x31/rushii.webp"
							alt="rushii's site"
						/>
					</a>
					<a href="https://www.juwuba.xyz">
						<img src="https://www.juwuba.xyz/88x31.gif" alt="Júlia" />
					</a>
					<a href="https://katelyn.moe/">
						<img src="https://katelyn.moe/8831.png" alt="katelyn" />
					</a>
					<a href="https://meow-d.github.io">
						<img src="/88x31/meow_d.webp" alt="meow_d" />
					</a>
					<a href="https://caitlyn.moe">
						<img src="https://caitlyn.moe/88x31.png" alt="caitlyn" />
					</a>
				</div>
				<div class="pfps">
					<a title="12 reais" href="https://github.com/nightdavisao">
						<img src="https://github.com/nightdavisao.png" alt="Nightdavisao" />
					</a>
					<a title="emily" href="https://implied.win">
						<img src="https://github.com/impliedgg.png" alt="emily" />
					</a>
					<a title="bem pelada" href="https://codeberg.org/paige">
						<img src="https://codeberg.org/paige.png" alt="bem pelada" />
					</a>
				</div>
			</section>
		</>
	);
}
