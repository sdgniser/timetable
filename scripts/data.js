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
	'SHSS': new School('H', 'School of Humanities and Social Sciences', []),
};

let courses = {

	//always use A1, A2, ... for degenerates of slot A

	/* Biology */
	'B201': new Course('Microbiology', 'μBio', 'C'),
	'B202': new Course('Biochemistry', 'BChem', 'F'),
	'B203': new Course('Biophysics & Biostatistics', 'BPhy', 'A'),

	'B301': new Course('Physiology I (Animal)', 'APhys', 'B'),
	'B302': new Course('Physiology II (Plant)', 'PPhys', 'F'),
	'B303': new Course('Ecology', 'Eco', 'E'),
	'B354': new Course('Neurobiology', 'Neuro', 'A'),
	'B355': new Course('Structural Biology', 'StructB', 'A'),

	'B402': new Course('Developmental Biology', 'Dev Bio', 'F'),
	'B403': new Course('Bioinformatics', 'BInfo', 'K'),
	'B452': new Course('Genetic Engineering', 'Genetic', 'A'),
	'B460': new Course('Virology', 'Viro', 'J'),

	'B551': new Course('Advanced Molecular Biology', 'AMol', 'C'),
	'B559': new Course('Ion Channels', 'iChan', 'I'),
	'B562': new Course('Molecular Errors in Disease', 'merr', 'B'),

	/* Chemistry */
	'C201': new Course('Basic Inorganic Chemistry', 'IChem', 'E'),
	'C207': new Course('Mathematical Methods for Chemists', 'MMChem', 'B'),
	'C203': new Course('Reaction Mechanisms in Organic Chemistry', 'OChem', 'D'),

	'C301': new Course('Physical Organic Chemistry', 'POChem', 'A'),
	'C302': new Course('Molecular Spectroscopy and Group Theory', 'Spectre', 'K'),
	'C307': new Course('Thermodynamics and Electrochemistry', 'Thermo', 'C'),

	'C401': new Course('Physical Methods in Chemistry II', 'PChem II', 'I'),
	'C403': new Course('Chemistry of Heterocycles and Natural Products', 'Hetero', 'K'),

	'C560': new Course('Chemistry of Nanomaterials', 'NanoC', 'C'),
	'C564': new Course('Theory of Molecular Spectroscopy', 'MolSpect', 'A'),
	'C566': new Course('Catalysis', 'Cat', 'B'),
	'C567': new Course('Advanced Main Group Chemistry', 'AdvMG', 'I'),
	'C569': new Course('Biomacromolecules', 'BioMM', 'A'),

	/* Computer Science */
	'CS201': new Course('Theory of Computation', 'ThComp', 'I'),
	'CS301': new Course('Design and Analysis of Algorithms', 'Algo', 'E'),
	'CS452': new Course('Algorithmic Coding Theory', 'CG', 'B'),
	'CS460': new Course('Machine Learning', 'ML', 'F'),

	/*Humanities*/
	'H209': new Course('Speculative Fiction', 'SpecFic', 'K1'),
	'H225': new Course('Introduction to Psychology*', 'Psych', 'K2'),
	'H235': new Course('Sociology of Science and Technology', 'Socio', 'J1'),
	'H238': new Course('Life and Community in the Urban World', 'Urban', 'J2'),

	/* Mathematics */
	'M201': new Course('Real Analysis', 'RAnal', 'B'),
	'M203': new Course('Discrete Mathematics', 'Discrete', 'C'),
	'M205': new Course('Linear Algebra', 'Lin Alg', 'D'),

	'M302': new Course('Rings and Modules', 'Modules', 'C'),
	'M303': new Course('Differential Equation', 'DiffQ', 'K'),
	'M304': new Course('Topology', 'Topo', 'B'),
	'M305': new Course('Statistics', 'Stats', 'A'),
	'M306': new Course('Calculus of Several Variables', 'SVC', 'D'),

	'M401': new Course('Functional Analysis', 'FAnal', 'A'),
	'M403': new Course('Commutative Algebra', 'CommA', 'C'),
	'M451': new Course('Advanced Complex Analysis', 'ACAnal', 'A'),
	'M453': new Course('Advanced Linear Algebra', 'ALinA', 'D'),
	'M454': new Course('Partial Differential Equations', 'PDEs', 'I'),
	'M463': new Course('Finite Fields', 'Field', 'D'),

	/* Physics */
	'P201': new Course('Classical Mechanics I', 'CM I', 'A'),
	'P202': new Course('Mathematical Methods I', 'MMPhy I', 'C'),
	'P207': new Course('Linear Optics', 'LinOpt', 'F'),

	'P302': new Course('Statistical Mechanics', 'StatMech', 'I'),
	'P303': new Course('Quantum Mechanics II', 'QM II', 'J'),
	'P304': new Course('Special Theory of Relativity', 'STR', 'F'),

	'P401': new Course('Classical Mechanics II: Mechanics of Continuous Media', 'CM II', 'E'),
	'P451': new Course('Advanced Solid State Physics', 'ASSP', 'C'),
	'P453': new Course('Quantum Field Theory', 'QFT', 'A'),
	'P462': new Course('Quantum Optics', 'QOpt', 'B'),
	'P471': new Course('Quantum Information and Quantum Computation', 'Qinf', 'D'),
	'P473': new Course('Experimental Techniques', 'Exp', 'J'),
	'P474': new Course('Cosmology', 'Cosmo', 'C'),


};

for (let course in courses) {
	for (let school in schools) {
		if (schools[school].code === course.match(/^[^0-9]*/)[0]) {
			schools[school].courses.push(course);
		}
	}
}
