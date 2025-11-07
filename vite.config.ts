/**
 * Copyright (c) 2025 favewa
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";

export default defineConfig({
	plugins: [fresh()],
});
