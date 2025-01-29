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
	{ required_error: 'Please select at least one learning method' }
);

const ResourceTypeSchema = z.enum(
	['Books', 'Online tutorials', 'Online documents', 'Youtube videos', 'Private courses'],
	{ required_error: 'Please select at least one resource type' }
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
	{ required_error: 'Please select at least one problem' }
);

export const formSchema = z.object({
	step1: z
		.object({
			gender: z.enum(['Male', 'Female'], { required_error: 'Please select your gender' }),
			currentYear: z.enum(['First year', 'Second year', 'Third year', 'Fourth year'], {
				required_error: 'Please select your current year'
			}),
			bacSpecialty: z.enum(['Science', 'Mathematics', 'Technical maths'], {
				required_error: 'Please select your specialty'
			})
		})
		.required(),

	step2: z
		.object({
			hoursPerWeek: z.enum(['10-17', '18-25', '26-33', '34-51', 'More than 41'], {
				required_error: 'Please select your weekly study hours'
			}),
			studyPlace: z.enum(
				["In the school's library", 'In your room (dorms)', "In the dorms' library"],
				{ required_error: 'Please select your study place' }
			),
			studyCompanion: z.enum(['Alone', 'In peer', 'With a group'], {
				required_error: 'Please select your study companion preference'
			}),
			learningMethods: z
				.array(LearningMethodSchema)
				.min(1, 'Please select at least one learning method'),
			resourceTypes: z.array(ResourceTypeSchema).min(1, 'Please select at least one resource type'),
			planar: z.enum(['Yes', 'No'], { required_error: 'Please indicate if you use a planner' }),
			problems: z.array(ProblemSchema).min(1, 'Please select at least one problem you face')
		})
		.required(),

	step3: z
		.object({
			schoolProgramSatisfaction: z.coerce
				.number({ required_error: 'Please rate your satisfaction' })
				.min(0, 'Rating must be at least 0')
				.max(10, 'Rating must not exceed 10'),
			externalActivities: z.enum(['Yes', 'No'], {
				required_error: 'Please indicate if you participate in external activities'
			}),
			motivationLevel: z.coerce
				.number({ required_error: 'Please rate your motivation level' })
				.min(0, 'Rating must be at least 0')
				.max(10, 'Rating must not exceed 10'),
			aiInterest: z.coerce
				.number({ required_error: 'Please rate your interest in AI' })
				.min(0, 'Rating must be at least 0')
				.max(10, 'Rating must not exceed 10'),
			feedbackInfluence: z.enum(['Positively', 'Negatively', 'You do not care about'], {
				required_error: 'Please select how feedback influences you'
			}),
			sleepHours: z.enum(['4 hours or less', '5-7 hours', '8 hours or more'], {
				required_error: 'Please select your average sleep hours'
			}),
			stressHandling: z.coerce
				.number({ required_error: 'Please rate your stress handling' })
				.min(0, 'Rating must be at least 0')
				.max(10, 'Rating must not exceed 10')
		})
		.required(),

	step4: z
		.object({
			englishRating: z.coerce
				.number({ required_error: 'Please rate your English proficiency' })
				.min(0, 'Rating must be at least 0')
				.max(10, 'Rating must not exceed 10'),
			programmingRating: z.coerce
				.number({ required_error: 'Please rate your programming skills' })
				.min(0, 'Rating must be at least 0')
				.max(10, 'Rating must not exceed 10'),
			csRating: z.coerce
				.number({ required_error: 'Please rate your CS knowledge' })
				.min(0, 'Rating must be at least 0')
				.max(10, 'Rating must not exceed 10'),
			mathsRating: z.coerce
				.number({ required_error: 'Please rate your mathematics skills' })
				.min(0, 'Rating must be at least 0')
				.max(10, 'Rating must not exceed 10'),
			s1: z.coerce
				.number({ required_error: 'Please enter your S1 grade' })
				.min(0, 'Grade must be at least 0')
				.max(20, 'Grade must not exceed 20'),
			s2: z.coerce
				.number({ required_error: 'Please enter your S2 grade' })
				.min(0, 'Grade must be at least 0')
				.max(20, 'Grade must not exceed 20'),
			s3: z.coerce
				.number({ required_error: 'Please enter your S3 grade' })
				.min(0, 'Grade must be at least 0')
				.max(20, 'Grade must not exceed 20'),
			s4: z.coerce
				.number({ required_error: 'Please enter your S4 grade' })
				.min(0, 'Grade must be at least 0')
				.max(20, 'Grade must not exceed 20'),
			s5: z.coerce
				.number({ required_error: 'Please enter your S5 grade' })
				.min(0, 'Grade must be at least 0')
				.max(20, 'Grade must not exceed 20'),
			s6: z.coerce
				.number({ required_error: 'Please enter your S6 grade' })
				.min(0, 'Grade must be at least 0')
				.max(20, 'Grade must not exceed 20'),
			annual1: z.coerce
				.number({ required_error: 'Please enter your first year annual grade' })
				.min(0, 'Grade must be at least 0')
				.max(20, 'Grade must not exceed 20'),
			annual2: z.coerce
				.number({ required_error: 'Please enter your second year annual grade' })
				.min(0, 'Grade must be at least 0')
				.max(20, 'Grade must not exceed 20'),
			annual3: z.coerce
				.number({ required_error: 'Please enter your third year annual grade' })
				.min(0, 'Grade must be at least 0')
				.max(20, 'Grade must not exceed 20')
		})
		.required()
});

export type FormSchema = typeof formSchema;
