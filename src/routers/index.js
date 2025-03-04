import { createRouter, createWebHistory } from 'vue-router'
import store from '../stores'

const MainLayout = () => import('@/layout/MainLayout.vue')
const AuthLayout = () => import('@/layout/AuthLayout.vue')


const Home = () => import('@/pages/home/HomePage.vue')
////////////////////////// 외부인관리 ////////////////////////////
const ApplicantPage = () => import("@/pages/VisitorControl/ApplicantPage.vue")
const VisitRequestPage = () =>
  import("@/pages/VisitorControl/VisitRequestPage.vue")
const ResidentReqPage = () =>
  import("@/pages/VisitorControl/ResidentReqPage.vue")
const ResExtFormPage = () =>
  import("@/pages/VisitorControl/ResExtFormPage.vue")
const VIPMealReqPage = () =>
  import("@/pages/VisitorControl/VIPMealReqPage.vue")
const VIPVisitReqPage = () =>
  import("@/pages/VisitorControl/VIPVisitReqPage.vue")
////////////////////////// 본인신청 ////////////////////////////
const EmployeeIdCard = () =>
  import("@/pages/SelfApplication/EmployeeIdCard.vue")
const EntryPermission = () =>
  import("@/pages/SelfApplication/EntryPermission.vue")
const CarRegisManage = () =>
  import("@/pages/SelfApplication/CarRegisManage.vue")
const GateAccessRequest = () =>
  import("@/pages/SelfApplication/GateAccessRequest.vue")
const MealApplication = () =>
  import("@/pages/SelfApplication/MealApplication.vue")
//////////////////////// 나의 신청현황 //////////////////////////
const MyApplicationStatus = () =>
  import("@/pages/my-application/MyApplicationStatus.vue")
const PersonalManagement = () =>
  import("@/pages/Personal/PersonalManagement.vue")
//////////////////////// 결재 /////////////////////////////////
const ApprovalHistory = () =>
  import("@/pages/History/ApprovalHistory.vue")
//////////////////////// 인원ㆍ차량관리 ///////////////////////
const OutVisitorGateStatus = () =>
  import("@/pages/PersonVehicle/OutVisitorGateStatus.vue")
const UnreservedVisitorEntry = () =>
  import("@/pages/PersonVehicle/UnreservedVisitorEntry.vue")
const VisitorEntryStatus = () =>
  import("@/pages/PersonVehicle/VisitorEntryStatus.vue")
const OfficialVisitorRegistration = () =>
  import("@/pages/PersonVehicle/OfficialVisitorRegistration.vue")
const OfficialStatusEntry = () =>
  import("@/pages/PersonVehicle/OfficialStatusEntry.vue")
/////////////////////// 출입차량 등록관리 ///////////////////////
const BusVehicleManagement = () =>
  import("@/pages/VehicleManagement/BusVehicleManagement.vue")
/////////////////////// 식수관리 //////////////////////////////
const WaterConsumptionStatus = () =>
  import("@/pages/DrinkingWaterManage/WaterConsumptionStatus.vue")
const CostSettlementByPeriod = () =>
  import("@/pages/DrinkingWaterManage/CostSettlementByPeriod.vue")
const WaterTimeManagement = () =>
  import("@/pages/DrinkingWaterManage/WaterTimeManagement.vue")
const WaterApplicationStatus = () =>
  import("@/pages/DrinkingWaterManage/WaterApplicationStatus.vue")
const WaterCornerStatistics = () =>
  import("@/pages/DrinkingWaterManage/WaterCornerStatistics.vue")
const VIPFoodAppStatus = () =>
  import("@/pages/DrinkingWaterManage/VIPFoodAppStatus.vue")
const VIPWaterApplicationCalendar = () =>
  import("@/pages/DrinkingWaterManage/VIPWaterApplicationCalendar.vue")
const VIPWaterApplicationDeadline = () =>
  import("@/pages/DrinkingWaterManage/VIPWaterApplicationDeadline.vue")
const VIPWaterApplicationCriteria = () =>
  import("@/pages/DrinkingWaterManage/VIPWaterApplicationCriteria.vue")

/////////////////////// 사무실 출입관리 //////////////////////////////

const OfficeAccessStatus = () =>
  import("@/pages/OfficeAccessControl/OfficeAccessStatus.vue")
const AccessGroupManagement = () =>
  import("@/pages/OfficeAccessControl/AccessGroupPermissionManagement.vue")
const AccessControl = () =>
  import("@/pages/OfficeAccessControl/AccessControl.vue")
const ManageEntryGroup = () =>
  import("@/pages/OfficeAccessControl/ManageEntryGroup.vue")
const AccessGroupGateLinkage = () =>
  import("@/pages/OfficeAccessControl/AccessGroupGateLinkage.vue")

/////////////////////// 시스템관리 //////////////////////////////

const PagePermissionsManagement = () =>
  import("@/pages/SystemAdministration/PagePermissionsManagement.vue")
const ManagerManagement = () =>
  import("@/pages/SystemAdministration/ManagerManagement.vue")
const SystemUsageLogManagement = () =>
  import("@/pages/SystemAdministration/SystemUsageLogManagement.vue")
const BusinessLocationInformation = () =>
  import("@/pages/SystemAdministration/BusinessLocationInformation.vue")

const Login = () => import('@/pages/login/LoginPage.vue')

