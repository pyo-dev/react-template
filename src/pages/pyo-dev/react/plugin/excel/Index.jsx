import Highlight from 'react-highlight'

import { useState } from "react";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

export const PyoDevPluginExcel = () => {
	const pageCode = `// 페이지
import { useState } from "react";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

export const 컴포넌트이름 = () => {
	const jsonData = [
		{ name: "John Doe", age: 28, city: "New York", image: "/src/assets/img/banner-1.png" },
		{ name: "Jane Smith", age: 32, city: "Los Angeles", image: "/src/assets/img/banner-2.png" },
		{ name: "David Johnson", age: 45, city: "Chicago", image: "/src/assets/img/banner-1.png" },
	];

	const downloadExcel = async () => {
		const workbook = new ExcelJS.Workbook();
		const sheet = workbook.addWorksheet("Sheet1");

		// 헤더 추가
		sheet.columns = [
			{ header: "Name", key: "name", width: 20 },
			{ header: "Age", key: "age", width: 10 },
			{ header: "City", key: "city", width: 20 },
			{ header: "Image", key: "image", width: 30 },
		];

		// 데이터 추가
		jsonData.forEach((data) => {
			sheet.addRow({
				name: data.name,
				age: data.age,
				city: data.city,
				image: data.image,
			});
		});

		// 이미지 추가
		for (let i = 0; i < jsonData.length; i++) {
			const data = jsonData[i];
			const row = i + 2; // 데이터 행 위치
			if (data.image) {
				try {
					const imageResponse = await fetch(data.image);
					const imageBlob = await imageResponse.blob();
					const imageBuffer = await imageBlob.arrayBuffer();
					const imageId = workbook.addImage({
						buffer: imageBuffer,
						extension: "png",
					});
					
					// 이미지 크기 설정
					const imageWidth = 100; // 이미지 너비 (픽셀)
					const imageHeight = 100; // 이미지 높이 (픽셀)

					// 이미지 삽입
					sheet.addImage(imageId, {
						tl: { col: 3, row: row - 1 }, // 시작 위치
						ext: { width: imageWidth, height: imageHeight }, // 이미지 크기
					});

					// 행 높이 조정
					sheet.getRow(row).height = imageHeight * 0.75; // 이미지 높이에 맞게 행 높이 조정
				} catch (error) {
					console.error("Image loading failed:", error);
				}
			}
		}

		// 엑셀 파일 다운로드
		workbook.xlsx.writeBuffer().then((buffer) => {
			const blob = new Blob([buffer], { type: "application/octet-stream" });
			saveAs(blob, "data_with_images.xlsx");
		});
	};

	const [upExcelData, setUpExcelData] = useState([])

	const handleFileUpload = async (event) => {
		const file = event.target.files[0];
		if (file) {
			const workbook = new ExcelJS.Workbook();
			await workbook.xlsx.load(file);

			const sheet = workbook.worksheets[0]; // 첫 번째 시트
			const data = [];

			sheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
				if (rowNumber === 1) return; // 헤더 행은 무시

				const rowData = {};
				row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
					const header = sheet.getCell(1, colNumber).value; // 첫 번째 행에서 헤더 가져오기
					rowData[header] = cell.value;
				});
				data.push(rowData);
			});

			setUpExcelData(data);
		}
	};

	return (
		<div>
			<button onClick={downloadExcel}>Download Excel</button>
			<div>
				<div>파일 업로드</div>
				<input
					type="file"
					accept=".xlsx, .xls"
					onChange={handleFileUpload}
				/>
				<div>
					<div>업로드 데이터</div>
					<pre>{JSON.stringify(upExcelData, null, 2)}</pre>
				</div>
			</div>
		</div>
	);
};
`

	const jsonData = [
		{ name: "John Doe", age: 28, city: "New York", image: "/src/assets/img/banner-1.png" },
		{ name: "Jane Smith", age: 32, city: "Los Angeles", image: "/src/assets/img/banner-2.png" },
		{ name: "David Johnson", age: 45, city: "Chicago", image: "/src/assets/img/banner-1.png" },
	];

	const downloadExcel = async () => {
		const workbook = new ExcelJS.Workbook();
		const sheet = workbook.addWorksheet("Sheet1");

		// 헤더 추가
		sheet.columns = [
			{ header: "Name", key: "name", width: 20 },
			{ header: "Age", key: "age", width: 10 },
			{ header: "City", key: "city", width: 20 },
			{ header: "Image", key: "image", width: 30 },
		];

		// 데이터 추가
		jsonData.forEach((data) => {
			sheet.addRow({
				name: data.name,
				age: data.age,
				city: data.city,
				image: data.image,
			});
		});

		// 이미지 추가
		for (let i = 0; i < jsonData.length; i++) {
			const data = jsonData[i];
			const row = i + 2; // 데이터 행 위치
			if (data.image) {
				try {
					const imageResponse = await fetch(data.image);
					const imageBlob = await imageResponse.blob();
					const imageBuffer = await imageBlob.arrayBuffer();
					const imageId = workbook.addImage({
						buffer: imageBuffer,
						extension: "png",
					});
					
					// 이미지 크기 설정
					const imageWidth = 100; // 이미지 너비 (픽셀)
					const imageHeight = 100; // 이미지 높이 (픽셀)

					// 이미지 삽입
					sheet.addImage(imageId, {
						tl: { col: 3, row: row - 1 }, // 시작 위치
						ext: { width: imageWidth, height: imageHeight }, // 이미지 크기
					});

					// 행 높이 조정
					sheet.getRow(row).height = imageHeight * 0.75; // 이미지 높이에 맞게 행 높이 조정
				} catch (error) {
					console.error("Image loading failed:", error);
				}
			}
		}

		// 엑셀 파일 다운로드
		workbook.xlsx.writeBuffer().then((buffer) => {
			const blob = new Blob([buffer], { type: "application/octet-stream" });
			saveAs(blob, "data_with_images.xlsx");
		});
	};

	const [upExcelData, setUpExcelData] = useState([])

	const handleFileUpload = async (event) => {
		const file = event.target.files[0];
		if (file) {
			const workbook = new ExcelJS.Workbook();
			await workbook.xlsx.load(file);

			const sheet = workbook.worksheets[0]; // 첫 번째 시트
			const data = [];

			sheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
				if (rowNumber === 1) return; // 헤더 행은 무시

				const rowData = {};
				row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
					const header = sheet.getCell(1, colNumber).value; // 첫 번째 행에서 헤더 가져오기
					rowData[header] = cell.value;
				});
				data.push(rowData);
			});

			setUpExcelData(data);
		}
	};

	return (
		<div className="pyo-panel pyo-panel-flex-wrap">
			<Highlight className='javascript pyo-panel-code'>{pageCode}</Highlight>
			<div>
				<button onClick={downloadExcel}>Download Excel</button>
				<div>
					<div>파일 업로드</div>
					<input
						type="file"
						accept=".xlsx, .xls"
						onChange={handleFileUpload}
					/>
					<div>
						<div>업로드 데이터</div>
						<pre>{JSON.stringify(upExcelData, null, 2)}</pre>
					</div>
				</div>
			</div>
		</div>
	);
};


