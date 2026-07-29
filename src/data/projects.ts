export interface Project {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  tags: string[];
  status: 'live' | 'archived' | 'development';
  link?: string;
  github?: string;
  image?: string;
  download?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: 'cartoon-story-watch',
    title: '卡通故事手表',
    titleEn: 'Cartoon Story Watch',
    description: '一款面向少儿的AI口语陪练应用，集成了火山引擎RTC实时语音对话、ASR语音识别、TTS语音合成等能力，支持唤醒词操控、语音选课、故事跟读练习等功能。',
    descriptionEn: 'An AI oral English training app for children, featuring real-time voice interaction via Volcano Engine RTC, ASR, and TTS capabilities.',
    tags: ['Android', 'Java', '火山引擎RTC', 'ASR', 'TTS', 'ESP32'],
    status: 'live',
    download: 'https://github.com/PureDaisy/xuyang-portfolio/releases/download/v1.0/ai故事.apk',
    highlights: [
      '实现RTC实时双向语音对话',
      '支持唤醒词「豆芽豆芽」语音控制',
      '集成火山引擎ASR/TTS服务',
      '开发ESP32嵌入式通信模块'
    ]
  },
  {
    id: 'realtime-communication',
    title: '实时口语通信',
    titleEn: 'Realtime Communication',
    description: '支持多语言的实时口语通信应用，实现语音识别、语义理解、TTS合成的全链路语音交互系统。',
    descriptionEn: 'A multilingual real-time voice communication app with end-to-end speech interaction capabilities.',
    tags: ['Android', 'Java', 'RTC', 'ASR', 'LLM'],
    status: 'archived',
    download: 'https://github.com/PureDaisy/xuyang-portfolio/releases/download/v1.0/ai口语.apk',
    highlights: [
      '多语言实时语音识别',
      'LLM语义理解集成',
      '实时语音合成反馈'
    ]
  },
  {
    id: 'chatbill',
    title: 'ChatBill',
    titleEn: 'ChatBill',
    description: '一款跨平台的智能对话与提醒应用，支持语音对话、智能提醒、聊天记录管理等功能，基于Flutter实现多端部署。',
    descriptionEn: 'A cross-platform smart chat and reminder app built with Flutter.',
    tags: ['Flutter', 'Dart', '跨平台', '语音交互'],
    status: 'archived',
    download: 'https://github.com/PureDaisy/xuyang-portfolio/releases/download/v1.0/记账和记事apk.apk',
    highlights: [
      'Flutter跨平台开发',
      '语音交互能力',
      '智能提醒系统'
    ]
  },
  {
    id: 'aidating',
    title: 'AI Dating',
    titleEn: 'AI Dating Platform',
    description: '一个AI驱动的社交平台后端系统，提供用户管理、匹配算法、聊天服务等核心功能。',
    descriptionEn: 'An AI-powered social platform backend system with user management and matching algorithms.',
    tags: ['Python', 'FastAPI', 'MySQL', 'Docker', 'React'],
    status: 'archived',
    highlights: [
      'FastAPI高性能后端架构',
      'Docker容器化部署',
      '用户匹配推荐算法'
    ]
  },
  {
    id: 'echoflow',
    title: 'EchoFlow',
    titleEn: 'EchoFlow',
    description: '一个智能社交平台，集成了AI Agent、语义搜索、知识库等功能，支持用户间的智能对话和内容推荐。',
    descriptionEn: 'An intelligent social platform with AI agents, semantic search, and knowledge base capabilities.',
    tags: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Redis', 'pgvector'],
    status: 'archived',
    highlights: [
      'AI Agent对话系统',
      'pgvector语义搜索',
      '知识库管理',
      '实时聊天服务'
    ]
  },
  {
    id: 'aiteach',
    title: 'AITeach',
    titleEn: 'AITeach',
    description: '一个在线教育平台，提供AI辅助的教学内容管理和学习追踪功能，已稳定运营并服务数千名用户。',
    descriptionEn: 'An online education platform with AI-assisted teaching content management.',
    tags: ['Vue 3', 'Python', 'MySQL', 'Vite', '在线运营'],
    status: 'live',
    link: 'https://yx.zqyey.com.cn/',
    highlights: [
      'Vue 3现代前端架构',
      'AI教学辅助功能',
      '服务数千名用户'
    ]
  }
];

export const skills = {
  languages: [
    { name: 'Python', level: 95 },
    { name: 'Java', level: 90 },
    { name: 'JavaScript/TypeScript', level: 85 },
    { name: 'Dart', level: 75 },
    { name: 'SQL', level: 85 },
  ],
  frameworks: [
    { name: 'FastAPI', level: 90 },
    { name: 'React', level: 80 },
    { name: 'Vue 3', level: 85 },
    { name: 'Flutter', level: 75 },
    { name: 'Android', level: 85 },
  ],
  tools: [
    { name: 'Docker', level: 85 },
    { name: 'Git', level: 90 },
    { name: 'Redis', level: 80 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MySQL', level: 85 },
  ],
  ai: [
    { name: 'LLM集成', level: 90 },
    { name: 'RTC实时通信', level: 90 },
    { name: 'ASR/TTS', level: 85 },
    { name: 'Agent开发', level: 90 },
    { name: 'pgvector', level: 80 },
  ]
};