const routes = [
  {
    path: "/",
    name: "Main",
    redirect: { name: "Home" },
    component: MainLayout,
    meta: {
      requireAuth: true,
    },
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      //////////// 외부인관리 /////////////
      {
        path: "/applicant",
        name: "ApplicantPage",
        component: ApplicantPage,
      },
      {
        path: "/visitrequest",
        name: "VisitRequestPage",
        component: VisitRequestPage,
      },
      {
        path: "/resident",
        name: "ResidentReqPage",
        component: ResidentReqPage,
      },
      {
        path: "/resident-extend",
        name: "ResExtFormPage",
        component: ResExtFormPage,
      },
      {
        path: "/vipmealreq",
        name: "VIPMealReqPage",
        component: VIPMealReqPage,
      },
      {
        path: "/vipvisitreq",
        name: "VIPVisitReqPage",
        component: VIPVisitReqPage,
      },
      //////////// 본인신청 /////////////
      {
        path: "/car-regis-manage",
        name: "CarRegisManage",
        component: CarRegisManage,
      },
      {
        path: "/entry-permission",
        name: "EntryPermission",
        component: EntryPermission,
      },
      {
        path: "/employee-card",
        name: "EmployeeIdCard",
        component: EmployeeIdCard,
      },
      {
        path: "/gate-access-request",
        name: "GateAccessRequest",
        component: GateAccessRequest,
      },
      {
        path: "/meal-application",
        name: "MealApplication",
        component: MealApplication,
      },
      //////////// 나의 신청현황 //////////
      {
        path: "/my-application",
        name: "MyApplicationStatus",
        component: MyApplicationStatus,
      },
      {
        path: "/personal-management",
        name: "PersonalManagement",
        component: PersonalManagement,
      },
      //////////// 결재 /////////////////
      {
        path: "/approval-history",
        name: "ApprovalHistory",
        component: ApprovalHistory,
      },
      //////////// 인원ㆍ차량관리 /////////////////
      {
        path: "/out-visitor-gate-status",
        name: "OutVisitorGateStatus",
        component: OutVisitorGateStatus,
      },
      {
        path: "/unreserved-visitor-entry",
        name: "UnreservedVisitorEntry",
        component: UnreservedVisitorEntry,
      },
      {
        path: "/visitor-entry-status",
        name: "VisitorEntryStatus",
        component: VisitorEntryStatus,
      },
      {
        path: "/official-visitor-registration",
        name: "OfficialVisitorRegistration",
        component: OfficialVisitorRegistration,
      },
      {
        path: "/official-status-entry",
        name: "OfficialStatusEntry",
        component: OfficialStatusEntry,
      },
      //////////// 식수관리 /////////////
      {
        path: "/commuter-bus-vehicle-management",
        name: "BusVehicleManagement",
        component: BusVehicleManagement,
      },
      //////////// 식수관리 /////////////
      {
        path: "/water-status",
        name: "WaterConsumptionStatus",
        component: WaterConsumptionStatus,
      },
      {
        path: "/cost-settlement",
        name: "CostSettlementByPeriod",
        component: CostSettlementByPeriod,
      },
      {
        path: "/time-management",
        name: "WaterTimeManagement",
        component: WaterTimeManagement,
      },
      {
        path: "/aggregation-drinking-water-corner",
        name: "WaterApplicationStatus",
        component: WaterApplicationStatus,
      },
      {
        path: "/corner-statistics",
        name: "WaterCornerStatistics",
        component: WaterCornerStatistics,
      },
      {
        path: "/vip-application-status",
        name: "VIPFoodAppStatus",
        component: VIPFoodAppStatus,
      },
      {
        path: "/vip-application-calendar",
        name: "VIPWaterApplicationCalendar",
        component: VIPWaterApplicationCalendar,
      },
      {
        path: "/vip-application-deadline",
        name: "VIPWaterApplicationDeadline",
        component: VIPWaterApplicationDeadline,
      },
      {
        path: "/vip-application-criteria",
        name: "VIPWaterApplicationCriteria",
        component: VIPWaterApplicationCriteria,
      },
      /////////////////////// 사무실 출입관리 //////////////////////////////
      {
        path: "/office-access-status",
        name: "OfficeAccessStatus",
        component: OfficeAccessStatus,
      },
      {
        path: "/access-group-permission-management",
        name: "AccessGroupPermissionManagement",
        component: AccessGroupManagement,
      },
      {
        path: "/access-control",
        name: "AccessControl",
        component: AccessControl,
      },
      {
        path: "/manage-entry-group",
        name: "ManageEntryGroup",
        component: ManageEntryGroup,
      },
      {
        path: "/access-group-gate-linkage",
        name: "AccessGroupGateLinkage",
        component: AccessGroupGateLinkage,
      },
      /////////////////////// 시스템관리 //////////////////////////////
      {
        path: "/page-permissions-management",
        name: "PagePermissionsManagement",
        component: PagePermissionsManagement,
      },
      {
        path: "/manage-management",
        name: "ManagerManagement",
        component: ManagerManagement,
      },
      {
        path: "/system-usage-log-management",
        name: "SystemUsageLogManagement",
        component: SystemUsageLogManagement,
      },
      {
        path: "/business-location-information",
        name: "BusinessLocationInformation",
        component: BusinessLocationInformation,
      },
    ],
  },
  {
    path: "/auth",
    name: "Auth",
    redirect: { name: "Login" },
    component: AuthLayout,
    meta: {
      isGuest: true,
    },
    children: [
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !store.state.token) {
    next({ name: 'Auth' })
  } else if (to.meta.isGuest && store.state.token) {
    next({ name: 'Main' })
  } else {
    next()
  }
})