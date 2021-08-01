export const LS = {
    set(key: string, data: string): void {
        localStorage.setItem(key, data);
    },

    get(key: string): string | undefined {
        const data = localStorage.getItem(key);
        if (data) {
            return data;
        }
    },

    getStringifyData(key: string, defaulValue: string): string {
        const value = this.get(key);
        return value !== undefined ? value : defaulValue;
    }
};
