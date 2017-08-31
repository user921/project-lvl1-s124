#!/usr/bin/env node

import { startGame } from '..';
import { quest, generateQA } from '../games/balance';

startGame(quest, generateQA);
