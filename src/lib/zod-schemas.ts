import { z } from 'zod';

const LearningMethodSchema = z.enum(
	[
		'Lectures',
		'Learning by practicing',
		'Project-based learning',
		'Mind mapping and visualization',
		'Interactive workshops',
		'Online courses and tutorials'
	],
	{ message: 'Please select at least one learning method' }
);

const ResourceTypeSchema = z.enum(
	['Books', 'Online tutorials', 'Online documents', 'Youtube videos', 'Private courses'],
	{ message: 'Please select at least one resource type' }
);

const ProblemSchema = z.enum(
	[
		'Pressure',
		'Lack of time',
		'Lack of previous knowledge or experience in the field',
		'Bad quality of internet',
		"Teachers's teaching method",
		'Teaching language',
		'Not having a good (powerful) computer',
		'Private life problems'
	],
	{ message: 'Please select at least one problem' }
);

export const formSchema = z.object({
	gender: z.enum(['Male', 'Female'], { message: 'Please select your gender' }),
	currentYear: z.enum(['First year', 'Second year', 'Third year', 'Fourth year'], {
		message: 'Please select your current year'
	}),
	bacSpecialty: z.enum(['Science', 'Mathematics', 'Technical maths'], {
		message: 'Please select your specialty'
	}),
	hoursPerWeek: z.enum(['10-17', '18-25', '26-33', '34-51', 'More than 41'], {
		message: 'Please select your weekly study hours'
	}),
	studyPlace: z.enum(["In the school's library", 'In your room (dorms)', "In the dorms' library"], {
		message: 'Please select your study place'
	}),
	studyCompanion: z.enum(['Alone', 'In peer', 'With a group'], {
		message: 'Please select your study companion preference'
	}),
	learningMethods: z
		.array(LearningMethodSchema)
		.min(1, 'Please select at least one learning method'),
	resourceTypes: z.array(ResourceTypeSchema).min(1, 'Please select at least one resource type'),
	planar: z.enum(['Yes', 'No'], { message: 'Please indicate if you use a planner' }),
	problems: z
		.array(ProblemSchema)
		.min(1, 'Please select at least one problem you face')
		.max(4, { message: 'Please select at most 4 problems' }),
	schoolProgramSatisfaction: z.coerce
		.number({ message: 'Please rate your satisfaction' })
		.min(0, 'Rating must be at least 0')
		.max(10, 'Rating must not exceed 10'),
	externalActivities: z.enum(['Yes', 'No'], {
		message: 'Please indicate if you participate in external activities'
	}),
	motivationLevel: z.coerce
		.number({ message: 'Please rate your motivation level' })
		.min(0, 'Rating must be at least 0')
		.max(10, 'Rating must not exceed 10'),
	aiInterest: z.coerce
		.number({ message: 'Please rate your interest in AI' })
		.min(0, 'Rating must be at least 0')
		.max(10, 'Rating must not exceed 10'),
	feedbackInfluence: z.enum(['Positively', 'Negatively', 'You do not care about'], {
		message: 'Please select how feedback influences you'
	}),
	sleepHours: z.enum(['4 hours or less', '5-7 hours', '8 hours or more'], {
		message: 'Please select your average sleep hours'
	}),
	stressHandling: z.coerce
		.number({ message: 'Please rate your stress handling' })
		.min(0, 'Rating must be at least 0')
		.max(10, 'Rating must not exceed 10'),

	englishRating: z.coerce
		.number({ message: 'Please rate your English proficiency' })
		.min(0, 'Rating must be at least 0')
		.max(10, 'Rating must not exceed 10'),
	programmingRating: z.coerce
		.number({ message: 'Please rate your programming skills' })
		.min(0, 'Rating must be at least 0')
		.max(10, 'Rating must not exceed 10'),
	csRating: z.coerce
		.number({ message: 'Please rate your CS knowledge' })
		.min(0, 'Rating must be at least 0')
		.max(10, 'Rating must not exceed 10'),
	mathsRating: z.coerce
		.number({ message: 'Please rate your mathematics skills' })
		.min(0, 'Rating must be at least 0')
		.max(10, 'Rating must not exceed 10'),

	annual1: z.coerce
		.number({ message: 'Please enter your first year annual grade' })
		.min(0, 'Grade must be at least 0')
		.max(20, 'Grade must not exceed 20')
});

export type FormSchema = typeof formSchema;
