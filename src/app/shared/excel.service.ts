// // import * as FileSaver from 'file-saver';
// // import * as XLSX from 'xlsx';

// // const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
// // const EXCEL_EXTENSION = '.xlsx';

// // export class ExcelService
// // {
// //     constructor() { }
// //     public exportAsExcelFile(json: any[], excelFileName: string): void {
// //       const worksheet: XLSX.IWorkSheet = XLSX.utils.sheet_to_json(json);
// //       const workbook: XLSX.IWorkBook = {Props:{}, Sheets: { 'data': worksheet }, SheetNames: ['data'] };
// //       const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
// //       this.saveAsExcelFile(excelBuffer, excelFileName);
// //     }
    
// //     private saveAsExcelFile(buffer: any, fileName: string): void {
// //        const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
// //        FileSaver.saveAs(data, fileName + '_export_' + new  Date().getTime() + EXCEL_EXTENSION);
// //     }
// // }
// import * as FileSaver from 'file-saver';
// import * as XLSX from 'xlsx';
// import { v4 as uuidv4 } from 'uuid';

// const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
// const EXCEL_EXTENSION = '.xlsx';

// export class ExcelService {
//   constructor() { }

//   public exportAsExcelFile(data: any[], fileName: string): void {
//     try {
//       const worksheet: XLSX.IWorkSheet = XLSX.utils.sheet_to_json(data);
//       const workbook: XLSX.IWorkBook = { Props: {}, Sheets: { 'data': worksheet }, SheetNames: ['data'] };
//       const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
//       this.saveAsExcelFile(excelBuffer, fileName);
//     } catch (error) {
//       console.error('Error exporting to Excel:', error);
//     }
//   }

//   private saveAsExcelFile(buffer: any, fileName: string): void {
//     try {
//       const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
//       const uniqueFileName = `${fileName}_export_${uuidv4()}${EXCEL_EXTENSION}`;
//       FileSaver.saveAs(data, uniqueFileName);
//     } catch (error) {
//       console.error('Error saving Excel file:', error);
//     }
//   }
// }