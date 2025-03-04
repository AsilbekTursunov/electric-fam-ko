import { app } from './app-wrapper'

import MediaInput from '@/components/Input.vue'
import CardChip from '@/components/Chip.vue'
import ImageWrapper from '@/components/ImageWrapper.vue'
import MargieBorder from "@/components/MargieBorder.vue"
import IconUser from '@/components/icons/IconUser.vue'
import IconVisitors from '@/components/icons/IconVisitors.vue' 
import IconAccountBox from '@/components/icons/IconAccountBox.vue' 
import CustomInput from '@/components/CustomInput.vue'
import CustomSelect from '@/components/CustomSelect.vue'
import CustomCheckBox from '@/components/CustomCheckBox.vue' // need to remove because new created
import CustomCheck from '@/components/CustomCheck.vue'
import CustomDatePicker from '@/components/CustomDatePicker.vue'
import CustomDateTimePicker from '@/components/CustomDateTimePicker.vue'
import CustomRadio from '@/components/CustomRadio.vue'
import CustomSwitch from '@/components/CustomSwitch.vue'
import CustomButton from '@/components/CustomButton.vue'
import CustomTimePicker from '@/components/CustomTimePicker.vue'
import CustomActiveButton from '@/components/CustomActiveButton.vue'
import CustomTextArea from '@/components/CustomTextArea.vue'
import CustomDialog from '@/components/CustomDialog.vue'
import CustomTuiGrid from '@/components/CustomTuiGrid.vue'
import AuthorityPage from '@/pages/afterLogin/AuthorityPage.vue'
import UserMainPage from '@/pages/afterLogin/UserMainPage.vue'
import CustomTree from '@/components/CustomTree.vue'
import ColEl from '@/components/ColEl.vue'
import CustomHour from '@/components/fixed-components/CustomHour.vue'
import CustomMinute from '@/components/fixed-components/CustomMinute.vue'

// dialogs 
import ReferenceLookup from '@/components/dialogs/ReferenceLookup.vue'
import EmployeeDepartmentSearch from '@/components/dialogs/EmployeeDepartmentSearch.vue'


app.component('MediaInput', MediaInput)
app.component('CardChip', CardChip)
app.component('ImageWrapper', ImageWrapper)
app.component("MargieBorder", MargieBorder)

app.component('IconUser', IconUser)
app.component('IconVisitors', IconVisitors)
app.component('IconAccountBox', IconAccountBox)
app.component('CustomInput', CustomInput)
app.component("CustomSelect", CustomSelect) 
app.component('CustomCheckBox', CustomCheckBox)
app.component('CustomCheck', CustomCheck)
app.component('CustomDatePicker', CustomDatePicker)
app.component('CustomDateTimePicker', CustomDateTimePicker)
app.component('CustomRadio', CustomRadio)
app.component('CustomSwitch', CustomSwitch) 
app.component("CustomButton", CustomButton)
app.component("CustomTimePicker", CustomTimePicker)
app.component("CustomActiveButton", CustomActiveButton)
app.component("CustomTextArea", CustomTextArea)
app.component("CustomDialog", CustomDialog)
app.component("CustomTuiGrid", CustomTuiGrid)
app.component("AuthorityPage", AuthorityPage)
app.component("UserMainPage", UserMainPage)
app.component("CustomTree", CustomTree)
app.component("ColEl", ColEl)
app.component("CustomHour", CustomHour)
app.component("CustomMinute", CustomMinute)

// dialogs
app.component("ReferenceLookup", ReferenceLookup)
app.component("EmployeeDepartmentSearch", EmployeeDepartmentSearch)
