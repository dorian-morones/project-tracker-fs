import { supabase } from "../db/supabaseClient";
import type { NewProject } from "../types/newProject_types";

export const useProjects = (onSuccess: (projectCode: string) => void) => {

    const createProjectSupabase = async (newProject: NewProject) => {
        try {
            const { data, error } = await supabase
                .from('projects')
                .insert([newProject])
                .select('id');

            if (error) {
                console.error("Error creating project:", error);
                throw error;
            }

            // Return the ID of the newly created project
            onSuccess(data[0].id);
        }
        catch (error) {
            console.error("Error creating project:", error);
            throw error;
        }
    }

    return {
        createProjectSupabase,
    }
}