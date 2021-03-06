import {gql} from 'apollo-server'

import Recording from "./components/recording";
import Transcription from "./components/transcription";
import Questions from "./components/questions";
import Talktime from "./components/talktime";
import Category from "./components/category";
import Library from "./components/library";
import User from "./components/user";
import Accounts from "./components/accounts";
import Participants from "./components/participants";
import Themes from "./components/themes";
import Comments from "./components/comment";
import Reaction from "./components/reaction";
import Designations from "./components/designation";
import Notification from "./components/notification";
import Empty from "./components/empty";

const typeDefs = gql`
  # the schema allows the following query:
  extend type Query {
    theme(id: Int!): Theme
    company(domain: String!): Company
    user(id:String!): User   
    account(id: Int!): Account
    categories: [Category]
    themes(count: Int=10, cursor: Int, query: String): Themes
    accounts(count: Int=10, cursor: Int, query: String): Accounts
    topLibraries: [Library]
    libraries(count: Int=10, cursor: Int, query: String): Libraries
    participants(count: Int=10, cursor: Int, query: String): Participants
    comments(count: Int=10, cursor: Int, recordingId: String!): Comments 
    recordings(count: Int=10, categoryId: Int, libraryId: [Int], accounts: [Int!], themes: [Int!], particpants: [Int!], count: Int=10, cursor: Int, date: [String!], query: [String!], sortType: String, sortOrder: String): Recordings    
    recording(id: String!):Recording
    users(query: String, count: Int=10, cursor: Int): Users
    designations(query: String, count: Int=10, cursor: Int): Designations 
    notifications(cursor: Int, count: Int=10): Notifications
  }

  # this schema allows the following mutation:
  extend type Mutation {
    updateShareRecordings(recordingId: ID!, addedUsers: [ID], deletedUsers: [ID]): Recording
    updateRecordingsLibrary(recordingId: ID!, addedLibraries: [ID], deletedLibraries: [ID]): Recording
    addTheme(title: String!, keywords: [String!]!): Theme
    editTheme(id: ID!, title: String!, keywords: [String!]!): Theme
    deleteTheme(id: ID!): Theme
    changeLocale: Account,
    markNotificationAsRead(ids: [ID]): Notifications
  }

  type Subscription {
    newNotificationRecieved: ID
  }
`;

export default [
  typeDefs,
  gql`${Recording}`,
  gql`${Category}`,
  gql`${Library}`,
  gql`${Themes}`,
  gql`${Participants}`,
  gql`${Accounts}`,
  gql`${Comments}`,
  gql`${User}`,
  gql`${Reaction}`,
  gql`${Transcription}`,
  gql`${Talktime}`,
  gql`${Questions}`,
  gql`${Designations}`,
  gql`${Notification}`,
  gql`${Empty}`
];
