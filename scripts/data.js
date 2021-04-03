let year = '2021';
let semester = 'Spring';

function School(code, name, courses) {
	this.code = code;
	this.name = name;
	this.courses = courses;
}

function short_name(school) {
	return school.name.split(' ').slice(2).join(' ')
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
//	'SHSS': new School('H', 'School of Humanities and Social Sciences', []),
};

let courses = {

	/* Biology */
	'B204': new Course('Cell Biology', 'C Bio', 'F'),
	'B205': new Course('Genetics', 'Gene', 'G'),

	'B304': new Course('Molecular Biology', 'M Bio', 'G'),
	'B305': new Course('Immunology', 'Immuno', 'A'),
	'B306': new Course('Evolutionary Biology', 'E Bio', 'L'),
	'B351': new Course('Principles of Drug Design', 'Drug', 'D'),
	'B352': new Course('Endocrinology', 'Endo', 'B'),
	'B353': new Course('Plant Developmental Biology', 'PD Bio', 'I'),

	'B405': new Course('Biotechniques', 'Biotech', 'G'),
	'B453': new Course('Advanced Biochemistry', 'ABC', 'A'),
	'B454': new Course('Advanced Microbiology', 'AμB', 'C'),
	'B455': new Course('Enzymology', 'Enzyme', 'E'),

	'B554': new Course('Cancer Biology', 'Cancer', 'B'),
	'B558': new Course('Quantitative Biology', 'Quant', 'A'),
	'B556': new Course('Immune Regulation and Infection Immunity', 'Immune', 'J'),

	/* Chemistry */
	'C204': new Course('Reagents in Organic Synthesis', 'ROS', 'E'),
	'C205': new Course('Main Group and Organometallic Chemistry', 'MGOC', 'C'),
	'C206': new Course('Quantum Chemistry I', 'QC I', 'J'),

	'C304': new Course('Coordination Chemistry', 'Coord', 'K'),
	'C305': new Course('Chemical Binding', 'Bind', 'H'),
	'C306': new Course('Physical Methods in Chemistry I', 'PMC I', 'C'),
	
	'C402': new Course('Chemical Rate Processes', 'CRP', 'K'),
	
	'C554': new Course('Crystallography', 'Crystal', 'C'),
	'C556': new Course('Advanced Bio-inorganic Chemistry', 'ABiC', 'I'),
	'C565': new Course('Advanced Organic Chemistry', 'AOC', 'A'),
	'C559': new Course('Supramolecular Chemistry', 'Supra', 'B'),
	'C568': new Course('Advanced Fluorescence Spectroscopy', 'AFS', 'B'),
	'C571': new Course('Statistical Mechanics', 'Stat Mech', 'A'),

	/* Computer Science */
	'CS202': new Course('Discrete Structures and Computation', 'DSC', 'H'),
	'CS451': new Course('Modern Cryptology', 'Crypto', 'E'),
	'CS458': new Course('Approximation Algorithms', 'Approx', 'E'),

	/* Mathematics */
	'M204': new Course('Metric Spaces', 'Metric', 'E'),
	'M205': new Course('Linear Algebra', 'Lin Alg', 'K'),
	'M206': new Course('Probability Theory', 'Prob', 'C'),
	'M208': new Course('Graph Theory', 'Graph', 'G'),

	'M301': new Course('Lebesgue Integration', 'Lebesgue', 'G'),
	'M307': new Course('Field Theory', 'Fields', 'D'),
	'M308': new Course('Complex Analysis', 'Complex', 'A'),
	'M310': new Course('Geometry of Curves and Surfaces', 'Geom', 'F'),

	'M402': new Course('Representation of Finite Groups', 'Rep FG', 'B'),
	'M404': new Course('Algebraic Topology', 'ATop', 'H'),
	'M456': new Course('Algebraic Geometry', 'AGeo', 'C'),

	'M554': new Course('Ergodic Theory', 'Groups', 'A'),
	'M558': new Course('Representation of Linear Lie Groups', 'Rep LLG', 'A'),
	'M568': new Course('Ordered Linear Spaces', 'OLS', 'A'),

	/* Physics */
	'P204': new Course('Electromagnetism I', 'EM I', 'I'),
	'P205': new Course('Mathematical Methods II', 'MM II', 'G'),
	'P206': new Course('Quantum Mechanics I', 'QM I', 'A'),

	'P301': new Course('Electromagnetism II', 'EM II', 'F'),
	'P305': new Course('Atoms, Molecules and Radiation', 'AMR', 'I'),
	'P306': new Course('Introduction to Condensed Matter Physics', 'CMP', 'A'),
	
	'P455': new Course('Introduction to Phase Transition and Critial Phenomena', 'Phase', 'B'),
	'P454': new Course('Particle Physics', 'Particle', 'F'),
	'P457': new Course('General Relativity and Cosmology', 'GRC', 'H'),
	'P461': new Course('Physics of Mesoscipic Systems', 'Meso', 'D'),
	'P468': new Course('Magnetism and Superconductivity', 'Magnets', 'C'),
	'P477': new Course('Relativistic Nucleus-Nucleus Collisions and Quark Gluon Plasma', 'RNNCQGP', 'D'),
};

for (let course in courses) {
	for (let school in schools) {
		if (schools[school].code === course.match(/^[^0-9]*/)[0]) {
			schools[school].courses.push(course);
		}
	}
}
