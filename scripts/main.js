let courseUl = document.querySelector('#course-list');
let schoolTabs = document.querySelector('#school-tabs');
let schoolList = document.querySelector('#school-list');

/* Generating the DOM tree containing the schools
 * and the list of courses */
for (let school in schools) {
	let schoolTab = document.createElement('button');
	schoolTab.textContent = short_name(schools[school])
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
	})
}

/* Replaces the slots in the timetable with the selected
 * course in that slot */
function generate(nick) {
	clean();

	let courseCheckBoxes = document.querySelectorAll('input');
	let occupiedSlots = []
	courseCheckBoxes.forEach(function(course) {
		if (course.checked) {
			let courseCode = course.getAttribute('id');
			let courseSlot = courses[courseCode].slot;
			for (let i = 0; i < occupiedSlots.length; ++i) {
				if (occupiedSlots[i] === courseSlot) {
					alert("Schedule conflict detected. Course selection may need a modification.");
					location = location;
				}
			}

			occupiedSlots.push(courseSlot);

			let courseSlotInTimetable = document.querySelectorAll('td.' + courseSlot);
			courseSlotInTimetable.forEach(function(slotInTimetable) {
				slotInTimetable.textContent = nick ? courses[courseCode].nick : courseCode;
			})
		}
	})
	occupiedSlots = [];
}

function generatePdf() {
	let doc = new jsPDF({
		orientation: 'landscape',
		unit: 'pt'
	})

	let timetable = document.querySelector('table');
	let jsonTable = doc.autoTableHtmlToJson(timetable);
	doc.text('Timetable for ' + semester + ' Semester ' + year, 300, 25);
	doc.autoTable(jsonTable.columns, jsonTable.data, {
		styles: {cellPadding: 10,
				 fontSize: 12,
				 lineColor: 10,
				 lineWidth: .5,
				 overflow: 'linebreak',
				 halign: 'center',
				 valign: 'middle'},
		theme: 'plain'});

	doc.save(semester + year + '.pdf');
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
