/**
 * Copyright (c) 2025 miwa
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { App, staticFiles } from "fresh";
import { type State } from "./utils/index.ts";

export const app = new App<State>();

app.use(staticFiles());
app.fsRoutes();
