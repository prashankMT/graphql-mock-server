import casual from "casual";
import RandExp from "randexp";
import { MockList } from "graphql-tools";
import { startCase } from "lodash";
import { speakerEvents } from "./dataSource";

export default {
  ID: (_1, _2, _3, query) =>
    query.variableValues.id ? query.variableValues.id : casual.integer(0),
  Int: () => casual.integer(0),
  String: () => casual.title,
  Library: () => ({
    name: casual._full_name,
    description: casual.text
  }),
  Comment: () => ({
    text: casual.text,
    postedOn: casual.unix_time
  }),
  Transcription: () => ({
    text: casual.text
  }),
  User: () => ({
    name: casual.name,
    email: casual.email,
    pic: "https://t2.rbxcdn.com/1f61c439026a7958ca0a83b36b901a13"
  }),
  Account: () => ({
    name: casual.company_name
  }),
  Reaction: () => ({
    type: casual.type
  }),
  Theme: () => ({
    keywords: ()=> new MockList([3,10])
  }),
  Recording: () => ({
    sharedWith: () => new MockList([3, 10]),
    libraries: () => new MockList([3, 10]),
    videoUrls: () => [{
      id: '1234321',
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      label: '360'
    }, {
      id: '1234323',
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      label: '720'
    }],
    themes: () => new MockList([3, 10]),
    transcription: ()=> new MockList([5, 20]),
    date: casual._unix_time,
    duration: 100,
    hasMore: true,
    speakerEvents: () => speakerEvents
  }),
  Notification: () => ({
    date: casual.unix_time,
    text: casual.description,
    image: 'https://t2.rbxcdn.com/1f61c439026a7958ca0a83b36b901a13'
  })
};
