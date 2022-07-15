
export const StorageComponent = () => {
   console.log("hello");
}


// import Promise from "bluebird";
// import JsZip from "jszip";
// import FileSaver from "file-saver";
//
// let downloadUrls: any[] = [];
//
// const blobTest = new Blob([data], {type: 'text/csv;charset=utf-8;'});
// const url = URL.createObjectURL(blobTest);
//
//
//
// const downloadMany = (urls:any) => {
//     return Promise.all(urls.map((url:any) => downloadOne(url)));
// }
//
// const downloadByGroup =  (urls:any, files_per_group=1) => {
//     return Promise.map(
//         urls,
//         async url => {
//             return downloadOne(url);
//         },
//         {concurrency: files_per_group}
//     );
// }
//
//
// const downloadOne =  (url:any) => {
//     console.log("Download Started");
//     return fetch(url).then(resp => resp.blob());
// };
//
// //EXPORT AS A ZIP FILE ---------------------------------------------------------------------------------------------
// const exportAsZip = (urls:any) => {
//     const zip = new JsZip();
//     urls.forEach((blob:any, index:number) => {
//         console.log(blob);
//         zip.file(`${filename}-${index}.csv`, blob);
//     });
//     zip.generateAsync({type: 'blob'}).then(zipFile => {
//         const currentDate = new Date().getTime();
//         const fileName = `combined-${currentDate}.zip`;
//         return FileSaver.saveAs(zipFile, fileName);
//     });
// }
//
// // TRIGGERING DOWNLOAD ---------------------------------------------------------------------------------------------
// const handleDownload = () => {
//     window.open(url, "_blank");
//
//     // return downloadByGroup(downloadUrls, 1).then(exportAsZip);
//
// }
//
// console.log("downloadUrls", downloadUrls);
