/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

import {Array1D, Array2D} from '../../ndarray';
import {KernelNode} from '../tape_types';

export interface OneHotNode extends KernelNode {
  inputAndArgs: {
    inputs: {indices: Array1D;};
    args: {depth: number; onValue: number; offValue: number};
  };
  output: Array2D;
  gradient: (dy: Array2D, y: Array2D) => {
    indices: () => Array1D;
  };
}
