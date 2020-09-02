let year = '2020';
let semester = 'Fall';

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
	'SHSS': new School('H', 'School of Humanities and Social Sciences', []),
	'SMS': new School('M', 'School of Mathematical Sciences', []),
	'SPS': new School('P', 'School of Physical Sciences', []),
};

let courses = {

	/* Biology */
	'B201': new Course('Microbiology', 'μBio', 'B'),
	'B202': new Course('Biochemistry', 'BChem', 'E'),
	'B203': new Course('Biophysics & Biostatistics', 'BPhy', 'G'),
	'B301': new Course('Physiology I (Animal)', 'APhys', 'A'),
	'B302': new Course('Physiology II (Plant)', 'PPhys', 'B'),
	'B303': new Course('Ecology', 'Eco', 'C'),
	'B354': new Course('Neurobiology', 'Neuro', 'I'),
	'B402': new Course('Developmental Biology', 'Dev Bio', 'C'),
	'B403': new Course('Bioinformatics', 'BInfo', 'D'),
	'B451': new Course('Advanced Cell Biology', 'ACell', 'E'),
	'B452': new Course('Genetic Engineering', 'Genetic', 'L'),
	'B460': new Course('Virology', 'Viro', 'F'),
	'B551': new Course('Advanced Molecular Biology', 'AMol', 'I'),
	'B552': new Course('Advanced Immunology', 'AImmuno', 'K'),
	
	'B601': new Course('Bioinformatics and Computational Biology', 'BInfo', 'D'),
	'B602': new Course('Biotechniques', 'BTech', 'L'),

	/* Chemistry */
	'C201': new Course('Basic Inorganic Chemistry', 'IChem', 'K'),
	'C207': new Course('Mathematical Methods for Chemists', 'MMChem', 'G'),
	'C203': new Course('Reaction Mechanisms in Organic Chemistry', 'OChem', 'H'),
	'C301': new Course('Physical Organic Chemistry', 'POChem', 'D'),
	'C302': new Course('Molecular Spectroscopy and Group Theory', 'Spectre', 'B'),
	'C307': new Course('Thermodynamics and Electrochemistry', 'Thermo', 'H'),
	'C401': new Course('Physical Methods in Chemistry II', 'PChem II', 'G'),
	'C403': new Course('Chemistry of Heterocycles and Natural Products', 'Hetero', 'B'),
	'C563': new Course('Molecular Reaction Dynamics', 'RDyn', 'C'),
	'C566': new Course('Catalysis: Reaction Mechanisms and Applications', 'Catalysis', 'C'),
	'C572': new Course('Frontiers in Organic Chemistry', 'FOChem', 'D'),
	'C567': new Course('Advanced Main Group Chemistry', 'AdvMG', 'L'),

	/* Computer Science */
	'CS201': new Course('Theory of Computation', 'ThComp', 'L'),
	'CS301': new Course('Design and Analysis of Algorithms', 'Algo', 'K'),
	'CS454': new Course('Linear Programming and Combinatorial Optimization', 'Optim', 'K'),
	'CS460': new Course('Machine Learning', 'ML', 'J'),

	/* Humanities */
	'H209': new Course('Speculative Fiction', 'SpecFic', 'J1'),
	'H225': new Course('Introduction to Psychology', 'Psych', 'J1'),
	'H235': new Course('Sociology of Science and Technology', 'Socio', 'J2'),
	'H238': new Course('Life and Community in the Urban World', 'Urban', 'J2'),

	/* Mathematics */
	'M201': new Course('Real Analysis', 'RAnal', 'C'),
	'M202': new Course('Group Theory', 'Groups', 'H'),
	'M203': new Course('Discrete Mathematics', 'Discrete', 'B'),
	'M207': new Course('Number Theory', 'Number', 'A'),
	'M302': new Course('Rings and Modules', 'Modules', 'D'),
	'M303': new Course('Differential Equation', 'DiffQ', 'G'),
	'M304': new Course('Topology', 'Topo', 'F'),
	'M305': new Course('Statistics', 'Stats', 'B'),
	'M306': new Course('Calculus of Several Variables', 'SVC', 'C'),
	'M401': new Course('Functional Analysis', 'FAnal', 'D'),
	'M403': new Course('Commutative Algebra', 'CommA', 'E'),
	'M457': new Course('Algebraic Graph Theory', 'GraphA', 'L'),
	'M483': new Course('Introduction to Manifolds', 'Manifolds', 'C'),
	'M475': new Course('Incidence Geometry', 'IGeo', 'L'),
	'M466': new Course('Measure Theory', 'Measure', 'G'),

	/* Physics */
	'P201': new Course('Classical Mechanics I', 'CM I', 'F'),
	'P202': new Course('Mathematical Methods I', 'MMPhy I', 'I'),
	'P207': new Course('Linear Optics', 'LinOpt', 'D'),
	'P203': new Course('Electronics', 'Elec', 'A'),
	'P302': new Course('Statistical Mechanics', 'StatMech', 'A'),
	'P303': new Course('Quantum Mechanics II', 'QM II', 'D'),
	'P304': new Course('Special Theory of Relativity', 'STR', 'J'),
	'P307': new Course('Nuclei and Particle Physics', 'Nuclear', 'B'),
	'P401': new Course('Classical Mechanics II: Mechanics of Continuous Media', 'CM II', 'F'),
	'P453': new Course('Quantum Field Theory I', 'QFT I', 'I'),
	'P463': new Course('Astronomy and Astrophysics', 'Astro', 'E'),
	'P469': new Course('Density Functional Theory of Atoms Molecules and Solids', 'DFT', 'L'),
	'P476': new Course('Non-Equilibrium Statistical Mechanics', 'NESM', 'B'),
	'P475': new Course('Special Topics in Quantum Mechanics', 'QM III', 'D'),

	'P601': new Course('Classical Mechanics (PhD)', 'CM', 'K'),
	'P602': new Course('Mathematical Methods (PhD)', 'MM', 'J'),
	'P603': new Course('Electromagnetism (PhD)', 'EM', 'L'),
	'P704': new Course('Special Theory of Relativity (PhD)', 'STR', 'J'),
	'P707': new Course('Nuclei and Particle Physics (PhD)', 'Nuclear', 'B'),

};

for (let course in courses) {
	for (let school in schools) {
		if (schools[school].code === course.match(/^[^0-9]*/)[0]) {
			schools[school].courses.push(course);
		}
	}
}
