const baseDate = new Date(2026, 6, 1);

const getMonthsDiff = () => {
    const now = new Date();
    return (now.getFullYear() - baseDate.getFullYear()) * 12 + (now.getMonth() - baseDate.getMonth());
};

export const getCleanRunValue = () => {
    const monthsDiff = getMonthsDiff();
    const baseValue = 10;
    const total = baseValue + (monthsDiff * 2);
    return `${total}Lac.+ Kms.`;
};

export const getFuelSavedValue = () => {
    const monthsDiff = getMonthsDiff();
    const baseLitres = 250000;
    const total = baseLitres + (monthsDiff * 80000);
    if (total >= 100000) {
        return `${(total / 100000).toFixed(1)}Lac.+ Litres`;
    }
    return `${total.toLocaleString()}+ Litres`;
};

export const getTreeSavedValue = () => {
    const monthsDiff = getMonthsDiff();
    const baseTrees = 5500;
    const total = baseTrees + (monthsDiff * 4760);
    if (total >= 1000) {
        return `${(total / 1000).toFixed(1)}K+`;
    }
    return `${total.toLocaleString()}+`;
};

export const getCO2SavedValue = () => {
    const monthsDiff = getMonthsDiff();
    const baseTons = 500;
    const total = baseTons + (monthsDiff * 100);
    return `${total}+ Tons`;
};

export const getCleanRunNumber = () => {
    const monthsDiff = getMonthsDiff();
    const baseValue = 10;
    return baseValue + (monthsDiff * 2);
};

export const getCO2Number = () => {
    const monthsDiff = getMonthsDiff();
    const baseTons = 500;
    return baseTons + (monthsDiff * 100);
};
