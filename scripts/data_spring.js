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
	'CMRP': new School('R', 'Center for Medical and Radiation Physics', []),
};

let courses = {
	// always use A1, A2, ... for degenerates of slot A
	/* Biology */
	'B204': new Course('Cell Biology (LH2)', 'CellBio', 'D'),
	'B206': new Course('Moleclar Biology (LH2)', 'MolBio', 'F'),

	'B305': new Course('Immunology (B2)', 'Immuno', 'B'),
	'B307': new Course('Genetics (B2)', 'Gene', 'A'),
	'B306': new Course('Evolutionary Biology (LH3)', 'EvoBio', 'J'),
	'B353': new Course('Plant Developmental Biology (B3)', 'PlantDevBio', 'D'),

	'B405': new Course('Biotechniques (B6)', 'Biotech', 'B'),
	'B453': new Course('Advanced Biochemistry (B3)', 'AdvBiochem', 'A'),
	'B454': new Course('Advanced Microbiology (B2)', 'AdvMicroBio', 'C'),
	'B455': new Course('Enzymology (LH1)', 'Enzymo', 'E'),
	'B456': new Course('Advanced Neurobiology (B1)', 'AdvNeuroBio', 'F'), 

	'B554': new Course('Cancer Biology (B4)', 'CancerBio', 'A'),
	'B558': new Course('Quantitative Biology (B6)', 'QuantiBio', 'E'),

	/* Chemistry */
	'C204': new Course('Reagents in Organic Syntheses (LH2)', 'Organic', 'B'),
	'C205': new Course('Main Group and Organometallic Chemistry (LH2)', 'Inorganic', 'E'),
	'C206': new Course('Quantum Chemistry - I (LH1)', 'QC1', 'F'),

	'C304': new Course('Coordination Chemistry (LH3)', 'CoordChem', 'E'),
	'C305': new Course('Chemical Binding (LH4)', 'ChemBind', 'B'),
	'C306': new Course('Physical Methods in Chemistry - I (LH2)', 'PMC', 'C'),

	'C402': new Course('Chemical Rate Processes (C5)', 'ChemRate', 'F'),

	'C554': new Course('Crystallography (C2)', 'Crystallo', 'C'),
	'C556': new Course('Advanced Bio-Inorganic Chemistry (LH3)', 'BioInorgChem', 'A'),
	'C565': new Course('Advanced Organic Chemistry (C1)', 'Organo', 'D'),
	'C567': new Course('Advanced Main Group Chemistry (C2)', 'MainGrpChem', 'A'),
	'C571': new Course('Statistical Mechanics (LH1)', 'StatMech', 'A'),

	/* Computer Science */
	'CS202': new Course('Discrete Structures and Computation (LH2)', 'DSC', 'E'),
	'CS460': new Course('Machine Learning (M3)', 'ML', 'D'),
	'CS458': new Course('Approximation Algorithms (M3)', 'AppAlgo', 'F'),

	/* Humanities */
	'H227': new Course('Organisational Behaviour (LH5)', 'OB', 'J'),
	'H205': new Course('Environmental Economics and Environmental Impact Assessment (LH4)', 'EnvEco', 'K2'),
	'H210': new Course('The City in Modern Fiction (LH4)', 'ModFiction', 'K1'),

	/* Mathematics */
	'M202': new Course('Group Theory (M1)', 'GrpTheory', 'F'),
	'M204': new Course('Metric Spaces (M1)', 'MetSpace', 'D'),
	'M206': new Course('Probability Theory (M1)', 'PT', 'C'),

	'M301': new Course('Lebesque Integration (M2)', 'LI', 'E'),
	'M307': new Course('Field Theory (M2)', 'FT', 'A'),
	'M308': new Course('Complex Analysis (M2)', 'CA', 'G'),
	'M309': new Course('Graph Theory (M2)', 'GraphTheo', 'B'),
	'M311': new Course('Numerical Analysis (M5)', 'H'),

	'M402': new Course('Representations of Finite Groups (M2)', 'FG', 'H'),
	'M404': new Course('Algebraic Topology (M2)', 'AT', 'G'),
	'M456': new Course('Algebraic Geometry (M3)', 'AG', 'C'),
	'M470': new Course('Abstract Harmonic Analysis (M2)', 'AbsHarmAnal', 'D'),
	'M452': new Course('Advanced Functional Analysis (M3)', 'AdvFuncAnal', 'B'),
	'M483': new Course('Introduction to Manifolds (M4)', 'Manifolds', 'B'),
	'M463': new Course('Finite Fields (M5)', 'FF', 'B'),
	'M451': new Course('Advanced Complex Analysis (M1)', 'AdvCompAnal', 'I'),

	'M561': new Course('Elliptical Curves (M1)', 'EC', 'A'),
	'M554': new Course('Ergodic Theory (M3)', 'ET', 'A'),

	/* Physics */
	'P204': new Course('Electromagnetism I (P107)', 'EM1', 'D'),
	'P205': new Course('Mathematical Methods II (P107)', 'MM2', 'B'),
	'P206': new Course('Quantum Mechanics - I (P107)', 'QM1', 'A'),

	'P301': new Course('Electromagnetism - II (P107)', 'EM2', 'E'),
	'P306(K1)': new Course('Introdution to Condensed Matter Physics (P127)', 'CMP', 'K1'),
	'P306(K2)': new Course('Introdution to Condensed Matter Physics (P127)', 'CMP', 'K2'),
	'P307': new Course('Nuclei and Particles (LH3)', 'Nuclei', 'C'),

	'P454': new Course('Particle Physics (P126)', 'PP', 'B'),
	'P455': new Course('Introduction to Phase Transition and Critical Phenomena (P127)', 'PT&CP', 'F'),
	'P457': new Course('General Theory of Relativity and Cosmology (P108)', 'GTR', 'A'),
	'P461': new Course('Physics of Mesoscopic Systems (P109)', 'PMS', 'A'),
	'P468': new Course('Magnetism and Superconductivity (P108)', 'Mag&Sup', 'E'),
	'P477': new Course('Relativistic Nucleus - Nucleus Collision and Quark Gluon Plasma (P126)', 'RN', 'D'),

	/* CMRP */
	'R121': new Course('Quantum Mechanics (CR-101)', 'QM', 'B'),
	'R122': new Course('Electronics and Instrumentation (CR-101)', 'E&I', 'C'),
	'R123': new Course('Solid State Physics (CR-101)', 'SSP', 'D'),
	'R124': new Course('Nuclear Physics (CR-101)', 'NP', 'E'),
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
