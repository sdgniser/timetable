function School(code, name, courses) {
	this.code = code;
	this.name = name;
	this.courses = courses;
}

function Course(name, nick, slot) {
	this.name = name;
	this.nick = nick;
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

	/* Biology */
	'B204': new Course('Cell Biology', 'C Bio', 'T2'),
	'B205': new Course('Genetics', 'Gene', 'T1'),

	'B355': new Course('Structural Biology', 'S Bio', 'T6'),
	'B304': new Course('Molecular Biology', 'M Bio', 'T1'),
	'B305': new Course('Immunology', 'Immuno', 'T8'),
	'B306': new Course('Evolutionary Biology', 'E Bio', 'T2'),
	'B353': new Course('Plant Developmental Biology', 'PD Bio', 'T7'),

	'B453': new Course('Advanced Biochemistry', 'ABC', 'T4'),
	'B455': new Course('Enzymology', 'Enzyme', 'T5'),
	'B403': new Course('Bioinformatics and Compuatational Biology', 'BCB', 'T1'),
	'B404': new Course('Evolutionary Biology', 'E Bio', 'T2'),

	'B554': new Course('Cancer Biology', 'Cancer', 'T6'),
	'B558': new Course('Quantitative Biology', 'Quant', 'T7'),
	'B556': new Course('Immune Regulation and Infection Immunity', 'Immune', 'T8'),

	/* Chemistry */
	'C204': new Course('Reagents in Organic Synthesis', 'ROS', 'T6'),
	'C205': new Course('Main Group and Organometallic Chemistry', 'MGOC', 'T3'),
	'C206': new Course('Quantum Chemistry I', 'QC I', 'T4'),

	'C304': new Course('Coordination Chemistry', 'Coord', 'T6'),
	'C305': new Course('Chemical Binding', 'Bind', 'T4'),
	'C306': new Course('Physical Methods in Chemistry I', 'PMC I', 'T3'),
	
	'C402': new Course('Chemical Rate Processes', 'CRP', 'T7'),
	
	'C555': new Course('Principles of Drug Action', 'PDA', 'L2'),
	'C562': new Course('Polymer Chemistry', 'Poly C', 'L1'),
	'C565': new Course('Advanced Organic Chemistry', 'AOC', 'L2'),
	'C568': new Course('Advanced Fluorescence Spectroscopy', 'AFS', 'L3'),

	/* Computer Science */
	'CS202': new Course('Discrete Structures and Computation', 'DSC', 'T7'),
	'CS452': new Course('Algorithmic Coding Theory', 'ACT', 'T3'),
	'CS456': new Course('Computational Geometry', 'CG', 'T5'),

	/* Mathematics */
	'M204': new Course('Metric Spaces', 'Metric', 'T1'),
	'M205': new Course('Linear Algebra', 'Lin Alg', 'T4'),
	'M206': new Course('Probability Theory', 'Prob', 'T2'),
	'M208': new Course('Graph Theory', 'Graph', 'T3'),

	'M301': new Course('Lebesgue Integration', 'Lebesgue', 'T8'),
	'M307': new Course('Field Theory', 'Fields', 'L3'),
	'M308': new Course('Complex Analysis', 'Complex', 'T6'),
	'M310': new Course('Geometry of Curves and Surfaces', 'Geom', 'L1'),
	'M311': new Course('Numerical Analysis', 'Num', 'T7'),

	'M402': new Course('Representations of Finite Group', 'Rep FG', 'T3'),
	'M404': new Course('Algebraic Topology', 'ATop', 'T2'),
	'M454': new Course('Partial Differential Equations', 'PDEs', 'T8'),

	'M552': new Course('Analytic Number Theory', 'ANT', 'L2'),
	'M553': new Course('Classical Groups', 'Groups', 'L1'),
	'M599': new Course('Algebraic Topology', 'ATop', 'T2'),

	/* Physics */
	'P204': new Course('Electromagnetism I', 'EM I', 'T3'),
	'P205': new Course('Mathematical Methods II', 'MM II', 'T6'),
	'P206': new Course('Quantum Mechanics I', 'QM I', 'T5'),

	'P301': new Course('Electromagnetism II', 'EM II', 'T7'),
	'P305': new Course('Atoms, Molecules and Radiation', 'AMR', 'T5'),
	'P306': new Course('Introduction to Condensed Matter Physics', 'CMP', 'T6'),
	
	'P456': new Course('Nonlinear Optics and Lasers', 'NLOL', 'T8'),
	'P457': new Course('General Relativity and Cosmology', 'GRC', 'T8'),
	'P460': new Course('Many Particle Physics', 'MPP', 'T6'),
	'P466': new Course('Quantum and Nano Electronics', 'QNE', 'T7'),
	'P467': new Course('Nonlinear Dynamics and Chaos', 'Chaos', 'T3'),
	'P470': new Course('Quantum Field Theory II', 'QFT II', 'T5'),
	'P472': new Course('Experimental High Enery Physics', 'EHEP', 'T7'),
};

for (let course in courses) {
	for (let school in schools) {
		if (schools[school].code === course.match(/^[^0-9]*/)[0]) {
			schools[school].courses.push(course);
		}
	}
}
