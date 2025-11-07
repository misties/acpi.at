/**
 * Copyright (c) 2025 favewa
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { Header } from "@/components/Header.tsx";
import Reports from "@/components/Reports.tsx";
import Links from "@/components/Links.tsx";
import { getCachedReports } from "@/utils/atproto.ts";

export default function Page() {
	return (
		<>
			<Links selected="reports" />
			<Reports reports={getCachedReports()} />
		</>
	);
}
