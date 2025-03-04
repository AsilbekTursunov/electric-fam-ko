// import ExcelJS from 'exceljs'
import * as XLSX from 'xlsx'
import XLSXStyle from 'xlsx-js-style'
import { saveAs } from 'file-saver'
import { TZDate } from '@toast-ui/calendar' 


export const exportToExcel = (data) => { 
  const header = ["식당명", "코너", "조식", "중식", "석식", "야식", "계"]
  const worksheetData = [header]

  const mergeCells = []
  let rowIndex = 1 // Birinchi qator header, shuning uchun 1-dan boshlanadi

  data.forEach((restaurant) => {
    const startRow = rowIndex
    restaurant.data.forEach((item) => {
      worksheetData.push([
        restaurant.title, // Title
        item.label, // 코너
        item.breakfast,
        item.lunch,
        item.dinner,
        item.snack,
        item.total,
      ])
      rowIndex++
    })

    // 4ta qator uchun title ustuni birlashtiriladi
    mergeCells.push({ s: { r: startRow, c: 0 }, e: { r: rowIndex - 1, c: 0 } }) 
  })

  const ws = XLSX.utils.aoa_to_sheet(worksheetData)
  console.log(ws)

  // **📌 Stil qo‘shish** 
  Object.keys(ws).forEach((cellKey) => {
    if (cellKey.startsWith("!")) return
    const cell = ws[cellKey]

    // **Agar cell.s mavjud bo'lmasa, yangi object qilib qo'yamiz**
    if (!cell.s) {
      cell.s = {}
    }

    // **1-qator uchun style (header, #606060)**
    if (cellKey.match(/^[A-G]1$/)) {
      cell.s = {
        ...cell.s,
        alignment: { horizontal: "center", vertical: "center" },
        fill: { fgColor: { rgb: "C0C0D2" } },
        font: { bold: true, color: { rgb: "000000" } },
      }
    }

    const rowNumber = parseInt(cellKey.match(/\d+/)[0], 10)
    // **Har 4 qatordan keyingi (5, 9, 13, 17, ...) uchun style qo‘llash**
    if ((rowNumber - 5) % 4 === 0) {
      ws[cellKey].s = {
        ...ws[cellKey].s,
        fill: { fgColor: { rgb: "F0F0F0" } },
      }
    }

    // **Barcha kataklarni markazga joylashtirish**
    cell.s = {
      ...cell.s,
      alignment: { horizontal: "center", vertical: "center" },
    }
  })


  // **📌 Ustun kengliklari (30 harflik)**
  ws['!cols'] = [
    { wch: 20 }, // "A" ustuni (식당명)
    { wch: 15 }, // "B" ustuni (코너)
    { wch: 10 }, // "C" ustuni (조식)
    { wch: 10 }, // "D" ustuni (중식)
    { wch: 10 }, // "E" ustuni (석식)
    { wch: 10 }, // "F" ustuni (야식)
    { wch: 10 }  // "G" ustuni (계)
  ] 


  // **📌 Birlashtirilgan kataklar**
  ws["!merges"] = mergeCells

  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1") 
  const response = XLSXStyle.writeFile(wb, `output.xlsx`)

  saveAs(response, "output.xlsx")
}


export function clone(date) {
  return new TZDate(date)
}

export function addHours(d, step) {
  const date = clone(d)
  date.setHours(d.getHours() + step)

  return date
}

export function addDate(d, step) {
  const date = clone(d)
  date.setDate(d.getDate() + step)

  return date
}

export function subtractDate(d, steps) {
  const date = clone(d)
  date.setDate(d.getDate() - steps)

  return date
}
