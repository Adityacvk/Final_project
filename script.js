document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('uploadForm');
    const fileDisplayArea = document.getElementById('fileDisplayArea');

    uploadForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const fileInput = document.getElementById('fileUpload');
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const result = e.target.result;
                const fileType = file.type;

                if (fileType === 'application/pdf') {
                    fileDisplayArea.innerHTML = `<embed src="${result}" width="100%" height="600px" type="application/pdf">`;
                } else if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || fileType === 'text/plain') {
                    fileDisplayArea.innerHTML = `<textarea style="width: 100%; height: 600px;">${result}</textarea>`;
                } else {
                    fileDisplayArea.innerHTML = 'Unsupported file type';
                }
            };

            reader.readAsDataURL(file);
        } else {
            fileDisplayArea.innerHTML = 'No file selected';
        }
    });
});
