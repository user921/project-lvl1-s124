#!/usr/bin/env node

import { startGame } from '..';
import { quest, generateQA } from '../games/even';

startGame(quest, generateQA);
