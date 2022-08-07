let year = '2022';
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
};

let courses = {
	// always use A1, A2, ... for degenerates of slot A
	/* Biology */
	'B204': new Course('Cell Biology (LH1)', 'CellBio', 'A'),
	'B206/B304': new Course('Molecular Biology (LH3)', 'MolBio', 'E'),

	'B305': new Course('Immunology (B1)', 'Immuno', 'F'),
	'B306': new Course('Evolutionary Biology (LH2)', 'EvolBio', 'C'),
	'B351': new Course('Principles of Drug Design (B2)', 'Drug', 'D'),
	'B352': new Course('Endocrinology (B3)', 'Endo', 'B'),

	'B405': new Course('Biotechniques (B6)', 'Biotech', 'F'),
	'B453': new Course('Advanced Biochemistry (B4)', 'AdvBioChem', 'B'),
	'B455': new Course('Enzymology (LH1)', 'Enzymo', 'J'),

	'B554': new Course('Cancer Biology (B6)', 'CancBio', 'A'),
	'B558': new Course('Quantitative Biology (B4)', 'QuantBio', 'I'),
	'B561': new Course('Concepts in Mechanobiology (B4)', 'MechBio', 'C'),

	/* Chemistry */
	'C204': new Course('Reagents in Organic Synthesis (LH1)', 'Reagents', 'D'),
	'C205': new Course('Mathematical Methods for Chemists (LH1)', 'MMChem', 'E'),
	'C206': new Course('Quantum Chemistry (LH1)', 'QChem', 'B'),

	'C304': new Course('Coordination Chemistry (LH4)', 'Coord', 'F'),
	'C305': new Course('Chemical Binding (LH4)', 'ChemBind', 'B'),
	'C306': new Course('Physical Methods in Chemistry I (LH4)', 'PhyChem', 'A'),

	'C402': new Course('Chemical Rate Processes (C6)', 'ChemRate', 'B'),

	'C554': new Course('Crystallography (C2)', 'Crystal', 'D'),
	'C556': new Course('Advanced Bio-inorganic Chemistry (LH3)', 'AdvBioInorg', 'C'),
	'C562': new Course('Polymer Chemistry (C5)', 'PolyChem', 'F'),
	'C565': new Course('Advanced Organic Chemistry (C3)', 'AdvOrgChem', 'A'),
	'C568': new Course('Advanced Fluorescence Spectroscopy (C6)', 'AdvFluoro', 'E'),

	/* Computer Science */
	'CS201': new Course('Theory of computaion', 'Th CS', 'B'),
	'CS301': new Course('Design and Analysis of Algirithms', 'Algorithm', 'F'),
	'CS461': new Course('Linear Programming and Combinatorial optimisation', 'Optimisation', 'F'),

	/* Humanities */
	'H205': new Course('Environmental Economics and Environmental Impact Assessment (LH3)', 'EnvEcon', 'J1'),
	'H210': new Course('The City in Modern Fiction (LH5)', 'ModFic', 'K2'),
	'H227': new Course('Organizational Behavior (LH2)', 'OrgBehav', 'J2'),
	'H237': new Course('Science communication and the citizenship (LH1)', 'SciCom', 'K1'),

	/* Mathematics */
	'M201': new Course('Real Analysis', 'RAnal', 'C'),
	'M203': new Course('Discrete Mathematics', 'Discrete', 'A'),
	'M205': new Course('Linear Algebra', 'Lin Alg', 'D'),

	'M302': new Course('Rings and Modules', 'Modules', 'A'),
	'M303': new Course('Differential Equation', 'DiffQ', 'C'),
	'M305': new Course('Number Theory', 'Number', 'E'),
	'M306': new Course('Calculus of Several Variables', 'SVC', 'B'),

	'M401': new Course('Functional Analysis', 'F Anal', 'H'),
	'M403': new Course('Commutative Algebra', 'Comm Alg', 'G'),
	'M451': new Course('Advanced Complex Analysis', 'AC Anal', 'C'),
	'M467': new Course('Nonlinear Analysis', 'NL Anal', 'D'),
	'M471': new Course('Advanced Number Theory', 'Adv Num', 'A'),
	'M479': new Course('Random Graphs', 'R Graphs', 'B'),

	/* Physics */
	'P201': new Course('Classical Mechanics I', 'CM I', 'E'),
	'P202': new Course('Mathematical Methods I', 'MMPhy I', 'F'),
	'P207': new Course('Linear Optics', 'LinOpt', 'A'),

	'P302': new Course('Statistical Mechanics', 'StatMech', 'E'),
	'P303': new Course('Quantum Mechanics II', 'QM II', 'A'),
	'P304': new Course('Special Theory of Relativity', 'STR', 'D'),

	'P401': new Course('Classical Mechanics II: Mechanics of Continuous Media', 'CM II', 'D'),
	'P405': new Course('Atoms Molecules and Radiation', 'Rad', 'E'),
	'P453': new Course('Quantum Field Theory', 'QFT', 'B'),
	'P460': new Course('Many Particle Physics', 'MPP', 'C'),
	'P463': new Course('Astronomy and Astrophysics', 'Astro', 'C'),
	'P475': new Course('Special Topics in Quantum Mechanics', 'Spl QM', 'A'),
	'P476': new Course('Non Equilibrium Statistical Mechanics', 'NESM', 'A'),
	'P466': new Course('Quantum and Nano Electronics', 'QElec', 'A'),
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
