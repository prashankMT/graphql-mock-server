export default `
  type Video {
    id: ID!
    src: String!
    label: String
  }
  type SpeakingEvent{
    start: Int!
    end: Int
    speaker: User
  }
  type Recording {
    id: ID!
    videoUrls: [Video!]
    title: String!
    account: Account!
    sharedWith: [User]
    themes: [RecordingThemes]
    duration: Int!
    isBookmarked: Boolean!
    comments: [Comment]
    date: Int!
    reactions: [Reaction]
    isNew: Boolean!
    hasNewComment: Boolean!
    hasNewReaction: Boolean!
    transcription: [Transcription]
    questions: QuestionsAsked
    talktime: TalkTime
    interchanges: Int!
    libraries: [Library]
    speakerEvents: [SpeakingEvent]
  }
  type Recordings {
    cursor: Int!
    total: Int!
    hasMore: Boolean!
    data: [Recording]
  }
`;
