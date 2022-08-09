let courseUl = document.querySelector('#course-list');
let schoolTabs = document.querySelector('#school-tabs');
let schoolList = document.querySelector('#school-list');

let occupiedSlotsGlob = [];

/* Generating the DOM tree containing the schools
 * and the list of courses */
for (let school in schools) {
	let schoolTab = document.createElement('button');
	schoolTab.textContent = school;
	schoolTab.addEventListener('click', function() {
		document.querySelectorAll('.school').forEach(function(b) { b.classList.add('hidden') });
		let schoolCourses = document.querySelector('#' + school);
		schoolCourses.classList.remove('hidden');
		schoolCourses.classList.add('visible');
	});
	schoolTabs.appendChild(schoolTab);

	let schoolDiv = document.createElement('div');
	schoolDiv.classList.add('school');
	school !== 'SBS' ? schoolDiv.classList.add('hidden') : null;
	schoolDiv.setAttribute('id', school);

	let schoolHeader = document.createElement('h3');
	schoolHeader.textContent = schools[school].name;

	let schoolUl =  document.createElement('ul');
	schoolList.appendChild(schoolDiv);
	schoolDiv.appendChild(schoolHeader);
	schoolDiv.appendChild(schoolUl);

	schools[school].courses.forEach(function(course) {
		let slot = courses[course].slot;

		let courseLabel = document.createElement('label');
		courseLabel.setAttribute('for', course);
		courseLabel.textContent = course;
		courseLabel.textContent += ": " + courses[course].name;

		let courseLi = document.createElement('li');
		courseLi.classList.add('course');

		let courseCheckBox = document.createElement('input');
		courseCheckBox.setAttribute('type', 'checkbox');
		courseCheckBox.setAttribute('value', course);
		courseCheckBox.setAttribute('id', course);

		schoolUl.appendChild(courseLi);
		courseLi.appendChild(courseCheckBox);
		courseLi.appendChild(courseLabel);
	});
}

/* A function that cleans the cells of the timetable */
function clean() {
	let slotsInTimetable = document.querySelectorAll('td:not(.lunch)');

	slotsInTimetable.forEach(function(slot) {
		slot.textContent = '';
	});
	// Cleans legend
	document.getElementById("legend").textContent = "";

	// Removes colors from cells
	let slots = document.getElementsByTagName("td");
	for (let i = 0; i < slotsInTimetable.length; i++) {
		slots[i].style.backgroundColor = '#fff';
	}
}

/* To deal with conflicts like A and A1 */
function slotCompare(currentc, newc) {
	if(currentc.length != newc.length)
	 	return currentc.charAt(0) === newc.charAt(0);
	return currentc === newc;
}

/* Replaces the slots in the timetable with the selected
 * course in that slot */
function generate(nick) {
	clean();
	let courseCheckBoxes = document.querySelectorAll("input:not([id='color'])");
	let occupiedSlots = [];
	let legendItems = [];

	let h2leg = document.getElementById('h2leg');
	h2leg.classList.remove('hidden');
	h2leg.classList.add('visible');

	let addColors = document.getElementById("color").checked;

	courseCheckBoxes.forEach(function(course) {
		if (course.checked) {
			let courseCode = course.getAttribute('id');
			let [courseName, courseNick, courseSlot] = Object.values(courses[courseCode]);
			legendItems.push([courseSlot, courseCode, courseNick, courseName]);

			for (let i = 0; i < occupiedSlots.length; ++i) {
				if (slotCompare(occupiedSlots[i], courseSlot)) {
					alert("Schedule conflict detected. Course selection may need a modification.");
					location = location;
				}
			}

			occupiedSlots.push(courseSlot);

			let courseSlotInTimetable = document.querySelectorAll('td.' + courseSlot);
			courseSlotInTimetable.forEach(function(slotInTimetable) {
				slotInTimetable.textContent = nick ? courseNick : courseCode;
			});
		}
	})

	// Coloring
	if (addColors) {
		occupiedSlots = occupiedSlots.sort();
		occupiedSlots.forEach((courseSlot, i) => {
			let courseSlotInTimetable = document.querySelectorAll('td.' + courseSlot);
			courseSlotInTimetable.forEach(slotInTimetable => {
				slotInTimetable.style.backgroundColor = colors[i];
			});
		});
	}

	// Legend
    legendItems = legendItems.sort(function(a, b) {
        return a[0] > b[0] ? 1 : -1;
    });

	legendItems.forEach((element, i) => {
        let listItem = document.createElement("li");
        listItem.textContent = "Slot " + element[0] + ": " + element[1] + " / " + element[2] + ":  " + element[3];
		if (addColors)
			listItem.style.color = colors[i];
        document.getElementById("legend").appendChild(listItem);
	});

	// Preparing for PDF generation
	occupiedSlotsGlob = [];
	legendItems.forEach(item => {
		occupiedSlotsGlob.push(nick ? item[2] : item[1]);
	});

	occupiedSlots = [];
	legendItems = [];
}

function generatePdf() {
	let doc = new jspdf.jsPDF({
		orientation: 'landscape',
		unit: 'pt'
	});

	let notPainted = [
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
		'', 'Day', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
		'08:30', '09:30', '10:30', '11:30', '12:30', '13:30', '14:30', '15:30',
		'16:30', '17:30', '18:30', 'No Class', 'No', 'Lunch Break', 'Lunch'
	];

	let centerX = doc.internal.pageSize.getWidth() / 2;
	doc.text('Timetable for Fall Semester 2022', centerX, 25, {align: 'center'});
	doc.autoTable({
		html: 'table',
		theme: 'plain',
		styles: {
			cellPadding: 10,
			fontSize: 12,
			lineColor: 10,
			lineWidth: .5,
			overflow: 'linebreak',
			halign: 'center',
			valign: 'middle'
		},
		// Coloring in PDF
		didParseCell(data) {
			let addColors = document.getElementById("color").checked;
			if (addColors) {
				// Zips two arrays of differing lengths with the final array of arrays having the length of the smaller array
				const zip = (a, b) => Array(Math.min(b.length, a.length)).fill().map((_, i) => [a[i], b[i]]);
				// Creates a Course-Color dictionary
				let zippedDict = Object.fromEntries(zip(occupiedSlotsGlob, colors));
				// Paints cells
				if (!notPainted.includes(data.cell.text[0]))
					data.cell.styles.fillColor = zippedDict[data.cell.text[0]];
			}
		}
	});

	// Legend
	let finalY = doc.lastAutoTable.finalY + 30;
	doc.text('Legend', 40, finalY);
	doc.html(document.getElementById('legend'), {
		callback: function (doc) {
			doc.save("tt_fall_2022.pdf");
		},
		x: 40,
		y: finalY + 7,
		html2canvas: {
			scale: 0.8,
		}
	});
}

let generateCodeButton = document.querySelector('button#gen-code');
generateCodeButton.addEventListener('click', function() { generate(false) });

let generateNickButton = document.querySelector('button#gen-nick');
generateNickButton.addEventListener('click', function() { generate(true) });

let pdfButton = document.querySelector('button#pdf');
pdfButton.onclick = generatePdf;

let resetButton = document.querySelector('button#reset');
resetButton.onclick = function() {
	location = location;
}
