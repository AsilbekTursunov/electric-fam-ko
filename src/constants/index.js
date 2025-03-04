// import { addDate, addHours, subtractDate } from '../utils'
// const today = new Date()
// const newDay = new Date(2025, 2, 1, 0, 0, 0, 0)

export const hours = [ 
  '00',
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23'
]

export const minutes = [ 
  '00',
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
  '32',
  '33',
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48',
  '49',
  '50',
  '51',
  '52',
  '53',
  '54',
  '55',
  '56',
  '57',
  '58',
  '59'
]

export const SIDEBAR_MENU = [
  {
    index: '1',
    title: '외부인관리',
    icon: 'icon1_visitor',
    isHasSubMenu: true,
    submenus: [
      {
        index: '1-1',
        title: '사전 방문예약 신청',
        to:'/applicant'
      },
      {
        index: '1-2',
        title: 'VIP 방문신청',
        to:'/visitrequest'
      },
      {
        index: '1-3',
        title: '장ㆍ단기상주자 신청',
        to:'/resident'
      },
      {
        index: '1-4',
        title: '장ㆍ단기상주자 기간연장',
        to:'/resident-extend'
      },
      {
        index: '1-5',
        title: 'VIP식수 신청',
        to:'/vipmealreq'
      },
      {
        index: '1-6',
        title: 'VIP방문 신청',
        to:'/vipvisitreq'
      },
    ]
  },
  {
    index: '2',
    title: '본인신청',
    icon: 'icon2_person',
    isHasSubMenu: true,
    submenus: [
      {
        index: '2-1',
        title: '차량 등록관리',
        to: '/car-regis-manage'
      },
      {
        index: '2-2',
        title: '사원증 신청',
        to:'/entry-permission'
      },
      {
        index: '2-3',
        title: '출입권한 신청',
        to:'/employee-card'
      },
      {
        index: '2-4',
        title: '입출문 신청',
        to:'/gate-access-request'
      },
      {
        index: '2-5',
        title: '식수 신청',
        to:'/meal-application'
      },
    ]
  },
  {
    index: '3',
    title: '나의 신청현황',
    icon: 'icon3_myself',
    to:'/my-application',
    isHasSubMenu: false,
  },
  {
    index: '4',
    title: '결재',
    icon: 'icon4_approval',
    to:'/approval-history',
    isHasSubMenu: false,
  },
  {
    index: '5',
    title: '인원ㆍ차량관리',
    icon: 'icon5_people+car',
    isHasSubMenu: true,
    submenus: [
      {
        index: '5-1',
        title: '출타자 입출문현황',
        to:'/out-visitor-gate-status'
      },
      {
        index: '5-2',
        title: '미예약 방문자 출입등록',
        to:'/unreserved-visitor-entry'
      },
      {
        index: '5-3',
        title: '방문자 출입현황',
        to:'/visitor-entry-status'
      },
      {
        index: '5-4',
        title: '공무 출입자 등록',
        to:'/official-visitor-registration'
      },
      {
        index: '5-5',
        title: '공무 출입자 현황',
        to: '/official-status-entry'
      }
    ]
  },
  {
    index: '6',
    title: '협력회사 출입',
    icon: 'handshake',
    isHasSubMenu: false,
  },
  {
    index: '7',
    title: '출입차량 등록관리',
    icon: 'icon7_car',
    isHasSubMenu: true,
    submenus: [ 
      {
        index: '7-2',
        title: '회사ㆍ통근버스 차량관리',
        to: '/commuter-bus-vehicle-management'
      }
    ],
  },
  {
    index: '8',
    title: '사무실 출입관리',
    icon: 'icon8_enter',
    isHasSubMenu: true,
    submenus: [ 
      {
        index: '8-3',
        title: '사무실 출입현황',
        to: '/office-access-status'
      },
      {
        index: '8-4',
        title: '출입그룹권한 관리',
        to: '/access-group-permission-management'
      },
      {
        index: '8-5',
        title: '출입권한 관리',
        to: '/access-control'
      },
      {
        index: '8-6',
        title: '출입지 그룹 관리',
        to: '/manage-entry-group'
      },
      {
        index: '8-8',
        title: '출입그룹-GATE 연계',
        to: '/access-group-gate-linkage'
      },
    ]
  },
  {
    index: '9',
    title: 'ID카드관리',
    icon: 'icon9_card',
    isHasSubMenu: false,
  },
  {
    index: '10',
    title: '식수관리',
    icon: 'icon10_food',
    isHasSubMenu: true,
    submenus: [
      {
        index: '10-1',
        title: '식수현황',
        to: '/water-status'
      },
      {
        index: '10-2',
        title: '식수 시간관리', 
        to: '/cost-settlement'
      },
      {
        index: '10-3',
        title: '식수 신청현황', 
        to: '/time-management'
      },
      {
        index: '10-4',
        title: '식수 코너별 집계', 
        to: '/aggregation-drinking-water-corner'
      }, 
      {
        index: '10-5',
        title: 'VIP식수 신청현황',
        to: '/vip-application-status'
      },
      {
        index: '10-6',
        title: 'VIP식수 신청내역 캘린더',
        to: '/vip-application-calendar'
      },
      {
        index: '10-7',
        title: 'VIP식수 신청마감',
        to: '/vip-application-deadline'
      },
      {
        index: '10-8',
        title: 'VIP식수 기준정보',
        to: '/vip-application-criteria'
      },
    ]
  },
  {
    index: '11',
    title: '시스템관리',
    icon: 'icon11_system',
    isHasSubMenu: true,
    submenus: [
      {
        index: '11-1',
        title: '페이지 권한관리',
        to: '/page-permissions-management'
      },
      {
        index: '11-2',
        title: '담당자 관리',
        to: '/manage-management'
      },
      {
        index: '11-3',
        title: '시스템 사용 Log관리',
        to: '/system-usage-log-management'
      },
      {
        index: '11-4',
        title: '사업장 기준정보',
        to: '/business-location-information'
      }
    ]
  },
]

