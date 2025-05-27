import React from 'react';

// Form
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ProjectValidationSchema } from '../../schemas/projectForm_schema';
import type { FormValues, ProjectFormProps } from '../../types/form_types'
import type { NewProject, ProductLineOptions, ProjectNotificationOptions } from '../../types/newProject_types';

// Hooks
import { useProjects } from '../../hooks/useProjects';

export const ProjectForm: React.FC<ProjectFormProps> = ({ onSuccess }) => {

    const { createProjectSupabase } = useProjects(onSuccess);

    const initialValues: FormValues = {
        projectCode: '',
        description: '',
        productLine: '' as ProductLineOptions,
        wantsNotifications: false,
        notificationPreference: '' as ProjectNotificationOptions | undefined,
    }

    // Handle form submission
    const handleSubmit = (values: FormValues) => {
        console.log("🚀 ~ handleSubmit ~ values:", values)
        // transform the form values to match the NewProject type
        let newProjectFormatting: NewProject = {
            project_code: values.projectCode,
            description: values.description,
            product_line: values.productLine,
            wants_notifications: values.wantsNotifications,
        };
        console.log("🚀 ~ handleSubmit ~ newProjectFormatting:", newProjectFormatting)

        // If the user wants notifications, add the notification preference
        // to the newProjectFormatting object
        if (values.wantsNotifications && values.notificationPreference) {
            newProjectFormatting.notification_preference = values.notificationPreference;
        }

        createProjectSupabase(newProjectFormatting)

    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={ProjectValidationSchema}
            onSubmit={handleSubmit}
        >
            {({ values }) => (
                <Form>
                    <div>
                        <label>Project Code</label>
                        <Field name="projectCode" />
                        <ErrorMessage name='projectCode' component='div' />
                    </div>

                    <div>
                        <label>Description</label>
                        <Field as="textarea" name='description'></Field>
                    </div>

                    <div>
                        <label>Product line</label>
                        <Field as='select' name='productLine'>
                            <option value="">Select one</option>
                            <option value="iPhone">iPhone</option>
                            <option value="iPad">iPad</option>
                            <option value="Mac">Mac</option>
                            <option value="Vision Pro">Vision Pro</option>
                            <option value="Other">Other</option>
                        </Field>
                        <ErrorMessage name="productLine" component="div" />
                    </div>

                    <div>
                        <label>
                            <Field type="checkbox" name="wantsNotifications" />
                            Sign up for notifications from Tim Cook?
                        </label>
                    </div>

                    {values.wantsNotifications && (
                        <div>
                            <label>Notification Preference</label>
                            <Field as="select" name="notificationPreference">
                                <option value="">Select one</option>
                                <option value="All notifications">All notifications</option>
                                <option value="Daily digest">Daily digest</option>
                                <option value="Weekly digest">Weekly digest</option>
                            </Field>
                            <ErrorMessage name="notificationPreference" component="div" />
                        </div>
                    )}

                    <button type="submit">Submit</button>

                </Form>
            )}
        </Formik>

    )

};