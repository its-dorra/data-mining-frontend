export const formFields = {
	gender: ['Male', 'Female'],
	currentYear: ['First year', 'Second year', 'Third year', 'Fourth year'],
	bacSpecialty: ['Science', 'Mathematics', 'Technical maths'],
	hoursPerWeek: ['10-17', '18-25', '26-33', '34-41', '41-60'],
	studyPlace: ["In the school's library", 'In your room (dorms)', "In the dorms' library"],
	studyCompanion: ['Alone', 'In peer', 'With a group'],
	learningMethods: [
		'Lectures',
		'Learning by practicing',
		'Project-based learning',
		'Mind mapping and visualization',
		'Interactive workshops',
		'Online courses and tutorials'
	],
	resourceTypes: [
		'Books',
		'Online tutorials',
		'Online documents',
		'Youtube videos',
		'Private courses'
	],
	planar: ['Yes', 'No'],
	problems: [
		'Pressure',
		'Lack of time',
		'Lack of previous knowledge or experience in the field',
		'Bad quality of internet',
		"Teachers's teaching method",
		'Teaching language',
		'Not having a good (powerful) computer',
		'Private life problems'
	],
	schoolProgramSatisfaction: ['1', '2', '3', '4'],
	externalActivities: ['Yes', 'No'],
	motivationLevel: ['1', '2', '3', '4', '5'],
	aiInterest: ['1', '2', '3', '4', '5'],
	feedbackInfluence: ['Positively', 'Negatively', 'You do not care about'],
	sleepHours: ['4 hours or less', '5-7 hours', '8 hours or more'],
	stressHandling: ['1', '2', '3', '4', '5'],
	englishRating: Array.from({ length: 10 }, (_, i) => `${i + 1}`),
	mathsRating: Array.from({ length: 10 }, (_, i) => `${i + 1}`),
	programmingRating: Array.from({ length: 10 }, (_, i) => `${i + 1}`),
	csRating: Array.from({ length: 10 }, (_, i) => `${i + 1}`),
	annual1: Array.from({ length: 20 }, (_, i) => `${i + 1}`)
} as const;
