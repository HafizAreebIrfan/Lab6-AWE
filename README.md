# Lab 6

This lab explains the usage of context api, redux to manage states..

- Used Context API for login user and theme changes
- Used Redux for counter application with incr, decr, and reset logic
- Used prop drilling for login user.

# Structure
Provider
   │
   ├── ThemeProvider -- wraps the context provider
   │       │
   │       └── ThemeWrapper - wraps the all component so theme can be applied on all
   │              │
   │              ├── UserProfile
   │              ├── PropDrill
   │              └── Counter
   │
   └── Redux Provider
