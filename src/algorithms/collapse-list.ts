// Rendering collapsible lists
// A social media app that you are working on includes a piece of UI to show events that have occurred over time. These events are represented as plain objects with three fields:
// {
//     timestamp: 1, // the timestamp in milliseconds
//     category: 'USER_FOLLOW', // the category of the event (see below)
//     displayText: '..' // the text to render to the screen
// }

// You will be given an array of events, sorted by timestamp in ascending order.
// Events will be one of two categories:
// •	USER_FOLLOW
// •	TRENDING_TOPIC
// The issue is that when a user logs on there could potentially be 100s of events, and we want to keep the UI contained. Therefore, we want to collapse events based on the following rules:
// •	USER_FOLLOW events are never collapsed.
// •	TRENDING_TOPIC events are collapsed if there are 2 or more consecutive events
// When events are collapsed, we show only the first event, with all the rest hidden:
// •	USER_FOLLOW
// •	USER_FOLLOW
// •	TRENDING_TOPIC (+ 6 more)
// •	USER_FOLLOW
// Create a function, collapseEvents(events) which will take an array of events and return a data structure representing the events in their collapsed form. You may represent these events using any structure you wish, but try to think about a structure that will be useful for the frontend engineer to implement the UI with.
// Example set of events input:
// USER_FOLLOW
// USER_FOLLOW
// USER_FOLLOW
// TRENDING_TOPIC
// TRENDING_TOPIC
// TRENDING_TOPIC
// TRENDING_TOPIC
// USER_FOLLOW

// And output:
// USER_FOLLOW
// USER_FOLLOW
// USER_FOLLOW
// TRENDING_TOPIC [+ 3 more]
// USER_FOLLOW

// Follow up question: a user can click to expand a set of events. How would you update your data structure to represent this?

interface Event {
    timestamp: number, // the timestamp in milliseconds
    category: 'USER_FOLLOW' | 'TRENDING_TOPIC', // the category of the event (see below)
    displayText: string; // the text to render to the screen
}

interface CollapsedEvent extends Event {
    subEvents?: Event[];
}


const inputEvents: Event[] = [
    {
        timestamp: 1,
        category: 'USER_FOLLOW',
        displayText: 'This user followed'
    },
    {
        timestamp: 2,
        category: 'USER_FOLLOW',
        displayText: 'This user followed'
    },
    {
        timestamp: 3,
        category: 'TRENDING_TOPIC',
        displayText: 'This user followed'
    },
    {
        timestamp: 4,
        category: 'TRENDING_TOPIC',
        displayText: 'This user followed'
    },
    {
        timestamp: 5,
        category: 'TRENDING_TOPIC',
        displayText: 'This user followed'
    },
    {
        timestamp: 6,
        category: 'USER_FOLLOW',
        displayText: 'This user followed'
    }
];

export function collapseEvents(input: Event[]): CollapsedEvent[] {



    return input;
}