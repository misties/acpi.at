/**
 * Copyright (c) 2025 miwa
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import Empty from "@/components/Empty.tsx";
import { HttpError, PageProps } from "fresh";

export default function Err(props: PageProps) {
	const error = props.error;
	if (error instanceof HttpError && error.status == 404) {
		return <Empty path={props.url.pathname} />;
	}
	return <h1>oopsie, uh oh</h1>;
}
