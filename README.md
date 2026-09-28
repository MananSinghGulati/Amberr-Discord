# Amberr

Amberr is a multipurpose Discord bot built with **Node.js** and **discord.js**. It includes a collection of moderation, utility, economy, game, and interactive commands designed to make Discord servers more engaging and easier to manage.

## Features

- **Moderation**
  - Server management and moderation commands
  - Role-related utilities
  - User management tools

- **Economy**
  - Virtual currency system
  - Betting and game-based commands
  - User economy data stored using database models

- **Games & Entertainment**
  - Interactive Discord games
  - Would You Rather questions
  - Trivia and other user interactions

- **Utility**
  - General-purpose Discord commands
  - User and server information
  - Pokémon lookup functionality
  - Various server tools

- **Command System**
  - Organized command categories
  - Event-based message handling
  - Command cooldown support
  - Separate command and event handlers

## Technologies Used

- JavaScript
- Node.js
- discord.js
- MongoDB / Mongoose
- npm

## Project Structure

```text
Amberr/
├── commands/       # Discord bot commands organized by category
├── events/         # Discord event handlers
├── messages/       # Data used by interactive commands
├── models/         # Database models
├── index.js        # Main bot entry point
├── package.json    # Project dependencies and scripts
└── package-lock.json
```

## Installation

Clone the repository:

```bash
git clone https://github.com/MananSinghGulati//Amberr.git
cd Amberr
```

Install the required dependencies:

```bash
npm install
```

Configure the required Discord bot token and any API/database credentials locally before running the project.

**Never commit bot tokens, API keys, passwords, or other private credentials to GitHub.**

Start the bot:

```bash
node index.js
```

## What I Learned

Building Amberr gave me experience working with:

- JavaScript and asynchronous programming
- Discord APIs and event-driven applications
- Organizing a larger project into commands, events, and models
- Working with external APIs
- Database integration
- Debugging and maintaining a multi-feature application
- Git and version control

## About

Amberr was created as a personal programming project to explore Discord bot development and build experience working with JavaScript, APIs, databases, and event-driven software.
