let courseUl = document.querySelector('#course-list');

for (let course in courseList) {
	/* 
	 * !!!Spaghetti!!!
	 *
	 * Iterates through courses in data.js and creates the 
	 * list of courses dynamically
	 */

	let slot = courseList[course];

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

	courseUl.appendChild(courseLi);
	courseLi.appendChild(courseCheckBox);
	courseLi.appendChild(courseLabel);
}

function generate() {
	let courseCheckBoxes = document.querySelectorAll('input');
	courseCheckBoxes.forEach(function(course) {
		if (course.checked) {
			let courseCode = course.getAttribute('id');
			let courseSlot = course.getAttribute('class');
			let courseSlotInTimetable = document.querySelectorAll('td.' + courseSlot);
			courseSlotInTimetable.forEach(function(slotInTimetable) {
				slotInTimetable.textContent = courseCode;
			})
		}
	})
}

let generateButton = document.querySelector('form > button');
generateButton.onclick = generate;
