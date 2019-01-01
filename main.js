let courseUl = document.querySelector('#course-list');
let schoolList = document.querySelector('#school-list');

for (let school in courseList) {
	let schoolDiv = document.createElement('div');
	schoolDiv.setAttribute('class', 'school');
	schoolDiv.setAttribute('id', school);

	let schoolHeader = document.createElement('h3');
	schoolHeader.textContent = fullName[school];

	let schoolUl =  document.createElement('ul');
	schoolList.appendChild(schoolDiv);
	schoolDiv.appendChild(schoolHeader);
	schoolDiv.appendChild(schoolUl);

	for (let course in courseList[school]) {
		let slot = courseList[school][course];

		let courseLabel = document.createElement('label');
		courseLabel.setAttribute('for', course);
		courseLabel.textContent = course;

		let courseLi = document.createElement('li');
		courseLi.setAttribute('class', 'course');

		let courseCheckBox = document.createElement('input');
		courseCheckBox.setAttribute('type', 'checkbox');
		courseCheckBox.setAttribute('value', course);
		courseCheckBox.setAttribute('id', course);
		courseCheckBox.setAttribute('class', slot);

		schoolUl.appendChild(courseLi);
		courseLi.appendChild(courseCheckBox);
		courseLi.appendChild(courseLabel);
	}
}

let occupiedSlots = []
function generate() {
	let courseCheckBoxes = document.querySelectorAll('input');
	courseCheckBoxes.forEach(function(course) {
		if (course.checked) {
			let courseCode = course.getAttribute('id');
			let courseSlot = course.getAttribute('class');
			for (let i = 0; i < occupiedSlots.length; ++i) {
				if (occupiedSlots[i] === courseSlot) {
					alert("Conflict detected. Call a UN peacekeeping mission.");
				}
			}

			occupiedSlots.push(courseSlot);

			let courseSlotInTimetable = document.querySelectorAll('td.' + courseSlot);
			courseSlotInTimetable.forEach(function(slotInTimetable) {
				slotInTimetable.textContent = courseCode;
			})
		}
	})
	occupiedSlots = [];
}

let generateButton = document.querySelector('button#gen');
generateButton.onclick = generate;

let resetButton = document.querySelector('button#reset');
resetButton.onclick = function() {
	location = location;
}
