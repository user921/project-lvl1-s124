#!/usr/bin/env node

import { startGame } from '..';
import { quest, generateQA } from '../games/gcd';

startGame(quest, generateQA);
