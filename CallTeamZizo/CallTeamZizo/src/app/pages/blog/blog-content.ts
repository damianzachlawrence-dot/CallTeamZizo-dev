export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  readTime: string;
  intro: string;
  sections: BlogSection[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'what-are-ai-receptionists',
    title: 'What are AI receptionists?',
    summary: 'A practical introduction to virtual receptionists, what they can do, and where a person should stay in the loop.',
    readTime: '4 min read',
    intro: 'An AI receptionist is software that can handle parts of the first interaction with a business—often answering common questions, collecting caller details, and routing a request. It can help a small team stay responsive when people are busy or outside normal office hours.',
    sections: [
      { heading: 'What can one do?', paragraphs: ['Depending on the system and how it is configured, an AI receptionist may answer routine questions, ask a caller what they need, gather contact details, and pass a message or call to the right person. Some systems work by voice, while others are connected to a website chat.'] },
      { heading: 'What it should not replace', paragraphs: ['It is not a substitute for human judgement in sensitive, complicated, or urgent situations. Businesses should tell customers when they are speaking with an automated assistant, provide a clear way to reach a person, and avoid asking the system to handle information it does not need.'] },
      { heading: 'Is it right for your business?', paragraphs: ['Consider an AI receptionist if your team receives repeat enquiries, misses calls while serving customers, or needs a consistent way to collect callback requests. Start with a narrow set of tasks, test the experience, and review how often the assistant answers accurately.'], bullets: ['List the most common questions customers ask.', 'Choose when a request must be handed to a person.', 'Make the automated nature of the service clear.', 'Review conversations and improve the answers over time.'] }
    ]
  },
  {
    slug: 'how-do-chatbots-work',
    title: 'How do chatbots work?',
    summary: 'Learn how website chatbots receive a message, find a response, and hand a visitor over to your team.',
    readTime: '5 min read',
    intro: 'A chatbot is a software interface that lets someone ask a question in a conversation-style window. It receives the visitor’s message, uses its rules or language model to select a response, and displays the next step—such as an answer, a follow-up question, or a contact option.',
    sections: [
      { heading: 'Rules, AI, or a mix', paragraphs: ['Rule-based bots follow a designed path, such as a menu or a sequence of questions. AI-powered bots can interpret more varied wording and respond using approved information. Many useful setups combine both: AI helps understand the request, while rules keep important actions predictable.'] },
      { heading: 'What happens to a visitor message?', paragraphs: ['The chat interface sends a message to the chatbot service. That service evaluates the text against its configured instructions and information, then returns a reply. If it cannot help, a well-designed bot offers a clear handoff rather than pretending to know.'] },
      { heading: 'Designing a helpful chatbot', paragraphs: ['A chatbot works best when its purpose is small and clear. Keep answers concise, make contact options easy to find, and avoid collecting sensitive data unless there is a specific, properly protected reason. Tell visitors what the bot can help with and let them reach a person.'], bullets: ['Choose a few frequent visitor questions to start.', 'Use current, approved business information.', 'Offer a human handoff for uncertain or complex requests.', 'Test on mobile and check that the chat does not block the page.'] }
    ]
  },
  {
    slug: 'agentic-integrations-for-business',
    title: 'How successful agentic integrations help your business',
    summary: 'What agentic AI integrations can mean in practice, where they can save effort, and how to introduce them responsibly.',
    readTime: '6 min read',
    intro: 'An agentic integration connects an AI system to approved tools or workflows so it can take a series of steps toward a defined goal. For a business, that might mean sorting an enquiry, preparing a draft response, or creating a follow-up task. The value comes from fitting the integration to a real process—not from adding autonomy for its own sake.',
    sections: [
      { heading: 'From answering to assisting with tasks', paragraphs: ['A basic chatbot responds to a question. An agentic workflow may also use connected tools, such as checking permitted business information or preparing a record for review. The exact capabilities depend on the integrations and permissions provided.'] },
      { heading: 'What makes an integration successful?', paragraphs: ['Successful integrations have a well-defined job, reliable source data, and boundaries on what the system can change. They include a review or approval step for important actions, log what happened, and have a safe fallback when a tool is unavailable or the system is uncertain.'] },
      { heading: 'A safer way to get started', paragraphs: ['Begin with a low-risk process that is easy to measure, such as categorizing incoming enquiries for a person to review. Compare the results with the existing workflow, address errors, and only then consider expanding the system’s permissions.'], bullets: ['Map the existing workflow before automating it.', 'Limit access to only the tools and data needed.', 'Require human approval for consequential actions.', 'Measure time saved, quality, and errors—not just activity.', 'Provide a simple way to pause or disable the integration.'] }
    ]
  }
];
