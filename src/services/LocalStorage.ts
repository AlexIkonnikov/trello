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

    getPlainString(key: string, defaultString: string): string {
        const str = this.get(key);
        if (str !== undefined && typeof(str) === 'string') {
            return str;
        } else {
            return defaultString;
        }
    }
};
