let year = '2023';
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
	'SCS': new School('C', 'School of Chemical Sciences', []),
	'SBS': new School('B', 'School of Biological Sciences', []),
	'SPS': new School('P', 'School of Physical Sciences', []),
	'SMS': new School('M', 'School of Mathematical Sciences', []),
	'SCPS': new School('CS', 'School of Computer Sciences', []),
	'SHSS': new School('H', 'School of Humanities and Social Sciences', []),
	'CMRP': new School('R', 'Center for Medical and Radiation Physics', []),
};

let courses = {
	// always use A1, A2, ... for degenerates of slot A
	/* Biology */
	'B201': new Course('Microbiology (B3)', 'MicroBio', 'D'),
	'B202': new Course('Biochemistry (LH2)', 'Biochem', 'B'),

	'B301': new Course('Animal Physiology (LH3)', 'AnimPhys', 'D'),
	'B302': new Course('Plant Physiology (LH3)', 'PlantPhys', 'E'),
	'B303': new Course('Ecology (LH3)', 'Ecology', 'F'),

	'B402': new Course('Developmental Biology (LH2)', 'DevBio', 'F'),
	'B405': new Course('Biotechniques (LH2)', 'Biotech', 'A'),
	'B406': new Course('Introductory Biophysics (LH2)', 'Biophys', 'D'),
	'B464': new Course('Neurobiology (B5)', 'Neuro', 'C'),
	'B465': new Course('Structural Biology (B5)', 'StrBio', 'B'), 

	'B552': new Course('Advanced Immunology (B4)', 'AdvImmuno', 'C'), 

	/* Chemistry */
	'C201': new Course('Basic Inorganic Chemistry (LH2)', 'Inorganic', 'E'),
	'C203': new Course('Reaction Mechanism in Organic Chemistry (LH4)', 'Organic', 'A'),
	'C207': new Course('Mathematical Methods for Chemists (C6)', 'MMC', 'C'),

	'C301': new Course('Physical Organic Chemistry (LH3)', 'POC', 'B'),
	'C302': new Course('Molecular Spectroscopy and Group Theory (LH3)', 'MolSpec', 'A'),
	'C307': new Course('Thermodynamics and Electrochemistry (LH3)', 'Thermo', 'C'),

	'C401': new Course('Physical Methods in Chemsitry -II (LH4)', 'PMC2', 'B'),
	'C403': new Course('Chemistry of Heterocycles and Natural Products (C6)', 'Heterocycles', 'D'),

	'C552': new Course('Solid State Chemistry (LH4)', 'SSC', 'C'),
	'C557': new Course('Nuclear Magnetic Resonance (C5)', 'NMR', 'A'),
	'C568': new Course('Advanced Fluoroscence Spectroscopy (LH4)', 'FluorSpec', 'E'),
	'C572': new Course('Frontiers in Organic Synthesis (C1)', 'OrgSynth', 'A'),

	/* Computer Science */
	'CS201': new Course('Theory of Computation (M1)', 'ToC', 'J'),
	'CS301': new Course('Design and Analysis of Algorithm (P126)', 'DAA', 'A'),
	'CS461': new Course('Advanced Machine Learning (M5)', 'AdvML', 'J'),
	'CS452 (K1)': new Course('Algorithmic Coding Theory (M5)', 'ACT', 'K1'),
	'CS452 (K2)': new Course('Algorithmic Coding Theory (M5)', 'ACT', 'K2'),

	/* Humanities */
	'H238': new Course('Life & Communication in Urban (M4)', 'Urban', 'A'),
	'H225': new Course('Introduction to Psychology (LH5)', 'Psycho', 'K2'),
	'H235': new Course('Sociology of Science & Technology (LH5)', 'Socio', 'K1'),

	/* Mathematics */
	'M201': new Course('Real Analysis (M1)', 'Real', 'E'),
	'M203': new Course('Discrete Mathematics (M1)', 'DM', 'B'),
	'M205': new Course('Linear Algebra (M1)', 'LinAl', 'A'),

	'M302': new Course('Rings and Modules (M2)', 'R&M', 'B'),
	'M303': new Course('Differential Equation (M2)', 'DE', 'D'),
	'M305*': new Course('Number Theory (M2)', 'NT', 'F'),
	'M306': new Course('Calculus of Several Variables (M2)', 'CSV', 'C'),
	'M305': new Course('Statistics (M5)', 'Stats', 'B'),

	'M401': new Course('Functional Analysis (M3)', 'FA', 'C'),
	'M403': new Course('Commutative Algebra (M3)', 'CA', 'D'),
	'M405': new Course('Topology (M3)', 'Topology', 'E'),
	'M484': new Course('Commutative Algebra (M5)', 'CA', 'D'),
	'M466': new Course('Measure Theory (M5)', 'MT', 'A'),
	'M464': new Course('Information and Coding Theory (M4)', 'ICT', 'G'),
	'M459*': new Course('Statistics (M4)', 'Stat', 'B'),
	'M458': new Course('Algebraic Number Theory (M4)', 'ANT', 'I'),

	'M562': new Course('Brownian Motion and Stochastic Calculus (M5)', 'BM&SC', 'H'),
	'M556*': new Course('Lie Groups and Lie Algebra I (M4)', 'LG&LA', 'H'),

	/* Physics */
	'P201': new Course('Classical Mechanics I (P107)', 'CM1', 'E'),
	'P202': new Course('Mathematical Methods I (LH4)', 'MM1', 'F'),
	'P207': new Course('Linear Optics (P126)', 'LinOptics', 'B'),
	'P245': new Course('Basic Electronics Theory and Lab (P126)', 'ElecLab', 'D'),

	'P302': new Course('Statistical Mechanics (P107)', 'StatMech', 'C'),
	'P303': new Course('Quantum Mechanics - II (P107)', 'QM2', 'F'),
	'P304': new Course('Special Theory of Relativity (P107)', 'STR', 'D'),

	'P401': new Course('Classical Mechanics II: Mechanics of Continuous Media (P127)', 'CM2', 'E'),
	'P405': new Course('Atoms, molecules and Radiation (P127)', 'AMR', 'F'),

	'P451': new Course('Advanced Solid State Physics (P107)', 'ASS', 'B'),
	'P453': new Course('Quantum Field Theory I (P109)', 'QFT1', 'C'),
	'P462': new Course('Introduction to Quantum Optics (P108)', 'IQO', 'C'),
	'P473': new Course('Experimental Techniques (LH1)', 'ExpTech', 'A'),
	'P474': new Course('Introduction to Cosmology (P127)', 'Cosmo', 'D'),

	/* CMRP */
	'R111': new Course('Classical Mechanics (CL-001)', 'CM', 'A'),
	'R112': new Course('Statistical Mechanics and Thermodynamics (CL-001)', 'StatMech&Thermo', 'B'),
	'R113': new Course('Mathematical Physics (CL-001)', 'MP', 'C'),
	'R114': new Course('Electrodynamics (CL-001)', 'Electro', 'D'),
};

for (let course in courses) {
	for (let school in schools) {
		if (schools[school].code === course.match(/^[^0-9]*/)[0]) {
			schools[school].courses.push(course);
		}
	}
}

// Colorblindness-friendly color palette from: https://davidmathlogic.com/colorblind/
let colors = [
	'#117733',
	'#44aa99',
	'#d55e00',
	'#88ccee',
	'#0072b2',
	'#ddcc77',
	'#cc6677',
	'#aa4499',
	'#882255',
	'#e69f00'
];
