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
	'SBS': new School('B', 'School of Biological Sciences', []),
	'SCS': new School('C', 'School of Chemical Sciences', []),
	'SCPS': new School('CS', 'School of Computer Sciences', []),
	'SMS': new School('M', 'School of Mathematical Sciences', []),
	'SPS': new School('P', 'School of Physical Sciences', []),
	'SHSS': new School('H', 'School of Humanities and Social Sciences', []),
};

let courses = {

	// always use A1, A2, ... for degenerates of slot A

	/* Biology */
	'B204': new Course('Cell Biology (LH1)', 'CellB-LH1', 'A'),
	'B206/B304': new Course('Molecular Biology (LH3)', 'Mol-Bio-LH3', 'E'),

	'B305': new Course('Immunology (B1)', 'Immuno-B1', 'F'),
	'B306': new Course('Evolutionary Biology (LH2)', 'Evo-LH2', 'C'),
	'B351': new Course('Principles of Drug Design (B2)', 'Drug-B2', 'D'),
	'B352': new Course('Endocrinology (B3)', 'Endo-B3', 'B'),

	'B405': new Course('Biotechniques (B6)', 'Bio-tech-B6', 'F'),
	'B453': new Course('Advanced Biochemistry (B4)', 'Adv.BioChem-B4', 'B'),
	'B455': new Course('Enzymology (LH1)', 'Enzymo-LH1', 'J'),

	'B554': new Course('Cancer Biology (B6)', 'Cancer-B6', 'A'),
	'B558': new Course('Quantitative Biology (B4)', 'Quant-Bio-B4', 'I'),
	'B561': new Course('Concepts in Mechanobiology (B4)', 'Mechano-B4', 'C'),

	/* Chemistry */
	'C204': new Course('Reagents in Organic Synthesis (LH1)', 'Reagents-LH1', 'D'),
	'C205': new Course('Mathematical Methods for Chemists (LH1)', 'Main&Org-LH1', 'E'),
	'C206': new Course('Quantum Chemistry (LH1)', 'Quant-Chem-LH1', 'B'),

	'C304': new Course('Coordination Chemistry (LH4)', 'Coord-LH4', 'F'),
	'C305': new Course('Chemical Binding (LH4)', 'Bind-LH4', 'B'),
	'C306': new Course('Physical Methods in Chemistry I (LH4)', 'Phy-Methods-LH4', 'A'),

	'C402': new Course('Chemical Rate Processes (C6)', 'Chem-Rate-Proc-C6', 'B'),

	'C554': new Course('Crystallography (C2)', 'Crystal-C2', 'D'),
	'C556': new Course('Advanced Bio-inorganic Chemistry (LH3)', 'Adv.Bio-inorg-Chem-LH3', 'C'),
	'C562': new Course('Polymer Chemistry (C5)', 'Poly-C5', 'F'),
	'C565': new Course('Advanced Organic Chemistry (C3)', 'Adv.Org-C3', 'A'),
	'C568': new Course('Advanced Fluorescence Spectroscopy (C6)', 'Adv.Fluoro-C6', 'E'),

	/* Computer Science */
	'CS202': new Course('Discrete Structures & Computation (M5)', 'Discrete-M5', 'C'),
	'CS456': new Course('Computational Geometry (M3)', 'CG-M3', 'E'),
	'CS461': new Course('Advanced Machine Learning (M5)', 'Adv.ML-M5', 'A'),

	/* Humanities */
	'H205': new Course('Environmental Economics and Environmental Impact Assessment (LH3)', 'ENV-LH3', 'J1'),
	'H210': new Course('The City in Modern Fiction (LH5)', 'Fiction-LH5', 'K2'),
	'H227': new Course('Organizational Behavior (LH2)', 'Org-Behav-LH2', 'J2'),
	'H237': new Course('Science communication and the citizenship (LH1)', 'Sci-com-citi-LH1', 'K1'),

	/* Mathematics */
	'M202': new Course('Group Theory (M1)', 'Group-M1', 'D'),
	'M204': new Course('Metric Spaces (M1)', 'Metric-M1', 'B'),
	'M206': new Course('Probability Theory (M1)', 'Prob-M1', 'A'),

	'M301': new Course('Lebesguq Integral (M2)', 'Lebesg-M2', 'J'),
	'M307': new Course('Field Theory (M2)', 'Field-M2', 'D'),
	'M308': new Course('Complex Analysis (M2)', 'Complex-Anal-M2', 'F'),
	'M310': new Course('Geometry of curves and surfaces (M2)', 'Geom-curv-surf-M2', 'A'),
	'M311': new Course('Numerical Analysis (M2)', 'Num-Anal-M2', 'K'),

	'M402': new Course('Representation of Finite Groups (M4)', 'Finite-M4', 'G'),
	'M455': new Course('Introduction to Stochastic Process (M1)', 'Stoch-M1', 'E'),
	'M458': new Course('Algebraic Number Theory (M3)', 'Alg-NT-M3', 'A'),
	'M464': new Course('Information and Coding Theory (M1)', 'Info&Code-M1', 'H'),
	'M478': new Course('Advances Partial Differential Equations', 'Adv-Par-DiffQ', 'A'),

	'M555': new Course('Harmonic Analysis (M3)', 'HA-M3', 'D'),
	'M557': new Course('Operator Algebras (M3)', 'PDEs-M3', 'F'),

	/* Physics */
	'P204': new Course('Electromagnetism I (LH2)', 'EM-I-LH2', 'E'),
	'P205': new Course('Mathematical Methods II (LH2)', 'MMPhy-II-LH2', 'D'),
	'P206': new Course('Quantum Mechanics I (LH2)', 'QM-I', 'F'),

	'P301': new Course('Electromagnetism II (P107)', 'EM-II-P107', 'E'),
	'P306': new Course('Nuclei and Particles (P107)', 'Nuc&Partc-P107', 'D'),
	'P307': new Course('Introduction to Condensed Matter physics (LH1)', 'Condensed-LH1', 'F'),

	'P452': new Course('Computational Physics (P107)', 'Comp.Phy-P107', 'J'),
	'P456': new Course('Nonlinear Optics & Lasers (P127)', 'Non-Lin&Laser-P127', 'K'),
	'P457': new Course('General Theory of Relativity and Cosmology (P110)', 'GTR-P110', 'C'),
	'P464': new Course('Plasma Physics and Magneto-hydrodynamics (P109)', 'Plasma&Magneto-P109', 'F'),
	'P467': new Course('NonLinear Physics, Chaos and Turbulence (P109)', 'Plasma-Chaos&Turb-P109', 'B'),
	'P470': new Course('Quantum Field Theory II (P108)', 'QFT-II-P108', 'E'),
	'P472': new Course('Experimental High Energy Physics (P108)', 'Exp.HEP-P108', 'D'),

	'P714': new Course('Statistical Mechanics (P127)', 'StatMech-P127', 'G'),
	'P715': new Course('Quantum Mechanics (P127)', 'QM-P127', 'H'),
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
