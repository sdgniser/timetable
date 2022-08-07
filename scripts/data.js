let year = '2022';
let semester = 'Autumn';

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
	'B201': new Course('Microbiology (LH2)', 'Micro', 'C'),
	'B202': new Course('Biochemistry (LH3)', 'Biochem', 'E'),

	'B301': new Course('Animal Physiology (B1)', 'AnimPhys', 'A'),
	'B302': new Course('Plant Physiology (B1)', 'PlantPhys', 'E'),
	'B303': new Course('Ecology (LH5)', 'Ecology', 'J'),
	'B354': new Course('Neurobiology', 'NeuroBio', 'A'),
	'B355': new Course('Structural Biology (B4)', 'StructBio', 'B'),

	'B402': new Course('Developmental Biology (B5)', 'DevBio', 'A'),
	'B403': new Course('Bioinformatics (LH2)', 'BioInfo', 'E'),
	'B451': new Course('Advanced Cell Biology (B5)', 'AdvCellBio', 'D'),

	'B551': new Course('Advanced Molecular Biology (B3)', 'AdvMolBio', 'B'),
	'B555': new Course('Advanced Genetics (B2)', 'AdvGen', 'C'),

	/* Chemistry */
	'C201': new Course('Basic Inorganic Chemistry (LH3)', 'InorgChem', 'F'),
	'C203': new Course('Reaction mechanism in Organic Chemistry (LH2)', 'OrganicChem', 'D'),
	'C207': new Course('Mathematical Methods for Chemists (LH4)', 'MMChem', 'B'),

	'C301': new Course('Physical Organic Chemistry (C6)', 'PhysOrganic', 'B'),
	'C302': new Course('Molecular Spectroscopy and Group Theory (C6)', 'MolSpec', 'F'),
	'C307': new Course('Thermodynamics and Electrochemistry (LH2)', 'ThermoElec', 'C'),

	'C401': new Course('Physical methods in Chemistry II (C1)', 'PhysMeth', 'D'),
	'C403': new Course('Chemistry of Heterocycles and Natural Products (C1)', 'Hetero', 'A'),

	'C552': new Course('Solid State Chemistry (C2)', 'Solid', 'C'),
	'C559': new Course('Supramolecular Chemistry (C2)', 'Supra', 'B'),
	'C560': new Course('Cheistry of Nano Materials (C1)', 'Nano', 'F'),
	'C566': new Course('Catalysis: Reaction Mechanisms and Applications (C3)', 'Catalysis', 'B'),

	/* Computer Science */
	'CS201': new Course('Theory of Computation (LH2)', 'ThComp', 'B'),
	'CS301': new Course('Design and Analysis of Algorithms (M4)', 'Algo', 'F'),
	'CS454': new Course('Linear Programming and Combinational Optimisation (M5)', 'LinProg', 'F'),

	/* Humanities */
	'H209': new Course('Speculative Fiction', 'SpecFiction', 'J'),
	'H235': new Course('Sociology of Science and Technology', 'Socio', 'K2'),
	'H238': new Course('Life and Community in Urban World', 'Urban', 'K1'),
	
	/* Mathematics */
	'M201': new Course('Real Ananlysis (M2)', 'RA', 'C'),
	'M205': new Course('Linear Algebra (M2)', 'LinAlg', 'D'),
	'M203': new Course('Discrete Mathematics (M2)', 'Discrete', 'A'),

	'M302': new Course('Rings and Modules (M5)', 'R&M', 'A'),
	'M303': new Course('Differential Equations (M5)', 'DE', 'C'),
	'M305': new Course('Number Theroy (M5)', 'NumTheory', 'E'),
	'M306': new Course('Calculus of Several Variables (M5)', 'Calc', 'B'),
	
	'M401': new Course('Functional Analysis (M2)', 'FA', 'H'),
	'M403': new Course('Commutative Algebra (M2)', 'CA', 'G'),
	'M467': new Course('Non-linear Analysis (M4)', 'NLAnal', 'D'),
	'M471': new Course('Advanced Number Theory (M4)', 'AdvNeoTheory', 'A'),
	'M479': new Course('Random Graphs (M3)', 'RandGraphs', 'B'),
	'M451': new Course('Advanced Complex Analysis (M3)', 'AdvCompAnal', 'C'),

	/* Physics */
	'P201': new Course('Classical Mechanics I (LH2)', 'CM1', 'E'),
	'P202': new Course('Mathematical Methods I (LH2)', 'MM1', 'F'),
	'P207': new Course('Linear Optics (P107)', 'LinOptics', 'A'),

	'P302': new Course('Statistical Mechanics (LH4)', 'SM', 'E'),
	'P303': new Course('Quantum Mechanics II (P127)', 'NucPart', 'A'),
	'P304': new Course('Special Theory of Relativity (LH3)', 'STR', 'D'),

	'P401': new Course('Classical Mechanics II: Mechanics of Continuous Media (P127)', 'CM2', 'D'),
	'P405/P305': new Course('Atoms, Molecules and Radiation (P127)', 'AMR', 'E'),
	'P453': new Course('Quantum Field Theory I (P108)', 'QFT', 'B'),
	'P460': new Course('Many Particle Physics (P109)', 'MPP', 'C'),
	'P463': new Course('Astronomy and Astrophysics (P107)', 'AAP', 'C'),
	'P466': new Course('Quantum and Nano Elelctronics (P126)', 'QNE', 'A'),
	'P475': new Course('Special topics in Quantum Mechanics (P109)', 'STQM', 'A'),
	'P476': new Course('Non-Equilibrium Statistical Mechanics (P110)', 'NESH', 'A'),
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
