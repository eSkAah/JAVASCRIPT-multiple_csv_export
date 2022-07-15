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

    const downloadableUrls = [];

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
            console.log(csvRows);
            csv.push(csvRows.join('\n'));

        });

        return csv
    }

    const handleDownload = () => {

        const csvData = objectToCsv(data);

        console.log("CSV DATA: ", csvData);

        csvData.forEach( (csv: any) => {
            const link = document.createElement('a');
            link.download = csv.label;
            // @ts-ignore
            let file = new File([csvData], 'budget.csv', {type: 'text/csv;charset=utf-8'});
            link.href = URL.createObjectURL(file);
            link.click();
        });

    }

    return(
      <>
          <button onClick={handleDownload}>Download</button>
      </>

    )
}





