#!/usr/bin/env node

import { startGame } from '..';
import { quest, generateQA } from '../games/calc';

startGame(quest, generateQA);
