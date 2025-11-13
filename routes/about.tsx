/**
 * Copyright (c) 2025 miwa
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { Fm } from "@/components/Fm.tsx";
import { Header } from "@/components/Header.tsx";
import Links from "@/components/Links.tsx";
import ProjectCard from "@/components/ProjectCard.tsx";
import Code from "@/islands/Code.tsx";
import Meow from "@/islands/Meow.tsx";
import "@/assets/home.css";
import Footer from "../components/Footer.tsx";

export default function About() {
	return (
		<>
			<Links selected="about" />
			<section id="about">
				<h2>About</h2>
				<p>
					I'm an aspiring electrical engineer with a keen interest in open
					access to information and knowledge. My technical work centers on
					functional programming, C99, and writing quirky TypeScript code that
					explores its more obscure corners and unconventional patterns. I'm
					drawn to atypical low-level technologies and have a particular
					interest in the x86 and RISC-V ISAs.
				</p>
				<p>
					<i>In a more personal tone...</i>{" "}
					Hewwo! I'm Lívia, a 18-year-old girl from Brazil passionate about open
					access to information, technology, linguistics, functional
					programming, and pretty much anything that involves understanding
					technology, human language, or philosophical frameworks. I hope you
					find something interesting here, and don't hesitate to reach out if
					you feel like it. <span class="highlight">:3</span>
				</p>
				<p>
					When I'm not studying circuits or coding, it's likely that I'm either
					exploring linguistics or listening to music. My tastes shift
					constantly with my hyperfocus, ranging from indie, shoegaze, and J-Pop
					to speedcore and various metal derivatives. I run a FreeBSD server
					that hosts this site and various services, serving as my hands-on lab
					for systems administration. <span class="highlight">^-^</span>
				</p>
				<p>
					Beyond quirky technology, I <i>really</i>{" "}
					like linguistics and philosophy enthusiast. I'm also autistic n' ADHD,
					so I might struggle with humour once in a while. I really like
					befriending new people and growing as a person every single day!!! If
					you've read this far, thanks for stopping by!{" "}
				</p>
			</section>
			<section id="languages">
				<h2>languages</h2>
				<ul style="text-align-last: left">
					<li>
						brazilian portuguese <span class="highlight">(native)</span>
					</li>
					<li>
						«all over the place» english <span class="highlight">(C1)</span>
					</li>
					<li>
						latin american spanish <span class="highlight">(A2)</span>
					</li>
				</ul>
			</section>
			<section id="trivia">
				<h2>trivia</h2>
				<ul>
					<li>there are no easter eggs up here. go away</li>
				</ul>
			</section>
			<Footer />
		</>
	);
}