export const events = [
  {
    "id": "1",
    "calendarId": "1",
    "title": "Team Standup Meeting",
    "category": 'task',
    "start": "2025-02-10T09:00:00+09:00",
    "end": "2025-02-10T10:00:00+09:00"
  },
  {
    "id": "2",
    "calendarId": "3",
    "title": "Project Deadline Review",
    "start": "2025-02-10T14:00:00+09:00",
    "end": "2025-02-10T15:30:00+09:00"
  },
  {
    "id": "3",
    "calendarId": "2",
    "title": "Client Presentation",
    "start": "2025-02-11T10:00:00+09:00",
    "end": "2025-02-11T11:30:00+09:00"
  },
  {
    "id": "4",
    "calendarId": "4",
    "title": "Backend System Update",
    "start": "2025-02-11T15:00:00+09:00",
    "end": "2025-02-11T16:30:00+09:00"
  },
  {
    "id": "5",
    "calendarId": "1",
    "title": "UI/UX Wireframe Discussion",
    "start": "2025-02-12T09:30:00+09:00",
    "end": "2025-02-12T11:00:00+09:00"
  },
  {
    "id": "6",
    "calendarId": "3",
    "title": "Marketing Strategy Meeting",
    "start": "2025-02-12T13:30:00+09:00",
    "end": "2025-02-12T15:00:00+09:00"
  },
  {
    "id": "7",
    "calendarId": "2",
    "title": "Frontend Development Workshop",
    "start": "2025-02-13T10:30:00+09:00",
    "end": "2025-02-13T12:00:00+09:00"
  },
  {
    "id": "8",
    "calendarId": "4",
    "title": "Sprint Planning",
    "start": "2025-02-13T14:30:00+09:00",
    "end": "2025-02-13T16:00:00+09:00"
  },
  {
    "id": "9",
    "calendarId": "1",
    "title": "Weekly Progress Report",
    "start": "2025-02-14T09:00:00+09:00",
    "end": "2025-02-14T10:30:00+09:00"
  },
  {
    "id": "10",
    "calendarId": "3",
    "title": "Code Review Session",
    "start": "2025-02-14T15:00:00+09:00",
    "end": "2025-02-14T16:30:00+09:00"
  },
  {
    "id": "11",
    "calendarId": "2",
    "title": "Machine Learning Seminar",
    "start": "2025-02-15T10:00:00+09:00",
    "end": "2025-02-15T11:30:00+09:00"
  },
  {
    "id": "12",
    "calendarId": "4",
    "title": "Cloud Infrastructure Discussion",
    "start": "2025-02-15T14:00:00+09:00",
    "end": "2025-02-15T15:30:00+09:00"
  },
  {
    "id": "13",
    "calendarId": "1",
    "title": "Mobile App Design Workshop",
    "start": "2025-02-16T09:30:00+09:00",
    "end": "2025-02-16T11:00:00+09:00"
  },
  {
    "id": "14",
    "calendarId": "3",
    "title": "DevOps Deployment Strategy",
    "start": "2025-02-16T14:30:00+09:00",
    "end": "2025-02-16T16:00:00+09:00"
  },
  {
    "id": "15",
    "calendarId": "2",
    "title": "AI Research Paper Discussion",
    "start": "2025-02-17T10:00:00+09:00",
    "end": "2025-02-17T11:30:00+09:00"
  },
  {
    "id": "16",
    "calendarId": "4",
    "title": "Cybersecurity Best Practices",
    "start": "2025-02-17T14:00:00+09:00",
    "end": "2025-02-17T15:30:00+09:00"
  },
  {
    "id": "17",
    "calendarId": "1",
    "title": "Blockchain Technology Insights",
    "start": "2025-02-18T09:30:00+09:00",
    "end": "2025-02-18T11:00:00+09:00"
  },
  {
    "id": "18",
    "calendarId": "3",
    "title": "Quantum Computing Basics",
    "start": "2025-02-18T14:30:00+09:00",
    "end": "2025-02-18T16:00:00+09:00"
  },
  {
    "id": "19",
    "calendarId": "2",
    "title": "AI & Ethics Panel Discussion",
    "start": "2025-02-19T10:00:00+09:00",
    "end": "2025-02-19T11:30:00+09:00"
  },
  {
    "id": "20",
    "calendarId": "4",
    "title": "5G & IoT Innovations",
    "start": "2025-02-19T14:00:00+09:00",
    "end": "2025-02-19T15:30:00+09:00"
  },
  {
    "id": "21",
    "calendarId": "1",
    "title": "AR/VR Development Trends",
    "start": "2025-02-20T09:30:00+09:00",
    "end": "2025-02-20T11:00:00+09:00"
  },
  {
    "id": "22",
    "calendarId": "3",
    "title": "E-commerce Growth Strategies",
    "start": "2025-02-20T14:30:00+09:00",
    "end": "2025-02-20T16:00:00+09:00"
  }
]


