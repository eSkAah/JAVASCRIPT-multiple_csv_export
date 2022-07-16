import JsZip from "jszip"
import FileSaver from "file-saver";

interface IExportCsvProps {
    data: any;
}

interface IBudget {
    budgetId: string;
    id: string;
    label: string;
    lines: ILine[];
}

interface ILine {
    budgetId: string;
    id: string;
    label: string;
    plannedBudget: number;
}

export const ExportCsv = ({data}: IExportCsvProps) => {

    let downloadableFiles: any[] = [];

    //TODO : If platform = MacOs use comma, if Windows use / for csv
    const platform = navigator?.userAgentData?.platform || navigator?.platform || "unknown";
    console.log("OS :",platform)

    const objectToCsv = (data: any) => {

        const csv: any[] = [];

        data.forEach((budget: IBudget) => {
            const csvRows = [];
            const headers = Object.keys(budget.lines[0]);
            csvRows.push(headers.join(','));

            console.log("HEADERS: ", headers);
            for (const row of budget.lines) {
                const values = headers.map((header:any) => {
                    // @ts-ignore
                    const val = row[header];
                    return `"${val}"`;
                });
                csvRows.push(values.join(','));
            }
            csv.push({[budget.label] : csvRows.join('\n')});

        });

        return csv
    }
    const exportAsZip = (files:any) => {

    const zip = new JsZip();
    console.log(files)

    files.forEach((file:any, index:number) => {
        console.log(file);
        zip.file(`${file.name}-${index}.csv`, file);
    });
    zip.generateAsync({type: 'blob'}).then(zipFile => {
        const currentDate = new Date().getTime();
        const fileName = `Financials-data-${currentDate}.zip`;
        return FileSaver.saveAs(zipFile, fileName);
    });
}


    const handleDownload = () => {
        const csvData = objectToCsv(data);
        console.log("CSV DATA: ", csvData);

        csvData.forEach( (csv: any) => {
            const label = Object.keys(csv)[0];
            const link = document.createElement('a');
            link.download = label;
            // @ts-ignore
            let file = new File([csv[label]], label, {type: 'text/csv;charset=utf-8'});
            downloadableFiles.push(file);
            // link.href = URL.createObjectURL(file);
            // link.click();
        });

        exportAsZip(downloadableFiles);
    }

    return(
      <>
          <button onClick={handleDownload}>Download</button>
      </>

    )
}





