function School(code, name, courses) {
	this.code = code;
	this.name = name;
	this.courses = courses;
}

function Course(name, slot) {
	this.name = name;
	this.slot = slot;
}

let schools = {
	'SBS': new School('B', 'School of Biological Sciences', []),
	'SCS': new School('C', 'School of Chemical Sciences', []),
	'SCPS': new School('CS', 'School of Computer Sciences', []),
	'SMS': new School('M', 'School of Mathematical Sciences', []),
	'SPS': new School('P', 'School of Physical Sciences', []),
};

let courses = {
	'B204': new Course('Cell Biology', 'T2'),
	'B205': new Course('Genetics', 'T1'),
	'B355': new Course('Structural Biology', 'T6'),

	'C204': new Course('Reagents in Organic Synthesis', 'T6'),
	'C205': new Course('Main Group and Organometallic Chemistry', 'T3'),
	'C206': new Course('Quantum Chemistry I', 'T4'),

	'CS202': new Course('Discrete Structures and Computation', 'T7'),
	'CS452': new Course('Algorithmic Coding Theory', 'T3'),
	'CS456': new Course('Computational Geometry', 'T5'),

	'M204': new Course('Metric Spaces', 'T1'),
	'M205': new Course('Linear Algebra', 'T4'),
	'M206': new Course('Probability Theory', 'T2'),
	'M208': new Course('Graph Theory', 'T3'),

	'P204': new Course('Electromagnetism I', 'T3'),
	'P205': new Course('Mathematical Methods II', 'T6'),
	'P206': new Course('Quantum Mechanics I', 'T5'),
};

for (let course in courses) {
	for (let school in schools) {
		if (schools[school].code === course.match(/^[^0-9]*/)[0]) {
			schools[school].courses.push(course);
		}
	}
}
