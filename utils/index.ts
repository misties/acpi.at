/**
 * Copyright (c) 2025 favewa
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { createDefine } from "fresh";

export type State = Record<PropertyKey, never>;

export const define = createDefine<State>();
