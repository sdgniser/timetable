let year = '2024';
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
	'B204': new Course('Cell Biology (LH3)', 'CellBio', 'C'),
	'B206': new Course('Moleclar Biology (B4)', 'MolBio', 'E'),

	'B305': new Course('Immunology (LH2)', 'Immuno', 'D'),
	'B306': new Course('Evolutionary Biology (LH2)', 'EvoBio', 'F'),
	'B307': new Course('Genetics (LH2)', 'Gene', 'B'),

	'B403': new Course('Bioinformatics and Computational Biology (LH2)', 'BioInfo', 'A'),
	'B407': new Course('Quantitative and Systems Biology (LH2)', 'SysBio', 'C'),
	'B453': new Course('Advanced Biochemistry (B5)', 'AdvBiochem', 'B'),
	'B454': new Course('Advanced Microbiology (B5)', 'AdvMicroBio', 'F'),
	'B462': new Course('Endocrinology (B6)', 'Endo', 'E'),
	'B463': new Course('Plant Developmental Biology (B5)', 'PlantDevBio', 'D'),
	
	'B554': new Course('Cancer Biology (B3)', 'Cancer', 'B'), 

	/* Chemistry */
	'C204': new Course('Reagents in Organic Syntheses (LH3)', 'Organic', 'D'),
	'C205': new Course('Main Group and Organometallic Chemistry (C7)', 'Inorganic', 'A'),
	'C206': new Course('Quantum Chemistry - I (LH3)', 'QC1', 'F'),

	'C304': new Course('Coordination Chemistry (LH3)', 'CoordChem', 'A'),
	'C305': new Course('Chemical Binding (LH4)', 'ChemBind', 'B'),
	'C306': new Course('Physical Methods in Chemistry - I (LH3)', 'PMC', 'E'),

	'C402': new Course('Chemical Rate Processes (LH4)', 'ChemRate', 'D'),

	'C554': new Course('Crystallography (C2)', 'Crystallo', 'B'),
	'C556': new Course('Advanced Bio-Inorganic Chemistry (LH1)', 'BioInorgChem', 'F'),
	'C559': new Course('Supramolecular Chemistry (C3)', 'Supra', 'A'),
	'C565': new Course('Advanced Organic Chemistry (C4)', 'AdvOrgChem', 'C'),
	'C566': new Course('Catalysis: Reaction Mechanism and Applications (LH1)', 'Catalysis', 'C'),

	/* Computer Science */
	'CS202': new Course('Discrete Structures and Computation (M1)', 'DSC', 'E'),
	'CS457': new Course('Paramterized Algorihms (M3)', 'PA', 'F'),
	'CS460': new Course('Machine Learning (M4)', 'ML', 'E'),

	/* Humanities */
	'H227': new Course('Organisational Behaviour (LH4)', 'OB', 'J'),
	'H205': new Course('Environmental Economics and Environmental Impact Assessment (LH3)', 'EnvEco', 'K2'),
	'H210': new Course('The City in Modern Fiction (LH3)', 'MoF', 'K1'),

	/* Mathematics */
	'M202': new Course('Group Theory (M2)', 'GrpTheory', 'E'),
	'M204': new Course('Metric Spaces (M2)', 'MetSpace', 'F'),
	'M206': new Course('Probability Theory (M2)', 'PT', 'A'),

	'M301': new Course('Lebesgue Integration (M5)', 'LI', 'B'),
	'M307': new Course('Field Theory (M5)', 'FT', 'E'),
	'M308': new Course('Complex Analysis (M5)', 'CA', 'C'),
	'M309': new Course('Graph Theory (M5)', 'GraphTheo', 'D'),

	'M402': new Course('Representations of Finite Groups (M2)', 'FG', 'B'),
	'M404': new Course('Algebraic Topology (M1)', 'AT', 'E'),
	'M406': new Course('Geometry of Curves and Surfaces (M1)', 'C&S', 'D'),
	'M451': new Course('Advanced Complex Analysis (M3)', 'ACA', 'B'),
	'M454': new Course('Partial Differential Equation (M3)', 'PDE', 'C'),
	'M457': new Course('Algebraic Graph Theory (M3)', 'AGT', 'F'),
	'M475': new Course('Incidence Geometry (M4)', 'IG', 'A'),
	'M485': new Course('Algebraic Topology (M1)', 'AT', 'E'),

	'M555': new Course('Harmonic Analysis (M2)', 'HA', 'D'),
	'M557': new Course('Operator Algebras (M3)', 'OA', 'E'),

	/* Physics */
	'P204': new Course('Electromagnetism I (P126)', 'EM1', 'C'),
	'P205': new Course('Mathematical Methods II (P126)', 'MM2', 'D'),
	'P206': new Course('Quantum Mechanics - I (P127)', 'QM1', 'B'),

	'P301': new Course('Electromagnetism - II (P107)', 'EM2', 'C'),
	'P306': new Course('Introdution to Condensed Matter Physics (P107)', 'CMP', 'B'),
	'P307': new Course('Nuclei and Particles (P107)', 'Nuclei', 'A'),

	'P452': new Course('Computational Physics (LH1)', 'CompPhy', 'D'),
	'P456': new Course('Non-Linear Optics (P108)', 'NLO', 'B'),
	'P457': new Course('General Theory of Relativity and Cosmology (P108)', 'GTR', 'A'),
	'P464': new Course('Plasma Physics and Magnetohydrodynamics (P108)', 'PlasmaPh', 'C'),
	'P470': new Course('Quantum Field Theory II (P109)', 'QFT2', 'C'),
	'P471': new Course('Quantum Information and Quantum Computation (P107)', 'QIQC', 'E'),

	/* CMRP */
	'R121': new Course('Quantum Mechanics (CL-001)', 'QM', 'A'),
	'R122': new Course('Electronics and Instrumentation (CL-001)', 'E&I', 'B'),
	'R123': new Course('Solid State Physics (CL-001)', 'SSP', 'C'),
	'R124': new Course('Nuclear Physics (CL-001)', 'NP', 'D'),
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
