import bootbox from 'bootbox';

export const noErrorValue = "";

export const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);

        reader.onerror = reject;
    });
};

export const handleConfirmDeleteRow = async (next, eventId) => {
    let deleteMessage = confirmDeleteMessage(eventId);
    await confirmDeletePopUp(deleteMessage);
    next();
};

export const confirmDeleteMessage = (title) => `<h3>Are you sure to delete: "${title}"?</h3>`;

export const confirmDeletePopUp = async (message) => {
    return new Promise((resolve) => {
        bootbox.confirm({
            message: message,
            buttons: {
                confirm: {
                    label: 'Confirm',
                    className: 'btn-danger'
                },
                cancel: {
                    label: 'Cancel',
                    className: 'btn-primary'
                }
            },
            callback: (isConfirm) => {
                if (isConfirm === true) {
                    resolve();
                }
            }
        });
    });
};