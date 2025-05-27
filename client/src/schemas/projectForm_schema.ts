import * as Yup from 'yup';

export const ProjectValidationSchema = Yup.object({
    projectCode: Yup.string()
        .matches(/^[A-Z]{3}-\d{3}$/, 'Format must be AAA-123')
        .required('Required'),
    description: Yup.string(),
    productLine: Yup.string()
        .oneOf(['iPhone', 'iPad', 'Mac', 'Vision Pro', 'Other'])
        .required('Required'),
    wantsNotifications: Yup.boolean(),
    notificationPreference: Yup.string().when('wantsNotifications', {
        is: true,
        then: (schema) =>
            schema
                .oneOf(['All notifications', 'Daily digest', 'Weekly digest'])
                .required('Select a notification type'),
        otherwise: (schema) => schema.notRequired(),
    }),
});