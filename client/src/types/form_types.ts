import type { ProductLineOptions, ProjectNotificationOptions } from "./newProject_types";

export type FormValues = {
    projectCode: string;
    description: string;
    productLine: ProductLineOptions;
    wantsNotifications: boolean;
    notificationPreference?: ProjectNotificationOptions;
};

export type ProjectFormProps = {
    onSuccess: (projectId: string) => void;
};
