export const noErrorValue = "";

export const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);

        reader.onerror = reject;
    });
};