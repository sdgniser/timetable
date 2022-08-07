let year = '2022';
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
	'CS202': new Course('Discrete Structures & Computation (M5)', 'DiscComp', 'C'),
	'CS456': new Course('Computational Geometry (M3)', 'CompGeom', 'E'),
	'CS461': new Course('Advanced Machine Learning (M5)', 'AdvML', 'A'),

	/* Humanities */
	'H205': new Course('Environmental Economics and Environmental Impact Assessment (LH3)', 'EnvEcon', 'J1'),
	'H210': new Course('The City in Modern Fiction (LH5)', 'ModFic', 'K2'),
	'H227': new Course('Organizational Behavior (LH2)', 'OrgBehav', 'J2'),
	'H237': new Course('Science communication and the citizenship (LH1)', 'SciCom', 'K1'),

	/* Mathematics */
	'M202': new Course('Group Theory (M1)', 'Group', 'D'),
	'M204': new Course('Metric Spaces (M1)', 'Metric', 'B'),
	'M206': new Course('Probability Theory (M1)', 'Prob', 'A'),

	'M301': new Course('Lebesgue Integral (M2)', 'Lebesg', 'J'),
	'M307': new Course('Field Theory (M2)', 'Field', 'D'),
	'M308': new Course('Complex Analysis (M2)', 'CompAnal', 'F'),
	'M310': new Course('Geometry of curves and surfaces (M2)', 'Curv&Surf', 'A'),
	'M311': new Course('Numerical Analysis (M2)', 'NumAnal', 'K'),

	'M402': new Course('Representation of Finite Groups (M4)', 'FinGroups', 'G'),
	'M455': new Course('Introduction to Stochastic Process (M1)', 'StocProc', 'E'),
	'M458': new Course('Algebraic Number Theory (M3)', 'AlgebNum', 'A'),
	'M464': new Course('Information and Coding Theory (M1)', 'Info&Code', 'H'),
	'M478': new Course('Advances Partial Differential Equations', 'AdvPartDiff', 'A'),

	'M555': new Course('Harmonic Analysis (M3)', 'HarmAnal', 'D'),
	'M557': new Course('Operator Algebras (M3)', 'OpAlg', 'F'),

	/* Physics */
	'P204': new Course('Electromagnetism I (LH2)', 'EM1', 'E'),
	'P205': new Course('Mathematical Methods II (LH2)', 'MM2', 'D'),
	'P206': new Course('Quantum Mechanics I (LH2)', 'QM1', 'F'),

	'P301': new Course('Electromagnetism II (P107)', 'EM2', 'E'),
	'P306': new Course('Nuclei and Particles (P107)', 'NucPart', 'D'),
	'P307': new Course('Introduction to Condensed Matter physics (LH1)', 'CondMat', 'F'),

	'P452': new Course('Computational Physics (P107)', 'CompPhy', 'J'),
	'P456': new Course('Nonlinear Optics & Lasers (P127)', 'NonLinOpt', 'K'),
	'P457': new Course('General Theory of Relativity and Cosmology (P110)', 'GTR', 'C'),
	'P464': new Course('Plasma Physics and Magneto-hydrodynamics (P109)', 'Plasma&MHD', 'F'),
	'P467': new Course('NonLinear Physics, Chaos and Turbulence (P109)', 'Chaos&Turb', 'B'),
	'P470': new Course('Quantum Field Theory II (P108)', 'QFT2', 'E'),
	'P472': new Course('Experimental High Energy Physics (P108)', 'ExpHEP', 'D'),

	'P714': new Course('Statistical Mechanics (P127)', 'StatMech', 'G'),
	'P715': new Course('Quantum Mechanics (P127)', 'QM', 'H'),
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
