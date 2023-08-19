export const useProject = () => {
    const getAll = async () => {
        try {
            const response = await fetch('/api/project/getProjects');
            const json = await response.json();
            return json;
        } catch (error) {
            console.log(error);
        }
    }

    return ({
        getAll,
    })
}