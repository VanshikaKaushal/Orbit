# Orbit

Orbit is a personalized scheduling and task-management application that helps users decide what to work on based on their schedule, deadlines, preferences, mood, and energy level.

## Problem

Most calendar and task-management apps organize work around deadlines and fixed schedules, but they do not strongly account for how the user currently feels.

Orbit aims to make scheduling more personalized by considering factors such as:
- Mood
- Energy / tiredness
- Available time
- Task duration
- Deadlines
- Priority
- User preferences

The main goal is to help answer:

**What should I work on right now?**

## Roadmap

### Version 1 — Core Scheduler

The first version will focus on building the core functionality of Orbit without relying on AI.

Features:
- Create and manage tasks
- Create and manage events
- Record mood and energy levels
- Store scheduling and task preferences
- Store task information such as deadlines, duration, and priority
- Recommend what task to work on using a scheduling algorithm

The recommendation algorithm may consider:
- Current mood and energy
- Available time
- Deadline
- Priority
- Estimated task duration
- Preferred time of day
- Preferred days of the week

### Version 2 — AI Assistance

The second version will add AI features to make Orbit easier and more flexible to use.

Features:
- Allow users to describe how they are feeling using natural language
- Use AI to interpret the user's mood, tiredness, stress, or energy level
- Use this information to improve task recommendations
- Use AI to break large tasks into smaller and more manageable steps

Example:

Instead of manually selecting an energy level, a user could type:

> "I'm really tired and don't feel like doing anything difficult."

Orbit could interpret this and use it when deciding which task to recommend.

### Version 3 — Integrations & Personalization

Later versions will focus on connecting Orbit with tools users already use and making recommendations more personalized over time.

Possible features:
- Google Calendar integration
- Outlook Calendar integration
- Canvas integration
- Importing tasks and events from external platforms
- Memory of previous user behavior and preferences
- Learning productivity patterns over time
- More personalized recommendations based on past activity

## Initial Data Fields

### Event
- Title
- Start time
- End time
- Location
- Category
- Description
- Recurrence

### Task
- Title
- Estimated duration
- Deadline
- Category
- Priority
- Preferred time of day
- Preferred day(s)
- Subtasks

### User Check-In
- Mood
- Energy / tiredness
- Stress level *(possible future field)*

## Future Design Goals

Orbit should be designed so that new AI features, integrations, and personalization can be added later without needing to completely redesign the core scheduling system.
