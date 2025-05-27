
export type NewProject = {
    project_code: string;
    description: string;
    product_line: ProductLineOptions
    wants_notifications: boolean;
    notification_preference?: ProjectNotificationOptions;
};

export type ProductLineOptions = 'iPhone' | 'iPad' | 'Mac' | 'Vision Pro' | 'Other';
export type ProjectNotificationOptions = 'All notifications' | 'Daily digest' | 'Weekly digest';