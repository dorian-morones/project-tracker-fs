import React from 'react';

// Form
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ProjectValidationSchema } from '../../schemas/projectForm_schema';
import type { FormValues, ProjectFormProps } from '../../types/form_types'
import type { NewProject, ProductLineOptions, ProjectNotificationOptions } from '../../types/newProject_types';

// Hooks
import { useProjects } from '../../hooks/useProjects';
import { Box, Button, Flex, Text } from '@radix-ui/themes';

export const ProjectForm: React.FC<ProjectFormProps> = ({ onSuccess }) => {

    const { createProjectSupabase, createProjectAPI } = useProjects(onSuccess);

    const initialValues: FormValues = {
        projectCode: '',
        description: '',
        productLine: '' as ProductLineOptions,
        wantsNotifications: false,
        notificationPreference: '' as ProjectNotificationOptions | undefined,
    }

    // Handle form submission
    const handleSubmit = (values: FormValues) => {
        // transform the form values to match the NewProject type
        let newProjectFormatting: NewProject = {
            project_code: values.projectCode,
            description: values.description,
            product_line: values.productLine,
            wants_notifications: values.wantsNotifications,
        };

        // If the user wants notifications, add the notification preference
        // to the newProjectFormatting object
        if (values.wantsNotifications && values.notificationPreference) {
            newProjectFormatting.notification_preference = values.notificationPreference;
        }

        createProjectAPI(newProjectFormatting)
    }

    return (
        <Flex
            width="auto"
            height="auto"
            align="center"
            justify="center"
        >
            <Formik
                initialValues={initialValues}
                validationSchema={ProjectValidationSchema}
                onSubmit={handleSubmit}
            >
                {({ values }) => (
                    <Form>
                        <Flex gap="3" direction="column" width="400px" height="100%" align="center" justify="center" p="4">

                            <Flex width="100%" align="center" justify="between" gap="4">
                                <Box>
                                    <label htmlFor="projectCode">
                                        <Text size="4" align="left">Project Code</Text>
                                    </label>
                                </Box>

                                <Box width="50%">
                                    <Field id="projectCode" name="projectCode" style={{ width: '100%' }} />
                                    <ErrorMessage name="projectCode" component="div" />
                                </Box>
                            </Flex>

                            <Flex width="100%" align="center" justify="between" gap="4">
                                <Box>
                                    <label htmlFor="description">
                                        <Text size="4" align="left">Description</Text>
                                    </label>
                                </Box>

                                <Box width="50%">
                                    <Field as="textarea" id="description" name='description' style={{ width: '100%' }} />
                                    <ErrorMessage name="description" component="div" />
                                </Box>
                            </Flex>

                            <Flex width="100%" align="center" justify="between" gap="4" mb="3">
                                <Box>
                                    <label htmlFor="productLine">
                                        <Text size="4">Product line</Text>
                                    </label>
                                </Box>

                                <Box width="50%">
                                    <Field as="select" name="productLine" id="productLine" style={{ width: '100%' }}>
                                        <option value="">Select one</option>
                                        <option value="iPhone">iPhone</option>
                                        <option value="iPad">iPad</option>
                                        <option value="Mac">Mac</option>
                                        <option value="Vision Pro">Vision Pro</option>
                                        <option value="Other">Other</option>
                                    </Field>
                                    <ErrorMessage name="productLine" component="div" />
                                </Box>
                            </Flex>

                            <Flex as="div" width="100%" height="100%" align="center" justify="between" gap="4">
                                <Box>
                                    <label htmlFor="wantsNotifications">
                                        <Text size="4" align="left">Notifications</Text>
                                    </label>
                                </Box>
                                <Box width="50%">
                                    <Field type="checkbox" id="wantsNotifications" name="wantsNotifications" style={{ width: '100%' }} />
                                    <label htmlFor="wantsNotifications">Sign up for notifications from Tim Cook?</label>
                                    <ErrorMessage name="wantsNotifications" component="div" />
                                </Box>
                            </Flex>

                            {values.wantsNotifications && (
                                <Flex width="100%" align="center" justify="between" gap="4" mb="3">
                                    <Box>
                                        <label htmlFor="notificationPreference">
                                            <Text size="4">Notification Preference</Text>
                                        </label>
                                    </Box>

                                    <Box width="50%">
                                        <Field
                                            as="select"
                                            name="notificationPreference"
                                            id="notificationPreference"
                                            style={{ width: '100%' }}
                                        >
                                            <option value="">Select one</option>
                                            <option value="All notifications">All notifications</option>
                                            <option value="Daily digest">Daily digest</option>
                                            <option value="Weekly digest">Weekly digest</option>
                                        </Field>
                                        <ErrorMessage name="notificationPreference" component="div" />
                                    </Box>
                                </Flex>
                            )}

                            <Button type="submit" size="2" variant="solid">Submit</Button>
                            {/* <button type="submit">Submit</button> */}
                        </Flex>

                    </Form>
                )}
            </Formik>
        </Flex>

    )

};