export const calendarEvents = [
  {
    id: '1',
    calendarId: '1',
    title: 'Weekly Meeting',
    start: '2025-02-09T09:00:00+09:00',
    end: '2025-02-09T10:00:00+09:00',
  },
  {
    id: '2',
    calendarId: '4',
    title: 'Project Deadline',
    start: '2025-02-09T15:00:00+09:00',
    end: '2025-02-09T16:00:00+09:00',
  },
  {
    id: '3',
    calendarId: '2',
    title: 'Team Standup',
    start: '2025-02-10T10:00:00+09:00',
    end: '2025-02-10T10:30:00',
  },
  {
    id: '4',
    calendarId: '1',
    title: 'Client Call',
    start: '2025-02-11T14:00:00+09:00',
    end: '2025-02-11T15:00:00+09:00',
  },
  {
    id: '5',
    calendarId: '3',
    title: 'Code Review',
    start: '2025-02-12T11:00:00+09:00',
    end: '2025-02-12T12:00:00+09:00',
  },
  {
    id: '6',
    calendarId: '2',
    title: 'Sprint Planning',
    start: '2025-02-12T09:00:00+09:00',
    end: '2025-02-12T10:30:00',
  },
  {
    id: '7',
    calendarId: '3',
    title: 'Team Lunch',
    start: '2025-02-13T12:30:00',
    end: '2025-02-13T13:30:00',
  },
  {
    id: '8',
    calendarId: '4',
    title: 'Weekly Meeting',
    start: '2025-02-014T09:00:00+09:00',
    end: '2025-02-014T10:00:00+09:00',
  },
  {
    id: '9',
    calendarId: '2',
    title: 'Product Demo',
    start: '2025-02-014T16:00:00+09:00',
    end: '2025-02-014T17:00:00+09:00',
  },
  {
    id: '10',
    calendarId: '3',
    title: 'Team Outing',
    start: '2025-02-15T18:00:00+09:00',
    end: '2025-02-15T21:00:00+09:00',
  }
]


//  global selec values

export const visitedPlaces = ['청주사업장', '천안사업장', '부산사업장', 'LS e-Mobility Solutions', 'LS메탈'] 
export const entranceGroups = [
  '기본',
  '1사업장설계',
  '도면실',
  '연구소',
  '시험센터',
  '고압 시작실',
  '1사업장 스마트기기시험반',
  'PT&T발전기실',
  'PT&T복합환경시험실',
  'FEMS Station',
  '부산사업장',
  'PT&T 시료준비실',
  '1사업장 전기반',
  '전력남부사업부(부산)',
  '기본(연수원)',
  '메탈(부산)',
]
export const food = [
  '한식(외부고객) : 13,000',
  '삼계탕 : 13,000',
  '양식(육류스테이크) : 25,000',
  '양식(연어스테이크) : 25,000',
  '중동식 : 25,000',
  '생일자 : 8,000',
]