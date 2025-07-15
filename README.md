# Tempo Stack

## Overview

**Tempo Stack** is an HTML5-based game where players control a moving block, with the objective of stacking each new block on top of the previous one. The block moves back and forth between two walls, changing directions when it hits a wall. Players must time their actions to stop the block at the right moment, aligning it precisely on top of the stack.

With each successful placement, a new block is generated, and the stack grows higher. If any portion of the block extends past the edge of the previous block, it is removed. The game ends if the available space for stacking runs out.

## Objective

The main objective of **Tempo Stack** is to stack as many blocks as possible without any portion of a block falling off. Each time a block is successfully placed on top of the previous one, your score increases by one. The game continues until the stack space is filled or a block fails to stack correctly.

## Gameplay

- The block moves back and forth, changing direction when it hits a wall.
- Press the **ENTER** or **SPACE** key (on desktop) or tap the screen (on mobile) to stop the block's movement.
- If the block is stacked correctly on top of the previous block, the next block is generated, and the process repeats.
- If any part of the block overhangs, it is removed, and the player must try again.
- The game ends when the stack space runs out.

## Controls

- **Desktop**: Press **ENTER** or **SPACE** to stop the block.
- **Mobile**: Tap the screen to stop the block.
  
## Scoring

The score is based on the number of blocks successfully stacked. Each successfully placed block adds one point to the score. The game ends when the stack space is filled, or when a block fails to stack correctly.

## Requirements

- HTML5-compliant browser
- JavaScript-enabled environment for game functionality

## Important Note

If you are running the game locally on your machine (i.e. in a docker container) you will need to replace the reference for the phaser script with an external CDN such as the one [here](https://phaser.io/download/stable). The script-phaser-3581 script is from a different project and is not included in this repository. Alternatively you can download a copy of the Phaser library from the official site.
